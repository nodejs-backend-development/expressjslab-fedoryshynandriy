
const getComments = async (req, res) => {
    const {id} = req.params;
    const start = process.hrtime(); 
    fetch('https://gorest.co.in/public/v2/posts/'+id+'/comments', {
        headers: {
            'Authorization': 'Bearer eb214f865d9d8eebdc842a6d506739713f8d8eae3a251a3c3bec3d36410852a8'
        }
    })
    .then(response => response.json())
    .then(data => {
        const end = process.hrtime(start);
        console.log('-----------------------------------------------------------'); 
        console.log(`GET request took ${end[0]}s ${end[1]/1000000}ms`); 
        console.log('-----------------------------------------------------------'); 
        res.status(200).json(data);
    })
    .catch(error => console.error(error));
};

const addComment = async (req, res) => {
    const {id} = req.params;
    const newComment = req.body;
    const start = process.hrtime(); 
    fetch("https://gorest.co.in/public/v2/posts/"+id+"/comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': 'Bearer eb214f865d9d8eebdc842a6d506739713f8d8eae3a251a3c3bec3d36410852a8'
        }
    })
    .then(response => response.json())
    .then(data => {
        const end = process.hrtime(start);
        console.log('-----------------------------------------------------------'); 
        console.log(`POST request took ${end[0]}s ${end[1]/1000000}ms`); 
        console.log('-----------------------------------------------------------'); 

        res.status(200).json(data);
    })
    .catch(error => console.log(error));
};

module.exports = {
    getComments,
    addComment,
};
