
const makeGetRequest = async(url)=> {
    return await fetch(url, {
        headers:{
            "Authorization": 'Bearer eb214f865d9d8eebdc842a6d506739713f8d8eae3a251a3c3bec3d36410852a8'
        },
    }).then(response=>response.json());
}

async function makePostRequest(url="", method , data={}){
    const response = await fetch(url, {
    method,
    headers:{
        "Content-Type": "application/json",
        "Authorization": 'Bearer eb214f865d9d8eebdc842a6d506739713f8d8eae3a251a3c3bec3d36410852a8'
    },
    body: JSON.stringify(data)
    });
    return response.json()
}

module.exports={
    makeGetRequest,
    makePostRequest
}