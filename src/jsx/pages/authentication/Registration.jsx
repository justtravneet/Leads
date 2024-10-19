import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { connect, useDispatch } from 'react-redux';
import {
  loadingToggleAction,
  signupAction,
} from '../../../store/actions/AuthActions';

// image
import google from "../../../assets/images/download (1).png";
import facebook from "../../../assets/images/download (2).png";
import login from "../../../assets/images/login-img.png";
import logoFull from "../../../assets/images/logo-full.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  let errorsObj = { email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate()
  function onSignUp(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === '') {
      errorObj.email = 'Email is Required';
      error = true;
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: errorObj.email,
      })
    }
    if (password === '') {
      errorObj.password = 'Password is Required';
      error = true;
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: errorObj.password,
      })
    }
    setErrors(errorObj);
    if (error) return;
    dispatch(loadingToggleAction(true));
    dispatch(signupAction(email, password, navigate));
  }




  return (

    <div className=''>
      <div className=' '>
        <div className='flex flex-col md:flex-row'>
          <div className=' hidden  md:block w-[100%] h-[auto] '>
            <div className='h-[100%] w-[100%] flex justify-center items-center overflow-hidden'>
              <div className='h-[80%] w-[100%] flex flex-col justify-center '>
                <div className='p-4 flex flex-col items-center justify-center gap-[20px]'>
                  <div>
                    <img className='w-[300px]' src={login} alt="" />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <p className='text-[2vw] text-center text-black font-semibold'>Welcome <br /> To SpringLMS Courses</p>
                  </div>

                </div>


              </div>
            </div>

          </div>

          <div className='w-[100%] h-[auto] bg-white'>
            <div className='p-6 flex flex-col gap-[30px] py-[60px] lg:px-[50px] mb-[30px] sm:mb-[40px] '>
              <div className='p-2'>
                <div className=''>
                  <img className='w-[200px]' src={logoFull} alt="logo" />
                </div>
              </div>

              <div className='p-2'>
                <div className=''>
                  <p className='text-black  text-2xl font-semi-bold'>Sign up</p>
                </div>
              </div>


              <div className='p-2 flex flex-col  '>

                <div>
                  <form onSubmit={onSignUp}>
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="email"
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-4 position-relative">
                      <label className="form-label">Password</label>
                      <input defaultValue={password} className="form-control" placeholder="password"
                        type={`${showPassword ? "text" : "password"}`}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }
                      />
                      <span className={`show-pass eye ${showPassword ? 'active' : ''}`}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className="fa fa-eye-slash" />
                        <i className="fa fa-eye" />
                      </span>
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className="form-check custom-checkbox ms-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className=" text-[14px] form-check-label" htmlFor="basic_checkbox_1">I agree to the <span>Term Of Service</span> and <span>Privacy Policy</span></label>
												</div>
                    <div className="text-center mt-4">
                     <button type="submit" className="btn btn-primary btn-block p-3">Sign Me Up</button>
                    </div>
                  </form>

                </div>
              </div>

            </div>

            <div className='bg-red-100 py-[10px]  sm:py-[30px]'>

              <div className='p-6'>
                <div><p className='text-center text-md'>or sign in with</p></div>
                <div className='flex flex-col sm:flex-row sm:justify-center sm:gap-[20px]'>
                  <div className='flex gap-[10px] justify-center'>
                    <div><img className='w-[20px]' src={google} alt="" /></div>
                    <div><p className='text-md font-semibold'>Sign In using Google</p></div>
                  </div>

                  <div className='flex gap-[10px] justify-center'>
                    <div><img src={facebook} className='w-[20px]' alt="" /></div>
                    <div><p className='text-md font-semibold'>Sign In using Google</p></div>
                  </div>
                </div>

                <div className="text-center">
                      <p className="">
                        Already have an account?{" "}
                         <Link className="text-primary" to="/login">
                          Sign in
                         </Link>
                      </p>
                </div>





              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )

}


// function Register(props) {
//     const [showPassword, setShowPassword] = useState(false);
//     const [email, setEmail] = useState('');
//     let errorsObj = { email: '', password: '' };
//     const [errors, setErrors] = useState(errorsObj);
//     const [password, setPassword] = useState('');

//     const dispatch = useDispatch();
//     const navigate = useNavigate()
//     function onSignUp(e) {
//         e.preventDefault();
//         let error = false;
//         const errorObj = { ...errorsObj };
//         if (email === '') {
//             errorObj.email = 'Email is Required';
//             error = true;			      
//             Swal.fire({
//               icon: 'error',
//               title: 'Oops',
//               text: errorObj.email,                        
//             })
//         }
//         if (password === '') {
//             errorObj.password = 'Password is Required';
//             error = true;
// 			      Swal.fire({
//               icon: 'error',
//               title: 'Oops',
//               text: errorObj.password,                      
//             })
//         }
//         setErrors(errorObj);
//         if (error) return;
//         dispatch(loadingToggleAction(true));
//         dispatch(signupAction(email, password, navigate));
//     }
//   return (
//     <div className="fix-wrapper">
//       <div className="container ">
//         <div className="row justify-content-center">
//           <div className="col-lg-5 col-md-6">


//                 <div className="card mb-0 h-auto">
//                   <div className="card-body">
//                     <div className="text-center mb-2">
//                         <Link to="/login"><img src={logoFull} alt="" /></Link>
//                     </div>
//                     <h4 className="text-center mb-4 ">Sign up your account</h4>
//                       {props.errorMessage && (
//                         <div className='text-danger'>
//                           {props.errorMessage}
//                         </div>
//                       )}
//                       {props.successMessage && (
//                         <div className='text-danger'>
//                           {props.successMessage}
//                         </div>
//                       )}
//                     <form onSubmit={onSignUp}>
//                       <div className="form-group">
//                         <label className="form-label">Username</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="username"
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label className="form-label">Email</label>
//                         <input
//                           defaultValue={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           className="form-control"
//                           placeholder="email"
//                         />
// 					              {errors.email && <div className="text-danger">{errors.email}</div>}
//                       </div>
//                       <div className="mb-4 position-relative">
//                         <label className="form-label">Password</label>
//                         <input defaultValue={password} className="form-control" placeholder="password"
//                           type={`${showPassword ? "text" : "password"}`}
//                             onChange={(e) =>
//                               setPassword(e.target.value)
//                             }
//                         />
//                         <span className={`show-pass eye ${showPassword ? 'active' : '' }`}
//                           onClick={()=>setShowPassword(!showPassword)}
//                         >
//                             <i className="fa fa-eye-slash" />
//                             <i className="fa fa-eye" />
//                         </span>
// 					              {errors.password && <div className="text-danger">{errors.password}</div>}
//                       </div>
//                       <div className="text-center mt-4">
//                         <button
//                           type="submit"
//                           className="btn btn-primary btn-block"
//                         >
//                           Sign me up
//                         </button>
//                       </div>
//                     </form>
//                     <div className="new-account mt-3">
//                       <p className="">
//                         Already have an account?{" "}
//                         <Link className="text-primary" to="/login">
//                           Sign in
//                         </Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);

