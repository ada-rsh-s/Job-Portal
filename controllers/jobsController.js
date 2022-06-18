import Job from "../models/jobs.js";
import { StatusCodes } from "http-status-codes";
import { BadRequesterror, UnauthenticatedError } from "../errors/index.js";

const createJob = async (req, res) => {

  const { position, company } = req.body;

  if (!position || !company) {
  throw new BadRequesterror("Please provide all values")
  }
  
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  
  console.log(job);
  res.status(StatusCodes.CREATED).json({job})
};

const getAllJobs = async (req, res) => {
  res.send("get all jobs ");
}; 
const updateJob = async (req, res) => {
  res.send("updatejobs");
};
const deleteJob = async (req, res) => {
  res.send("delete job");
};
const showStats = async (req, res) => {
  res.send("shoje stats");
};
export { createJob, deleteJob, getAllJobs, updateJob, showStats };
