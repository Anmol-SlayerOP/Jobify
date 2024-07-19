import Accordion from './Accordion';
function AccordionSec({ title, items, reason, sentence, dash }) {
  return (
    <div className="mx-6 ">
      <div className="inline-flex flex-col justify-between gap-4 pb-12">
        <p className="font-bold text-blue">
          <span className="pr-2  text-[2rem]">{dash}</span>
          {reason}
        </p>
        <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
        <p className="w-full font-semibold text-gray lg:w-11/12">{sentence}</p>
      </div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionSec;
