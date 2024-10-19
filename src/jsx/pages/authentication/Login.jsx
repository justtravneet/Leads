import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import {
	loadingToggleAction, loginAction,
} from '../../../store/actions/AuthActions';

// image
import google from "../../../assets/images/download (1).png";
import facebook from "../../../assets/images/download (2).png";
import login from "../../../assets/images/login-img.png";
import logoFull from "../../../assets/images/logo-full.png";


function Login() {

	const [email, setEmail] = useState('');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('123456');

	const dispatch = useDispatch();
	const navigate = useNavigate()
	function onLogin(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) {
			return;
		}
		dispatch(loadingToggleAction(true));
		dispatch(loginAction(email, password, navigate));
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
									<p className='text-black  text-2xl font-semi-bold'>Sign into your account</p>
								</div>
							</div>


							<div className='p-2 flex flex-col  '>

								<div>
									<form className='flex flex-col gap-[25px]' onSubmit={onLogin}>
										<div className="">
											<label className="mb-1"><strong className='text-[15px] font-regular'>Email</strong></label>
											<input type="email" className=" form-control"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												placeholder="Type Your Email Address"
											/>
											{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
										</div>
										<div className="flex flex-col gap-[8px]">
											<label className="mb-1"><strong className='text-[15px] font-regular'>Password</strong></label>
											<input
												type="password"
												className="form-control"
												value={password}
												placeholder="Type Your Password"
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
											{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
										</div>

										<div className="">
											<div className="">
												<p className="mb-0">
                   <Link to=""><p className=' text-[14px] font-regular'>forget password?</p></Link>
                </p>
												<div className="form-check custom-checkbox ms-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className=" text-[14px] form-check-label" htmlFor="basic_checkbox_1">Remember me</label>
												</div>
											</div>
											{/* <div className="mb-3">
											<Link  to="/page-register">Sign up</Link>
 										</div> */}
										</div>


										<div className="">
											<div className="text-center">
												<button type="submit" className="btn btn-primary btn-block p-3">Sign Me In</button>
											</div>
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

								<div>
									<p className="mb-0 text-center">
										New User ? <Link to="/page-register">Create an Account</Link>
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
const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};
export default connect(mapStateToProps)(Login);