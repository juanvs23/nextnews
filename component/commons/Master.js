import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const Layout = (props) => {
    return (
        <React.Fragment>
        <Head>
                <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width user-scalable=no, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

    <title>{props.title}</title>
  <link href="/assets/img/brand/favicon.png" rel="icon" type="image/png"/>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
  <link href="/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet"/>
  <link href="/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>

  <link type="text/css" href="/assets/css/argon.css" rel="stylesheet"/>
  <link href='https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.css' rel='stylesheet' />
    
        
        </Head>
        
        <Header/>
        {props.children}
        <Footer/>
         <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/popper/popper.min.js"></script>
  <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>
  <script src="assets/vendor/headroom/headroom.min.js"></script>
  
  <script src="assets/js/argon.js?v=1.1.0"></script>
        </React.Fragment>

    )
}
export default Layout
