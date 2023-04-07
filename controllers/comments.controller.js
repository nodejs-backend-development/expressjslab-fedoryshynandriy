//const { makeGetRequest, makePostRequest } = require("C:/js/expressjslab-fedoryshynandriy/clients/httpClient.js");
const {makeGetRequest, makePostRequest} = require('../clients/httpClient');

const getComments = async (req, res) => {
    const {id} = req.params;
    //console.log(`https://gorest.co.in/public/v2/posts/${id}/comments`)
    const data = await makeGetRequest(`https://gorest.co.in/public/v2/posts/${id}/comments`);
    console.log('Pulled data: ');
    console.log(data);
    res.status(200).json(data);
};

const addComment = async (req, res) => {
    const {id} = req.params;
    const newComment = req.body;
   // console.log(`https://gorest.co.in/public/v2/posts/${id}/comments`);
    console.log('Added data: ');
    console.log(newComment);
    if(Object.keys(newComment).length===0){
        res.status(400).send({});
    }
    else{
    const data = await makePostRequest(`https://gorest.co.in/public/v2/posts/${id}/comments`, 'POST', newComment);
    res.status(201).json(data);
    }
};

module.exports = {
    getComments,
    addComment,
};
