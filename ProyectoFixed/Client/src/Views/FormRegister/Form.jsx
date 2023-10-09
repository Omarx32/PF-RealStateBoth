import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser, googleRegister } from "../../Redux/action/actions";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";


export const FormUser = ({ handleLoginGoogle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({})
  const [postForm, setPostForm] = useState({
    email: '',
    password: '',
    fullName: '',
    lastName: '',
  });

  const clientID = "450156946690-8b53lo2n8n1ibojsg7b9sdg1ro2gvo1u.apps.googleusercontent.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostForm({
      ...postForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      email: postForm.email,
      password: postForm.password,
      fullName: postForm.fullName,
      lastName: postForm.lastName,
    };
    console.log(newUser);
    dispatch(createUser(newUser));

    setPostForm({
      email: '',
      password: '',
      fullName: '',
      lastName: '',
    });
    alert('welcome to WanderLuxe');
  };



  const onSuccess = (response) => {
    setUser(response.profileObj);
    console.log(response);

    
    const userData = {
      email: response.profileObj.email,
      givenName: response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name,
    };

  

    dispatch(googleRegister(userData))
    alert(`welcome to WanderLuxe,${userData.name}`);
    navigate('/home')
    handleLoginGoogle()
    localStorage.setItem('user', userData.name)
  };


  const onFailure = () => {
    console.log("something went wrong");
  };

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, [clientID]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-black rounded-xl shadow-lg overflow-hidden mt-4 relative">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(/imagenes/Fondolanding.png)' }}>
          <h1 className="text-white font-Zasline text-4xl mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome to WanderLuxe Homes
          </h1>
        </div>
        <div className="w-full lg:w-1/2 py-8 px-12 text-white">
          <h2 className="text-3xl mb-4 text-center">Register</h2>
          <p className="mb-4 text-center">
            Create your account. It's free and only takes a minute.
          </p>
          <form onSubmit={submitHandler} className="flex flex-col text-black">
            <input type="text" name="fullName" value={postForm.fullName} onChange={handleChange} placeholder="Firstname" className="form-input mb-4" />
            <input type="text" name="lastName" value={postForm.lastName} onChange={handleChange} placeholder="Lastname" className="form-input mb-4" />
            <input type="text" placeholder="Email" name='email' value={postForm.email} onChange={handleChange} className="form-input mb-4" />
            <div className="relative mb-6 text-black flex bg-white rounded-xl items-stretch">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={postForm.password}
            onChange={handleChange}
            placeholder="Password"
            className="form-input pr-10"
            required
          />
          <button
            type="button"
            className="absolute left-72 transform -translate-y-1/2 text-black top-6 h-8 -bottom-1 flex items-center justify-center"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-4" />
          </button>
        </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="form-checkbox border-gray-400 mr-2" />
              <span className="text-white">
                I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
              </span>
            </div>
            <button className="w-full bg-purple-500 py-3 text-center text-blue rounded hover:bg-purple-700 focus:outline-none mb-4">
              Sign Up
            </button>
            <GoogleLogin
              className="w-full bg-red-500 py-3 text-center text-blue rounded hover:bg-red-700 focus:outline-none"
              clientId="TU_CLIENT_ID_DE_GOOGLE"
              buttonText="Sign Up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </form>
          <div className="text-center">
            <p className="text-white mt-6">
              Have an account? <a href="#" className="text-blue font-semibold">Log in here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};




