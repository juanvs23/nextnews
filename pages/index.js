import React from 'react'
import Layout from '../component/commons/Master'
import css from './index.css'


class Index extends React.Component {
    componentDidMount() {
        this.hola()
    }
    hola() {
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

        mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnZzMjMiLCJhIjoiY2s0enNrNDQxMGVuZjNtcWtlNmt4cnVtMyJ9.WQ76tdrY6bAIrnQZ7lvirQ';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-66.0, 8],
            zoom: 5
        });

    }
    render() {
        let title = 'inicio'
        return (
            <Layout title={title}>

     <main>
    <div className="position-relative">
     
      <section   id="map" className={`section ${css.mapaheader}  section-shaped`}>
       
        <div className={` ${css.headerText} `}>
          <div className={` ${css.cajaHeader} `}>
            
                <h1 className="display-3  text-white">A beautiful Design System<span>completed with examples</span></h1>
               
                <div className="btn-wrapper">
                  <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html" className="btn btn-info btn-icon mb-3 mb-sm-0">
                    <span className="btn-inner--icon"><i className="fa fa-code"></i></span>
                    <span className="btn-inner--text">Components</span>
                  </a>
                  <a href="https://www.creative-tim.com/product/argon-design-system" className="btn btn-white btn-icon mb-3 mb-sm-0">
                    <span className="btn-inner--icon"><i className="ni ni-cloud-download-95"></i></span>
                    <span className="btn-inner--text">Download HTML</span>
                  </a>
               
            </div>
          </div>
        </div>
   
 
        <div className="separator separator-bottom separator-skew">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
 
 
  
  </div> 
  </main>
   </Layout>
        )
    }
}

export default Index
