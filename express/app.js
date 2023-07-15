const { create } = require("domain");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));

app.route('api/v1/tours')
    .get(getAllTours)
    .post(createTour)
app.route('api/v1/tours/:id')
    .get(getTourById)
    .patch(updateTour)
    .delete(deleteTour)

const getAllTours = (req,res) => {
  res.status(200).json({
    message: tours,
    status: 200,
    app: "natours",
  });
}

const createTour = (req,res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/tours.json`, JSON.stringify(tours), (err) => {});
    res.send("done");
  
}

const getTourById = (req,res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id === id);
  console.log(tour);
     res.status(200).json({
      status: "success",
      data: {
        tour,
      }
    });
}

const updateTour = (req,res) => {

}

const deleteTour = (req,res)=> {

}

app.listen(port, () => {
  console.log(`App running on port ${port}... `);
});