import { useEffect, useState } from "react";
import api from "./api";

export default function CaptureEmail(): string {
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function getUrl() {
      const response = await api.get(`https://stevanato--hiringcoders202105.myvtex.com/api/vtexid/pub/authenticated/user`)

      setEmail(response.data.user)
    }
    getUrl()

  }, [])

  return email;
}