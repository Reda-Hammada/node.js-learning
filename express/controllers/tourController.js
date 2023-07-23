const fs = require("fs");
const Tour = require("../models/tourModel");

exports.getAllTours = async(req, res) => {
  try{

    const tours = await Tour.find()

    res.status(200).json({
      status:'success',
      results:tours.length,
      data:{
        tours,
      }
    })

  }catch(err){
    res.status(400).json({
      status:'failed',
      message:err.message
    })
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.getTourById = async (req, res) => {};

exports.updateTour = async(req, res) => {};

exports.deleteTour = async(req, res) => {};
