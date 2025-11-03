import React from "react";

const testimonials = [
  {
    name: "John Smith",
    image: "https://igequipment.com/wp-content/uploads/2022/04/Ellipse-16.png",
    review:
      "We have installed a Dual Fuel conversion kit. This was done to reduce the emission and the running costs of the generator in addition to being in conformity with the pollution norms.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    image: "https://igequipment.com/wp-content/uploads/2022/04/Ellipse-122.png",
    review:
      "We are satisfied with the operation and running of the Kit. We are also very satisfied with the efforts and the services provided by IG Inventive Energy for the supply, installation and commissioning of the Dual Fuel Kit.",
    rating: 4,
    },
  {
    name: "John Smith",
    image: "https://igequipment.com/wp-content/uploads/2022/04/Ellipse-16.png",
    review:
      "We have installed a Dual Fuel conversion kit. This was done to reduce the emission and the running costs of the generator in addition to being in conformity with the pollution norms.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    image: "https://igequipment.com/wp-content/uploads/2022/04/Ellipse-122.png",
    review:
      "We are satisfied with the operation and running of the Kit. We are also very satisfied with the efforts and the services provided by IG Inventive Energy for the supply, installation and commissioning of the Dual Fuel Kit.",
    rating: 4,
    },
  {
    name: "John Smith",
    image: "https://igequipment.com/wp-content/uploads/2022/04/Ellipse-16.png",
    review:
      "We have installed a Dual Fuel conversion kit. This was done to reduce the emission and the running costs of the generator in addition to being in conformity with the pollution norms.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    image: "https://igequipment.com/wp-content/uploads/2022/04/Ellipse-122.png",
    review:
      "We are satisfied with the operation and running of the Kit. We are also very satisfied with the efforts and the services provided by IG Inventive Energy for the supply, installation and commissioning of the Dual Fuel Kit.",
    rating: 4,
    },
   
];

const Testimonial = () => {
  return (
    <div className="bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">OUR CLIENTS <span className="text-orange-600">TESTIMONIAL</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative border-l-4 border-orange-600">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="pt-12 text-center">
              <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
              <div className="flex justify-center mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-500 text-xl ${i < testimonial.rating ? "fas fa-star" : "far fa-star"}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
