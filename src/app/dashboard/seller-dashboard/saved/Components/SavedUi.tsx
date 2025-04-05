import React from 'react';

const SaveUi = () => {
  const services = [
    {
      title: "Web & App Design",
      description: "I will design modern websites in figma or adobe xd",
      reviews: "+482 94 reviews",
      name: "Wanda Runo",
      price: "$983",
      image: "https://via.placeholder.com/300x200" // Replace with actual image URLs
    },
    {
      title: "Art & Illustration",
      description: "I will create modern flat design illustration",
      reviews: "+482 94 reviews",
      name: "All Tufan",
      price: "$983",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Design & Creative",
      description: "I will build a fully responsive design in HTML,CSS, bootstrap, and javascript",
      reviews: "+482 94 reviews",
      name: "Wanda Runo",
      price: "$983",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Web & App Design",
      description: "I will do mobile app development for ios and android",
      reviews: "+482 94 reviews",
      name: "Wanda Runo",
      price: "$983",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-200">
        <button className="pb-4 border-b-2 border-blue-600 text-blue-600 font-medium">Services</button>
        <button className="pb-4 text-gray-500 hover:text-gray-700">Project</button>
        <button className="pb-4 text-gray-500 hover:text-gray-700">Jobs</button>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Services</h1>
        <span className="text-gray-500">40</span>
      </div>

      {/* Nike Banner Card */}
      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold">Reimagined Future of Motion by Nike.</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-xl p-4 hover:shadow-lg transition-shadow relative">
            {/* Delete Icon */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Card Image */}
            <div className="mb-4">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Card Content */}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-green-600 font-medium">{service.reviews.split(' ')[0]}</span>
                <span className="ml-2 text-gray-500 text-sm">{service.reviews.split(' ').slice(1).join(' ')}</span>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">{service.name.split(' ')[0]}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">Starting at</span>
                  <span className="font-semibold">{service.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="border-t pt-6 text-center text-gray-500">
        <p>1 – 20 of 300+ property available</p>
      </div>
    </div>
  );
};

export default SaveUi;