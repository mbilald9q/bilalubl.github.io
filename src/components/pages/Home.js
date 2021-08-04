import React from "react";
import Slider from "../inc/Slider";
import { Link } from 'react-router-dom';
import Vmv from "../inc/Vmv";
import Service1 from '../images/img1.jpg';

function Home() {
    return (
        <div>
            <Slider />
            <section className='section'>
                <div className='container'>
                    <div className='col-md-12 text-center'>
                        <h3 className='main-heading'>Our Company</h3>
                        <div className='underline mx-auto'></div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nam voluptate, rerum ut debitis dolores! Itaque et accusamus expedita amet dicta placeat modi, consequatur sapiente eveniet aspernatur voluptatibus ducimus excepturi.</p>
                        <Link to='/about' className='btn btn-warning shadow'>Read More</Link>
                    </div>
                </div>
            </section>

            {/* Our vision, mission and values */}
            <Vmv />

            {/* Our Services */}
            <section className='section border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-3 text-center'>
                            <h3 className='main-heading'>Our Services</h3>
                            <div className='underline mx-auto'></div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card shadow mt-2'>
                                <img src={Service1} className='w-500 border-bottom' alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className='underline'></div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ipsa optio vero accusantium.</p>
                                    <Link to='/services' className='btn btn-link'> Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow mt-2'>
                                <img src={Service1} className='w-500 border-bottom' alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className='underline'></div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ipsa optio vero accusantium.</p>
                                    <Link to='/services' className='btn btn-link'> Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow mt-2'>
                                <img src={Service1} className='w-500 border-bottom' alt='Services' />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className='underline'></div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ipsa optio vero accusantium.</p>
                                    <Link to='/services' className='btn btn-link'> Read more</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div >
    );
}

export default Home;
