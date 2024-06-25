import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import JobCard from "./assets/components/JobCard/JobCard";
import Navbar from "./assets/components/Navbar/Navbar";
import SearchBar from "./assets/components/SearchBar/SearchBar";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      // console.log(doc.id, "=> ", doc.data());

      tempJobs.push({
        ...doc.data(),
        id: doc.id,
        postedOn: doc.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("location", "==", jobCriteria.location),
      where("experience", "==", jobCriteria.experience),
      orderBy("postedOn", "desc")
    );
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      // console.log(doc.id, "=> ", doc.data());

      tempJobs.push({
        ...doc.data(),
        id: doc.id,
        postedOn: doc.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom} />

        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}

export default App;
