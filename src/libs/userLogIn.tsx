export default async function userLogIn(userEmail:string, userPassword:string) {
    const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: "POST",
        headers: {
            "content-Type" : "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password:userPassword,
        }),
    })
    if (!response.ok) {
        throw new Error("failed to log-in")
    }

    return await response.json()
}