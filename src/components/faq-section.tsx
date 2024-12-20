import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FaqSection() {
    return (
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-2">Faq</p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Navigating Mental Health Consultation Commonly Asked Questions
          </h1>
        </div>
  
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-lg font-semibold">
              What is a mental health consultant?
            </AccordionTrigger>
            <AccordionContent>
              A mental health consultant is a professional who provides guidance and support to individuals struggling with mental health issues. They offer counseling, therapy, and other services to help people cope with stress, anxiety, depression, and other mental health challenges.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-lg font-semibold">
              What services do you offer as a mental health consultant?
            </AccordionTrigger>
            <AccordionContent>
              Our mental health consultants offer a comprehensive range of services including individual counseling, group therapy, mental health assessments, crisis intervention, and ongoing support for various mental health conditions.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-lg font-semibold">
              How can I benefit from working with a mental health consultant?
            </AccordionTrigger>
            <AccordionContent>
              Working with a mental health consultant can provide you with professional guidance, coping strategies, emotional support, and practical tools to manage your mental health effectively and improve your overall well-being.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-lg font-semibold">
              What types of issues can a mental health consultant help with?
            </AccordionTrigger>
            <AccordionContent>
              Mental health consultants can help with a wide range of issues including anxiety, depression, stress management, relationship problems, trauma, work-life balance, and personal growth challenges.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    )
  }
  