import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest, response: NextResponse) => {
  const query = request.nextUrl.searchParams.get('q')
  const result = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${process.env.NEXT_PUBLIC_OPEN_CAGE_KEY}`,
  )
  const data = await result.json()

  return NextResponse.json(data)
}
