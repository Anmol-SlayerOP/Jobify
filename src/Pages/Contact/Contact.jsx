import {
  ContactUs,
  FaQues,
  Footer,
  Navbar,
} from '../../components';
const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mb-[-2rem] mt-[-8rem] bg-slate-200">
          <ContactUs />
          <FaQues />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
