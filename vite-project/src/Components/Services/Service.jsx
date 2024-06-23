import React from 'react'
import './Service.css'
import themepattern1 from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data'
import arrowicon from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div className='services'>
        <div className="ser-title">
            <h1>My services</h1>
            <img src={themepattern1} alt="" />
        </div>
        <div className="service-container">
         {services_data.map((service,index)=>
        {
            return <div key={index} className='service-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="service-readmore">
                    <p>read More</p>
                    <img src={arrowicon} alt="" />
                </div>
            </div>
        } )}
        </div>
    </div>
  )
}

export default Service
