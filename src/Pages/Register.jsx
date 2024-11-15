import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
          <h2 className="text-center text-xl md:text-2xl font-bold">Register your Account</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="email"
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
            </div>
          </form>
          <p className="text-center font-semibold">Already Have An Account ? <Link className="text-red-500" to="/auth/login">Please Login</Link> </p>
        </div>
      </div>
    );
};

export default Register;