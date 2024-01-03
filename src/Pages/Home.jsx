import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  //console.log(filteredItems)

  //------------Radio filtering-----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //----------button based filtering---------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endInex = startIndex + itemsPerPage;
    return {startIndex, endInex};
  };

  //function for the next page
  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length/itemsPerPage)){
      setCurrentPage(currentPage + 1);  
    }
  }

  //function for the previous page
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filteredJobs.filter(
        (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) || 
          postingDate >= selected || 
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    //slice the data based on the current page
    const {startIndex, endInex} = calculatePageRange();filteredJobs = filteredJobs.slice(startIndex, endInex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            result
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length}</h3>
              <p>Asnje e dhene nuk u gjet!</p>
            </>
          )}

          {/* pagination page */}
          {
            result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button onClick={prevPage} className="hover:underline" disabled={currentPage === 1}>Mbrapa</button>
                <span className="mx-2">Faqa {currentPage} e {Math.ceil(filteredItems.length/itemsPerPage)}</span>
                <button onClick={nextPage} className="hover:underline"  disabled={currentPage === Math.ceil(filteredItems.length/itemsPerPage)}>Para</button>
              </div>
            ) : ""
          }
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded">
          <Newsletter/>
        </div>
      </div>
    </div>
  );
};

export default Home;
