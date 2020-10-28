import Head from 'next/head';
import {siteName} from '../components/layout';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login - {siteName}</title>
      </Head>

      <main class="auth auth-floated" style={{height: '100%',width: '100%',height: '100vh',width: '100vw',margin: '0'}}>
      <div id="announcement" class="auth-announcement" style={{backgroundImage: 'url(/images/HD_ISO_21.jpg)'}}>
        <div class="announcement-body">
          <h2 class="announcement-title"> How to Prepare for an Automated Future </h2><a href="#" class="btn btn-warning"><i class="fa fa-fw fa-angle-right"></i> Check Out Now</a>
        </div>
      </div>
      <form class="auth-form">
        <div class="mb-4">
          <div class="mb-3">
            
          </div>
          <h1 class="h3">Masuk</h1>
        </div>
        <p class="text-left mb-4"> Don't have a account? <a href="auth-signup.html">Create One</a>
        </p>
        
        
       
       

       
        <p class="py-2">
          <a href="auth-recovery-username.html" class="link">Forgot Username?</a> <span class="mx-2">·</span> <a href="auth-recovery-password.html" class="link">Forgot Password?</a>
        </p>
  
        <p class="mb-0 px-3 text-muted text-center"> © 2020 All Rights Reserved. <a href="#">Privacy</a> and <a href="#">Terms</a>
        </p>
      </form>
     
      
    </main>
    </div>
  )
}
