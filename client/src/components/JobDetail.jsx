import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
                const data = await res.json();
                setJob(data.data);
            } catch (err) {
                console.error('Error fetching job:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!job) return <p>Job not found</p>;

    return (
        <div className='w-[80%] mx-auto '>
            <div className='border border-gray-300 rounded-full flex justify-center items-center h-[120px] w-[120px] mx-auto  '>
                {job.image
                    ? <img className='w-full h-full rounded-full object-cover' src={job.image} />
                    : <div className='text-[50px] '><BsFillBuildingsFill /></div>
                }
            </div>
            <h1 className='text-[25px] font-semibold '>{job.title}</h1>
            <p><strong>Company:</strong> {job.company}</p>
            <p>Posted on: {new Date(job.createdAt).toLocaleString()}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>Job Type: {job.type}</p>
            <p>{job.description}</p>
        </div>
    );
};

export default JobDetail;