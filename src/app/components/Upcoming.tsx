import React from 'react';
import Image from 'next/image';

// Define types for props
interface CardOverlayProps {
  name: string;
}

// Reusable CardOverlay Component with TypeScript
const CardOverlay: React.FC<CardOverlayProps> = ({ name }) => (
  <>
    {/* Event Name */}
    <div className="absolute font-semibold top-0 left-0 bg-black bg-opacity-70 text-white text-sm px-2 py-1 z-10">
      {name}
    </div>

    {/* Live NOW with Animation */}
    <div className="absolute font-semibold top-0 right-0 flex items-center justify-center bg-red-600 text-white text-xs px-3 py-1 rounded-bl-lg animate-pulse z-10">
      <div className="relative flex items-center justify-center w-4 h-4 mr-2">
        <span className="absolute w-full h-full border-2 border-t-transparent border-white rounded-full animate-spin"></span>
      </div>
      Live Now
    </div>
  </>
);

const Upcoming = () => {
  const data = [
    { 
      id: "1", 
      name: "Fashion Shows", 
      img: "/2_1.jpg", 
      des: 'Arka Fashion Week 2025',
      date: "16 Jan",
      location: "Aloki, Tejgaon",
      price: "250"
    },
    { 
      id: "2", 
      name: "Theater", 
      img: "/animaniac-Event_KV.png", 
      des: 'Rushmain live',
      date: "18 Jan",
      location: "Gulshan Club Center",
      price: "500"
    },
    { 
      id: "3", 
      name: "Soccer Player", 
      img: "/ar.png",
      des: 'Animaniac Spring Fiesta',
      date: "20 Jan",
      location: "Bashundhara Arena",
      price: "300"
    },
    { 
      id: "4", 
      name: "Reunion Event", 
      img: "/ar.png",
      des: 'University Alumni Meetup',
      date: "25 Jan",
      location: "DU Campus Road",
      price: "400"
    },
  ];

  return (
    <div className="container mx-auto mt-6 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Explore Upcomings!</h2>
      <p className="text-center text-gray-600 mb-8">
        Explore the Universe of Events at Your Fingertips.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((event) => (
          <div key={event.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            {/* Overlay */}
            <CardOverlay name={event.name} />

            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={event.img}
                alt={event.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority // Ensures image loads quickly
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{event.des}</h3>
            </div>

            {/* Bottom Section: Date, Location, and Price */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div>
                  <span className="font-bold block text-black">{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <div className="font-semibold text-black">
                  Price starts from ৳{event.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
