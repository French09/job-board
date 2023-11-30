import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";

// GET EVERY HIRER'S JOB
const getAllProperJobs = async (req, res) => {
  const { userId } = req.user;
  const { search, jobStatus, jobType, sort } = req.query;

  try {
    const queryObject = {
      createdBy: userId,
    };

    if (search) {
      queryObject.$or = [
        { position: { $regex: search, $option: "i" } },
        { company: { $regex: search, $option: "i" } },
      ];
    }

    if (jobStatus && jobStatus !== "all") {
      queryObject.jobStatus = jobStatus;
    }

    if (jobType && jobType !== "all") {
      queryObject.jobType = jobType;
    }

    const sortOptions = {
      newest: "-createdAt",
      oldest: "createdAt",
      "a-z": "position",
      "z-a": "-position",
    };

    const sortKey = sortOptions[sort] || sortOptions.newest;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const jobs = await Job.find(queryObject)
      .sort(sortKey)
      .skip(skip)
      .limit(limit);

    const totalJobs = await Job.countDocuments(queryObject);
    const numbOfPages = Math.ceil(totalJobs / limit);

    res
      .status(StatusCodes.OK)
      .json({ totalJobs, numbOfPages, currentPage: page, jobs });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to fetch jobs.", error: error.message });
  }
};

//CREATE JOB
const createJob = async (req, res) => {
  const { userId } = req.user;
  try {
    req.body.createdBy = userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error while triggering createJob controller",
      error: error.message,
    });
  }
};

//GET ALL JOBS FROM DB
const getAllJobs = async (req, res) => {
  const { search, jobStatus, jobType, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  //pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const jobs = await Job.find().sort(sortKey).skip(skip).limit(limit);

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res
    .status(StatusCodes.OK)
    .json({ totalJobs, numOfPages, currentPage: page, jobs });
};

//GET SINGLE JOB
const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json({ job });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "erreur get job", erreur: error.message });
  }
};

//EDIT JOB
const editJob = async (req, res) => {
  console.log(req.body);
  console.log("The user is: " + req.params.id);
  try {
    const editedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(StatusCodes.OK).json({ msg: "job modified", job: editedJob });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to patch jobs.", error: error.message });
  }
};

//DELETE JOB
const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};

export { getAllProperJobs, getAllJobs, createJob, getJob, editJob, deleteJob };
