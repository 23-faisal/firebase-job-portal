import React, { useState } from "react";

const SearchBar = (props) => {
  const [jobsCriteria, setJobsCriteria] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
  });

 

  const handleChange = (e) => {
    setJobsCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(jobsCriteria);
  const search = async () => {
    await props.fetchJobsCustom(jobsCriteria);
  };

  return (
    <div>
      <div className="flex gap-4 mt-10 items-center justify-center px-10 ">
        <select
          onChange={handleChange}
          name="title"
          value={jobsCriteria.title}
          className="w-64 py-3 pl-4 bg-zinc-200 text-slate-950 font-semibold rounded-md "
        >
          <option value="" disabled hidden selected>
            Job Role
          </option>
          <option value="iOs Developer">iOs Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Developer Advocate">Developer Advocate</option>
        </select>

        <select
          onChange={handleChange}
          name="type"
          value={jobsCriteria.type}
          className="w-64 py-3 pl-4 bg-zinc-200 text-slate-950 font-semibold rounded-md"
        >
          <option value="" disabled hidden selected>
            Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>

        <select
          onChange={handleChange}
          name="location"
          value={jobsCriteria.location}
          className="w-64 py-3 pl-4 bg-zinc-200 text-slate-950 font-semibold rounded-md"
        >
          <option value="" disabled selected hidden>
            Location
          </option>
          <option value="Remote">Remote</option>
          <option value="In-office">In-office</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select
          onChange={handleChange}
          name="experience"
          value={jobsCriteria.experience}
          className="w-64 py-3 pl-4 bg-zinc-200 text-slate-950 font-semibold rounded-md"
        >
          <option value="" disabled hidden selected>
            Experience
          </option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
        <button
          onClick={search}
          className="w-64 bg-blue-500 font-semibold py-3.5 rounded-md "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
