import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='about-banner '>
                <div className="background-layer d-flex justify-content-start align-items-center ">
                    <h1 className='mx-5 text-white'>About Us</h1>
                </div>
            </div>
            <div>
                <div className="about-info">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className='row'>
                                <div className="col-12">
                                    <img src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/03/doctor2.png" alt="" />
                                </div>
                                <div className="col-12">
                                    <div className="card doctor-name text-white p-5">
                                        <h1>Rosalina D. William</h1>
                                        <p>Founder</p>
                                        <img className='w-25 ' src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/03/about__page__signature.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 p-5">
                            <div>
                                <h2 className='mb-5'>ABOUT US</h2>
                                <h1 className='mb-4 '>The Best Medics, Doctors & Physicians</h1>
                                <p>Having an in-house team of expert medical writers and editors makes all the difference in terms of getting your message, the way you want it, out into the marketplace. Our medical content team knows what it takes to craft the right messages to the right audiences. They are experts at securing accurate.

                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nisi quo deleniti ducimus ipsum nostrum similique libero excepturi. Numquam, totam
                                </p>
                                <div className="row g-5">
                                    <div className="col-lg-6 text-center">
                                        <div className="card p-3 text-danger ">
                                            <img className='w-25' src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/03/about11.png" alt="" />
                                            <h3><b>Health Information</b></h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                        <div className="card p-3 text-danger">
                                            <img className='img-fluid w-25' src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/03/about12.png" alt="" />
                                            <h3><b>Doctor Timetable</b></h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                        <div className="card p-3 text-danger">
                                            <img className='img-fluid w-25' src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/03/about13.png" alt="" />
                                            <h3><b>Medical Education</b></h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                        <div className="card p-3 text-danger">
                                            <img className='img-fluid w-25' src="https://tf.quomodosoft.com/mediguss/wp-content/uploads/2020/03/about14.png" alt="" />
                                            <h3><b>Medical Experts</b></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/'><button className='btn btn-danger my-5 '>Go Home</button></Link>
            <Link to='/login'><button className='btn btn-danger m-5 '>Go Login</button></Link>
        </div>
    );
};

export default About;