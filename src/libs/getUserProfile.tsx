export default async function getUserProfile(token: string) {
    const response = await fetch('https://presentation-day-1-backendprojingjing.vercel.app/api/v1/auth/me', {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache' 
        }
    })

    if (!response.ok) {
        throw new Error("cannot get user profile")
    }

    return await response.json()
}
