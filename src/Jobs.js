const validateJob = (job) => {
  if (job === null || typeof job !== "object" || Array.isArray(job)) {
    return { error: "Invalid job" };
  } else if (typeof job.name !== "string" || job.name.trim() === "") {
    return { error: "Invalid name" };
  } else if (
    typeof job.priority !== "string" ||
    job.priority.trim() === "" ||
    !["low", "medium", "high"].includes(job.priority)
  ) {
    return { error: "Invalid priority" };
  } else {
    return { valid: true };
  }
};
module.exports = validateJob;
