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

exports.getTourById = async (req, res) => {

    const {id} = req.params
    try{
      const tour = await Tour.findById(id);
      res.status(200).json({
        status: 'success',
        data:{
          tour
        }
      })
    }
    catch(err){
      res.status(404).json({
        status:'fail',
        message:err,
      })
    }
};

exports.updateTour = async(req, res) => {

  const {id} = req.params;
  
   try{ 
    const tour = await Tour.findByIdAndUpdate(id,req.body,{
      new:true,
      runValidators:true,
     });

     if(!tour){
       res.status(404).json({
        status:'Not found',
        message:'Record not found',
      })
     }
     
    res.status(200).json({
      status:'success',
      data:{
        tour,
      }
    });
   }
   catch(err){
      res.status(500).json({
        status:'fail',
        message:err.message,

      });
   }
}

exports.deleteTour = async(req, res) => {

  const {id} = req.params

  try{

    const tour = await Tour.findByIdAndDelete(id);

    if(!tour){
      res.status(404).json({
        status:'Not found',
        message:'record not found'
      })
    }

    res.status(200).json({
      status:'success',
      data:{
        tour,
      }
    })

  }
  catch(err){
    res.status(500).json({
      status:'fail',
      message:err.message
    })
  }

};
