/* eslint-disable react/no-unescaped-entities */
import { FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';
import { RiMessage2Fill } from 'react-icons/ri';

const ContactArr = [
  {
    icon: <RiMessage2Fill size={48} />,
    name: 'Contact via Email',
    // comment: 'anmolnag576@gmail.com',
    comment: 'xyz@gmail.com',
  },
  {
    icon: <FaPhoneAlt size={48} />,
    name: 'Ring Us',
    comment: '+91 123 456 789',
  },
  {
    icon: <FaMapMarkedAlt size={48} />,
    name: 'Get in Touch',
    // comment: '2/12 IIIT Lucknow',
    comment: 'India',
  },
];

const ContactSlide = () => {
  return (
    <>


    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">WAYS TO REACH US</h1>
      <div className="flex justify-around flex-wrap">
        {ContactArr.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center mx-4">
            <div className="bg-black  text-slate-300 p-4 rounded-lg shadow-lg mb-4  border-[12px] border-indigo-200  ">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
            <p className="text-gray-600">{feature.comment}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default ContactSlide;
/* eslint-enable react/no-unescaped-entities */
