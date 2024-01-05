import React from 'react';

const ImportantServices = () => {
  const services = [
    {
      title: 'Cleaning',
      description: 'Professional cleaning services for homes and offices.',
    },
    {
      title: 'Installation',
      description: 'Expert installation services for various appliances.',
    },
    {
      title: 'Repairing',
      description: 'Fast and reliable repair services for your appliances.',
    },
    {
      title: 'Washing',
      description: 'Fast and reliable washing services for your appliances.',
    },
    {
      title: 'Personal-Care',
      description: 'Reliable Personal-care services for your refreshment.',
    },
    {
      title: 'Painting',
      description: 'Fast and reliable painting services for your home.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 ml-52 w-100vw">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Important Services</h2>

        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 cursor-pointer">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantServices;