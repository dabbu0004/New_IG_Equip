import React from "react";

const AboutUs = () => {
  return (
    <>
    <div className="bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      <div className="mb-4">
        <h2 className="text-xl font-medium uppercase border-b-2 border-orange-500 pb-1 inline-block">
          WHO ARE WE
        </h2>  
    
       
      </div> 

      <div className="flex flex-col lg:flex-row gap-8 items-center">
   
        <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-medium uppercase  border-orange-500 pb-1 inline-block">
         About Us
        </h2>  
        
          <p>
            Greetings from Inventive Gas Equipment Pvt. Ltd., a lively and
            inventive tapestry created with passion. As a new business, we are
            living examples of the value of commitment and a never-ending quest
            for greatness.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
              <img
                src="https://igequipment.com/wp-content/uploads/2024/02/250X115.png"
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-xl text-gray-600">
                Inventive Gas Equipment Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-10">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 flex-shrink-0 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c3 0 5 2 5 5v1H7V7c0-3 2-5 5-5zM7 10h10v3.5c0 3.04-2.46 5.5-5.5 5.5S6 16.54 6 13.5V12c0-1.1.9-2 2-2z" />
                <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1H5v1z" />
              </svg>
            </div>
            <div>
              <p className="text-lg">
                Reduce your energy consumption by using only the latest, most
                trusted energy-efficient technologies
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 flex-shrink-0 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  fill="white"
                  d="M12 6.5A5.5 5.5 0 0 0 6.5 12a5.5 5.5 0 0 0 5.5 5.5 5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 12 6.5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg">
                Enjoy zero risk and maximum savings through a unique
                pay-as-you-save model
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 flex-shrink-0 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3v18h18V3H3zm5 14H5v-2h3v2zm0-4H5v-2h3v2zm0-4H5V7h3v2zm9 8H10v-6h7v6zm0-8H10V7h7v2z" />
                <path d="M14 14l2-2 2 2v-4h-4z" />
              </svg>
            </div>
            <div>
              <p className="text-lg">
                Save on electricity & fuel costs while achieving your orange
                goals
              </p>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="text-lg text-orange-600 font-medium flex items-center gap-2"
            >
              About Us
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

    </>
  );
};

export default AboutUs;
