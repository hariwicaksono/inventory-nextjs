import React, { Component } from "react";
import Router from 'next/router';
import '../styles/globals.css';
import 'spin.js/spin.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class MyApp extends Component {
  constructor(props){
    super(props)
    this.state = {
        login:false
    }
}

Logout = () => {
    sessionStorage.setItem('isLogin','')
    sessionStorage.clear()
    this.setState({
        login:false
    })

}

componentDidMount = () => {
    if (!sessionStorage.getItem('isLogin')) {
      return( Router.push('/login') )
    }
}
static getInitialProps({ pathname }){
  return { pathname }
 }
  render() {
    const { Component, pageProps } = this.props;

    return (   
    <>
    <Component {...pageProps} />
    <ToastContainer />
    </>
    );
  }
}

export default MyApp;