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
        Object.values(sku).map((key: any) => {
          if (key !== []) {
            // get product context
            apiVtex.get(`/_v/productsId/${key}`).then((resp) => {
              productsArray.push({
                id: resp.data.id,
                ProductName: resp.data.ProductName,
                ProductDescription: resp.data.ProductDescription,
                IsActive: resp.data.IsActive,
                ImageUrl: resp.data.ImageUrl,
              })
            })
          }
        })
        setProducts(productsArray)
      }
    }

    getUrl()
    console.log(products)
    products.map((item) => console.log(item.ProductName))
  }, [])

  // console.log(products)
  // products.forEach((item) => console.log('teste'))
  // products.map((product: any) => {
  //   return console.log('product', product)
  // })

  return (
    <div>
      {products.map((product: any) => {
        return product.ProductName
      })}
    </div>
  )
}

export default CaptureData
