import { Faq } from '../../Pages/Contact/constant';
import { faq } from '../../assets';
import { AccordionSec } from '../Accordion';

const FaQues = () => {
  return (
    <div className='-mt-24'>
      <div className="bg-white pt-12 text-center">
        <p className="font-bold text-blue">FAQS</p>
        <p className="text-4xl font-semibold">Frequently Asked Questions</p>
      </div>
      <div className=" mb-[-3.1rem]  flex flex-col bg-white pb-[8rem] pt-12 lg:flex-row">
        <div className="pl-8 pt-8 p-8  w-full lg:w-1/2" data-aos="fade-up">
          <img src={faq} alt="faq" className="pr-4 " />
        </div>
        <div className="w-full lg:w-1/2" data-aos="fade-up">
          <AccordionSec
            title=""
            items={Faq}
            reason={null}
            sentence={null}
            dash={null}
          />
        </div>
      </div>
    </div>
  );
};

export default FaQues;
