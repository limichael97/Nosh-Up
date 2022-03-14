import React from 'react';
import AddEvent from '../components/AddEvent';
import SingleEvent from './SingleEvent';

const HomePage = () => {
    return (
        <>

        <SingleEvent />
            <section className="py-5 text-center hero-1">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="text-light">Nosh Up</h1>
                        <p className="lead text-light">Find new friends, discover new restaurants, eat delicious meals.</p>
                        <p>
                            <a href="/" className="btn btn-color-one my-2" data-toggle="modal" data-target="#loginModal">Get Started</a>
                        </p>
                    </div>
                </div>
            </section>

            <main>
                <div className="album py-5 bg-light">
                    <div>
                        <div className="container">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 color-four">World</strong>
                                        <h3 className="mb-0">Featured post</h3>
                                        <div className="mb-1 text-muted">Nov 12</div>
                                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div className="col-auto d-none d-lg-block featured-img-1">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col-auto d-none d-lg-block featured-img-2">
    
                                    </div>
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 color-four">Design</strong>
                                        <h3 className="mb-0">Post title</h3>
                                        <div className="mb-1 text-muted">Nov 11</div>
                                        <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="py-5 text-center hero-2 mb-4">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="text-light">Nosh Up</h1>
                                <p className="lead text-light">Find new friends, discover new restaurants, eat delicious meals.</p>
                                <p>
                                    <a href="/" className="btn btn-color-one my-2" data-toggle="modal" data-target="#loginModal">Get Started</a>
                                </p>
                            </div>
                        </div>
                    </section>
                    <AddEvent/>
                
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 color-four">World</strong>
                                        <h3 className="mb-0">Featured post</h3>
                                        <div className="mb-1 text-muted">Nov 12</div>
                                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div className="col-auto d-none d-lg-block featured-img-3">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export default HomePage;