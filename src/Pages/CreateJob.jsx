import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills=selectedOption;
    console.log(data);
  };

  const options = [
    {value:"JavaScript", label:"JavaScript"},
    {value:"C++", label:"C++"},
    {value:"HTML", label:"HTML"},
    {value:"CSS", label:"CSS"},
    {value:"React", label:"React"},
    {value:"Node", label:"Node"},
    {value:"MongoDB", label:"MongoDB"},
    {value:"Redux", label:"Redux"},
  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Titulli punes</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Emri kompanise</label>
              <input
                type="text"
                placeholder="Microsoft"
                {...register("jobcompanyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimumi i pages</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maksimumi i pages</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Lloji i pages</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Zgjidh llojin e pages</option>
                <option value="Hourly">Ore</option>
                <option value="Monthly">Mujore</option>
                <option value="Yearly">Vjetore</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Vendodhja e punes</label>
              <input
                type="text"
                placeholder="Tirane"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Data e postimit te punes</label>
              <input
                type="date"
                placeholder="2024-01-04"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Niveli eksperiences</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="">Zgjidh eksperiencen</option>
                <option value="NoExperience">Pa eksperience</option>
                <option value="Intership">Intership</option>
                <option value="Work remote">Pune remote</option>
              </select>
            </div>
            
          </div>

          {/* 5th row */}
          <div>
          <label className="block mb-2 text-lg">Aftesite e kerkuara</label>
          <CreatableSelect 
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isMulti
          className="create-job-input py-4"/>
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Logo kompanise</label>
              <input
                type="url"
                placeholder="Shto URL e kompanise: https://wetransfer.com/img1"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Lloji i punes</label>
              <select {...register("employmentType")} className="create-job-input">
                <option value="">Zgjidh</option>
                <option value="Full-time">Kohe e plote</option>
                <option value="Part-time">Kohe te pjesshme</option>
                <option value="Temporary">Te perkoheshme</option>
              </select>
            </div>
            
          </div>

          {/* 7th row */}
          <div className="w-full">
          <label className="block mb-2 text-lg">Pershkrimi i punes</label>
          <textarea 
          className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-300"
          rows={6}
          defaultValue={"Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."}
          placeholder="Pershkruani punen"
          {...register("description")}/>
          </div>

          {/* last row */}
          <div className="w-full">
          <label className="block mb-2 text-lg">Puna u postua nga</label>
          <input
                type="email"
                placeholder="email juaj"
                {...register("postedBy")}
                className="create-job-input"
              />
          </div>


          <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
