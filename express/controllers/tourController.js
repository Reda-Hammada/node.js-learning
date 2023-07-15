const fs = require("fs");

const tours = JSON.parse(fs.readFileSync(`${__dirname}../../tours.json`));

exports.getAllTours = (req, res) => {
  res.status(200).json({
    message: tours,
    status: 200,
    app: "natours",
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(`${__dirname}/tours.json`, JSON.stringify(tours), (err) => {});
  res.send("done");
};

exports.getTourById = (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id === id);
  console.log(tour);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {};

exports.deleteTour = (req, res) => {};
