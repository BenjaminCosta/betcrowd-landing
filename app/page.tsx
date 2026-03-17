import { redirect } from "next/navigation"

type HomePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

const getFirstQueryValue = (value: string | string[] | undefined): string | null => {
  if (Array.isArray(value)) {
    return value[0] ?? null
  }

  return value ?? null
}

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {}
  const params = new URLSearchParams()

  const tournamentId = getFirstQueryValue(resolvedSearchParams.tournamentId)
  const token = getFirstQueryValue(resolvedSearchParams.token)

  if (tournamentId) params.set("tournamentId", tournamentId)
  if (token) params.set("token", token)

  const query = params.toString()
  redirect(query ? `/join?${query}` : "/join")
}
