import { RequestInit } from 'next/dist/server/web/spec-extension/request'

export const fetchWrapper = async (
  url: string,
  options: RequestInit | undefined,
) => {
  const response = await fetch(`http://127.0.0.1:3333${url}`, options)
  const data = await response.json()
  return data
}
