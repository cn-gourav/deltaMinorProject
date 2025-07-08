import express from "express";
const app = express();
app.use(express.static('dist'));


app.get("/", (req, res) => {
  res.send("Server is ready");
});



//get a list of 5 jokes

app.get("/api/jokes" , (req,res)=>{
     const jokes = [
          {
               id:1,
               title: 'A joke',
               content:'This is a Joke',
          },
          {
               id:2,
               title: 'Another joke',
               content:'This is another Joke',
          },
          {
               id:3,
               title: 'A third joke',
               content:'This is third Joke',
          },
          {
               id:4,
               title: 'A fourth joke',
               content:'This is fourth Joke',
          },
          {
               id:5,
               title: 'A fiveth joke',
               content:'This is fiveth Joke',
          }
     ]

     res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
