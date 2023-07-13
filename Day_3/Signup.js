import { Link } from 'react-router-dom';
import "../Flight/Signup.css"
import logo from "../Flight/video1.mp4"
function Signup() {
  return (
   <div>
	<section class="ftco-section">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-md-6 text-center mb-5">
          
         </div>
      </div>
      <div class="row justify-content-center">
         <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
               

            <div class="logo">
               <video className='videoTag' autoPlay loop muted>
                     <source src={logo} type='video/mp4' />
               </video>
            </div>
               <div class="login-wrap p-4 p-md-5">
               <div class="d-flex">
                  <div class="w-100">
                     <h3 class="mb-4">Sign Up</h3>
                  </div>
               </div>
                  <form action="#" class="signin-form">
                  <div class="form-group mb-3">
                     <label class="label" for="name">Username</label>
                     <input type="text" class="form-control" placeholder="Username" required/>
                  </div>
               <div class="form-group mb-3">
                  <label class="label" for="email">Email Id</label>
                 <input type="email" class="form-control" placeholder="Email id" required/>
               </div>
               <div class="form-group mb-3">
                  <label class="label" for="password">Password</label>
                 <input type="password" class="form-control" placeholder="Password" required/>
               </div>
               <div class="form-group mb-3">
                  <label class="label" for="password">Confirm Password</label>
                 <input type="password" class="form-control" placeholder="Confirm Password" required/>
               </div>
               <div class="form-group">
                  <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
               </div>
             </form>
             <p class="text-center">Already a member? <Link to="/login">Login</Link></p>
           </div>
         </div>
         </div>
      </div>
   </div>

</section>
</div>

  );
}

export default Signup;