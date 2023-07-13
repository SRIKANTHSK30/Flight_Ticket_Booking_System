import { Link } from 'react-router-dom';
import "../Flight/Up_Log.css"
import logo from "../Flight/video.mp4"
function Login() {
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
               {/* <div class="img" style="background-image: url(images/bg-1.jpg);"> */}

               <div class="logo">
               <video className='videoTag' autoPlay loop muted>
                     <source src={logo} type='video/mp4' />
               </video>
            </div>
               <div class="login-wrap p-4 p-md-5">
               <div class="d-flex">
                  <div class="w-100">
                     <h3 class="mb-4">LOGIN</h3>
                  </div>
                     <div class="w-100">
                        <p class="social-media d-flex justify-content-end">
                           <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                           <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                        </p>
                     </div>
               </div>
                  <form action="#" class="signin-form">
                  <div class="form-group mb-3">
                     <label class="label" for="name">Username</label>
                     <input type="text" class="form-control" placeholder="Username" required/>
                  </div>
               <div class="form-group mb-3">
                  <label class="label" for="password">Password</label>
                 <input type="password" class="form-control" placeholder="Password" required/>
               </div>
               <div class="form-group">
                  <button type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
               </div>
               <div class="form-group d-md-flex">
                  <div class="w-50 text-left">
                        </div>
                        <div class="w-50 text-md-right">
                           <a href="#">Forgot Password</a>
                        </div>
               </div>
             </form>
             <p class="text-center">Not a member? <a data-toggle="tab" href="/signup">Sign Up</a></p>
           </div>
         </div>
         </div>
      </div>
   </div>

</section>
</div>

  );
}

export default Login;