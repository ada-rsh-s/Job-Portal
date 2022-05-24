const createJob = async (req, res) => {
  res.send("Create job");
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
