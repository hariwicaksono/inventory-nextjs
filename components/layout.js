import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';

export const siteName = 'Inventaris Universitas Amikom Purwokerto'
export const siteTitle = 'Inventaris Universitas Amikom Purwokerto'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
        showMenu: true
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = function() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  render() {
    const { children, home, login } = this.props;

  return (
    <>
    <Head>  
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600" rel="stylesheet" />
    <meta name="description" content="" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <div className={this.state.showMenu ? 'app' : 'app has-compact-menu' } >

    {!login ?   
    <>
    <Navbar toggleMenu={this.toggleMenu} />
    <main className="app-main">
    <div className="wrapper">
      <div className="page">
        <div className="page-inner">
        {children}
        </div>
      </div>
    </div>
    </main>
    </>
    :
    <>
{children}
    </>

    }
    </div>
    </>
  );
  }
}
export default Layout;
