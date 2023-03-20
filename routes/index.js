const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

module.exports = router;


//
// const fs = require("fs/promises");
// const express = require("express");
// const {v4: uuid} =require("uuid");
// const app = express();

// app.use(express.json());

// app.get("/comments/:id", async (req, res) =>{
//   const id = req.params.id;
//   let content;

//   try{
//     content = await fs.readFile(`./comments/${id}.txt`, "utf-8")
//   } catch(err){
//     return res.sendStatus(404);
//   }

//   res.json({
//     content: content
//   });
// });


//  app.post("/comments", async (req, res) =>{
//      const id = uuid();
//      const content  = req.body.content;

//      if(!content){
//         return res.sendStatus(400);
//      }

//      await fs.mkdir("./comments", { recursive:true });
//      await fs.writeFile(`./comments/${id}.txt`, content);

//      res.status(201).json({
//         id: id
//      });
//  });


// app.listen(3000, () => console.log("API Server is running..."));


 //"start": "node ./bin/www",