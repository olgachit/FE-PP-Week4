import { useState } from 'react';
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [servicesData, setServicesData] = useState(services);
  const hideService = (id) => {
    setServicesData(servicesData.filter((service)=>service.id !== id))
  }
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => (
          <div key={service.id} className='service-item'>
            <Service {...service}/>
            <button className='btn delete-button'
            onClick={() => hideService(service.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Services;

