import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ message: 'Yo depuis l’API Astro !' }),
    { status: 200 }
  )
}
