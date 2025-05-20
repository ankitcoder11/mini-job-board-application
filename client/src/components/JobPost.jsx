import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const JobPost = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            company: '',
            location: '',
            image: '',
            type: 'Full-time',
            description: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            company: Yup.string().required('Company is required'),
            location: Yup.string().required('Location is required'),
            type: Yup.string().oneOf(['Full-time', 'Part-time']).required('Job type is required'),
            description: Yup.string().required('Description is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append('title', values.title);
                formData.append('company', values.company);
                formData.append('location', values.location);
                formData.append('image', values.image);
                formData.append('type', values.type);
                formData.append('description', values.description);

                const res = await fetch('http://localhost:5000/api/jobs/create', {
                    method: 'POST',
                    body: formData,
                });

                if (!res.ok) {
                    throw new Error('Failed to post job');
                }

                toast.success('Job posted successfully!');
                resetForm();
            } catch (err) {
                toast.error(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="w-[80%] mx-auto p-4">
            <h1 className="text-[25px] font-bold ">Post a Job</h1>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[20px] ">

                <div className='relative'>
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className="p-2 border rounded w-full outline-none"
                    />
                    {formik.touched.title && formik.errors.title && (
                        <div className="text-red-500 mt-1 text-[12px] absolute bottom-[-15px] ">{formik.errors.title}</div>
                    )}
                </div>

                <div className='relative'>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company}
                        className="p-2 border rounded w-full outline-none"
                    />
                    {formik.touched.company && formik.errors.company && (
                        <div className="text-red-500 text-sm mt-1 text-[12px] absolute bottom-[-15px]">{formik.errors.company}</div>
                    )}
                </div>

                <div className='relative'>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                        className="p-2 border rounded w-full outline-none"
                    />
                    {formik.touched.location && formik.errors.location && (
                        <div className="text-red-500 text-sm mt-1 text-[12px] absolute bottom-[-15px]">{formik.errors.location}</div>
                    )}
                </div>

                <div className='relative'>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(event) => {
                            formik.setFieldValue('image', event.currentTarget.files[0]);
                        }}
                        className="p-2 border rounded w-full outline-none"
                    />
                </div>

                <div className='relative'>
                    <select
                        name="type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}
                        className="p-2 border rounded w-full outline-none"
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                    {formik.touched.type && formik.errors.type && (
                        <div className="text-red-500 text-sm mt-1 text-[12px] absolute bottom-[-15px]">{formik.errors.type}</div>
                    )}
                </div>

                <div className='relative'>
                    <textarea
                        name="description"
                        placeholder="Job Description"
                        rows="4"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className="p-2 border rounded w-full outline-none"
                    />
                    {formik.touched.description && formik.errors.description && (
                        <div className="text-red-500 text-sm mt-1 text-[12px] absolute bottom-[-15px]">{formik.errors.description}</div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? 'Posting...' : 'Post Job'}
                </button>
            </form>
        </div>
    );
};

export default JobPost;