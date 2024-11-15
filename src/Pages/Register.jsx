import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate =useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // get from data
    const form = new FormData(event.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more than 5 character long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({displayName:name,photoUrL:photo})
        .then(()=>{
         navigate("/")
        })
        .catch()

      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
        <h2 className="text-center text-xl md:text-2xl font-bold">
          Register your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs text-red-500">{error.name}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo-url"
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
              name="email"
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
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/login">
            Please Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
