export async function badRequest(message) {
    console.log("badRequest: ", typeof message)
    console.log("badRequest: ", message)
    return {
        "status": "error",
        "message": message
    }
}