import ContactSlide from './ContactSlide';

const ContactUs = () => {
  return (
    <div className="my-32 px-4 py-32 text-center lg:px-12  " data-aos="fade-up">
      <div className="mb-20 inline-flex flex-col gap-6">
        <p className=" mb-5 text-xl font-bold text-blue">CONTACT US</p>
        <h2 className=" text-4xl font-semibold md:text-5xl">
          Have a Doubt ? Contact With Us .
        </h2>
        <p className="font-semibold text-gray">
          Happy to help You❤️
        </p>
      </div>

      <div>
        <ContactSlide />
      </div>
    </div>
  );
};

export default ContactUs;
