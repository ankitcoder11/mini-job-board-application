import { useEffect, useState } from 'react';
import { BsFillBuildingsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs`);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data)
            setJobs(data.jobs);
        } catch (err) {
            setError(err.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div className='w-[80%] max-[650px]:w-[95%] mx-auto py-[20px] flex flex-col gap-[20px] relative '>
            <Link to='job/add' className='bg-blue-500 rounded-md p-[10px] text-white font-medium w-max absolute right-0 '>Post a job</Link>
            <h1 className='text-[30px] text-center font-bold'>Jobs</h1>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!loading && !error && (
                <div className='flex flex-wrap gap-[20px] '>
                    {jobs?.map((job, index) => (
                        <Link to={`/job/${job._id}`} className='border p-[10px] rounded-md border-gray-500 w-[48%] max-[580px]:w-[100%] flex justify-between gap-[8px] ' key={index}>
                            <div className='w-[30%] '>
                                <div className='border border-gray-300 rounded-full flex justify-center items-center h-[80px] w-[80px]  '>
                                    {job.image
                                        ? <img className='w-full h-full rounded-full object-cover' src={job.image} />
                                        : <div className='text-[50px] '><BsFillBuildingsFill /></div>
                                    }
                                </div>
                            </div>
                            <div className='w-[70%] flex flex-col gap-[8px]'>
                                <div className='text-[20px] font-semibold '>{job.title}</div>
                                <div className='text-[12px]'>
                                    <strong></strong> at {job.company} - {job.location}
                                </div>
                                <div className='text-[14px]'>
                                    {job.description.length > 200
                                        ? `${job.description.slice(0, 200)}...`
                                        : job.description}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobList;