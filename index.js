const { application } = require('express');
const express = require('express')
const app = express();

app.use(express.json())

const courses = [
  {
    courseName: "english",
    id: 1,
  },
  {
    courseName: "EVS",
    id: 2,
  },
  {
    courseName: "SST",
    id: 3,
  },
  {
    courseName: "Math",
    id: 4,
  },
];

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/api/courses/:id', (req, res)=>{
    let fetchCourse =  courses.find(c => c.id === parseInt(req.params.id));
    if(fetchCourse == undefined){ //give 404
        res.status(404).send("Course not found")
    }
    else{
        res.send(fetchCourse)
    }
})

//POST 
api.post('/api/courses', (req,res)=>{
    const courseObj = {
        id: courses.length+1,
        courseName: req.body.name
    }
    courses.push(courseObj);  
    res.send(courseObj); 
})


//PORT
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}`))