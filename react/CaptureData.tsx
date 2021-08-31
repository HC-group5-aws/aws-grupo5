/* eslint-disable vtex/prefer-early-return */
import React, { useState, useEffect } from 'react'

import apiVtex from './service/apiVtex'

// type Product = {
//   id: number
//   ProductName: string
//   ProductDescription: string
//   IsActive: boolean
//   ImageUrl: string
// }

// import api from './service/api'

const CaptureData: StorefrontFunctionComponent = () => {
  const [products, setProducts] = useState<any[]>([])

  const productsArray: any[] = []

  useEffect(() => {
    async function getUrl() {
      const response = await apiVtex.get('/_v/products')

      // primeiro temos que pegar todas as keys, poduct id
      const sku = Object.values(response.data.data)

      if (response.data.data) {
        sku.map((keys: any) => {
          keys.map((key: any)=>{
            if (key !== undefined) {

              // get product context
              
              apiVtex.get(`/_v/productsId/${key}`).then((resp) => {
                setProducts([...products, 
                {
                  id: key,
                  ProductName: resp.data.ProductName,
                  ProductDescription: resp.data.ProductDescription,
                  IsActive: resp.data.IsActive,
                  ImageUrl: resp.data.ImageUrl,
                  DetailUrl: resp.data.DetailUrl
                }])
              })
          }
          })

        })
        setProducts(productsArray)
      }
    }
    
    getUrl()
  }, [])

  products.map((product: any) => {
        console.log(product)
      })

  return (
    
    <div>
      <h1>Teste</h1>
      {products.map((product: any) => {
        product.ProductName
      })}
    </div>
  )
}

export default CaptureData
