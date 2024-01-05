import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'
import PageHeader from "../components/PageHeader";


const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5173/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);
 
  const handleApply = async() => {
    const { value: url } = await Swal.fire({
        input: "url",
        inputLabel: "URL address",
        inputPlaceholder: "Enter the URL"
      });
      if (url) {
        Swal.fire(`Entered URL: ${url}`);
      }
  }

  return (
    <div>
        <Navbar />
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <PageHeader title={"Pershkrimi i punes"} path={"puna"}/>
        <h2 className="text-3xl">{job.jobTitle}</h2>
        <h1>{job.jobTitle}</h1>

        <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>Apliko tani</button>
      </div>
    </div>
  );
};

export default JobDetails;
