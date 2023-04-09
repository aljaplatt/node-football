export async function goodResponse200(data) {
    console.log("data: ", data)
    return {
        "status": "Success",
        "data": data
    }
}