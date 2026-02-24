import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Kya yeh session sirf beginners ke liye hai?',
    answer:
      'Nahi. Yeh session sabke liye hai. Approach aisa rakha gaya hai ki naye aur experienced learners dono easily follow kar sakein.',
  },
  {
    question: 'Kya yeh live session hai?',
    answer:
      'Haan. Yeh fully live learning masterclass hai, jahan concepts real-time explain kiye jaate hain.',
  },
  {
    question: 'Kya yahan specific actions ya suggestions di jaayengi?',
    answer:
      'Nahi. Yeh session sirf conceptual understanding aur learning ke liye hai. Koi tips, calls ya recommendations nahi di jaati.',
  },
  {
    question: 'Kya yeh recorded course hai?',
    answer:
      'Nahi. Yeh recorded course nahi hai. Yeh session live format mein conduct kiya jaata hai.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-8 md:py-24 bg-[#003459] text-white">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-science font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80">
            Common doubts — clear, honest answers.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#00171f] rounded-xl border border-[#007ea7]/40 px-6"
              >
                <AccordionTrigger className="text-white hover:no-underline text-left font-semibold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/85 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};
