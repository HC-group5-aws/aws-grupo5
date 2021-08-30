import React, { useEffect, useState } from 'react'

import api from './service/api'

// interface LeadProps {
//   name: string
//   email: string
//   type: string
//   fone: string
// }

// interface Leads {
//   ID: string
//   lead: LeadProps[]
// }

const UpdateLeadData: StorefrontFunctionComponent = () => {
  const [email, setEmail] = useState('')
  const [text, setText] = useState('teste')
  // const [leads, setLeads] = useState<LeadProps[]>()

  useEffect(() => {
    async function getUrl() {
      const response = await api.get(
        `https://ymquint--hiringcoders202105.myvtex.com/api/vtexid/pub/authenticated/user`
      )

      // getUrl()

      if (response.data.user) {
        setEmail(response.data.user)
      }
    }

    getUrl()
    console.log(email || 'error')
  }, [email])

  function handleChange() {
    setText('Button foi clicado')
  }

  // setLeads({})
  console.log('-----------email', email)

  return (
    <div>
      <button onClick={handleChange}>{text}</button>
      <h1>{email || 'Email não capturadado'}</h1>
    </div>
  )
}

export default UpdateLeadData
