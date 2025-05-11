import React from "react";
import { projects } from "@/lib/data/projects";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionInfo = () => {
  return (
    <div className="border-b-2 border-black ">
      {projects.map((item, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="w-full border-t-2 border-black "
        >
          <AccordionItem
            value={`${index}`}
            className="group group-data-[state=open]:bg-black hover:bg-black"
          >
            <AccordionTrigger className="text-2xl hover:cursor-pointer [&>svg]:h-8 [&>svg]:w-8 group-data-[state=open]:bg-black group-data-[state=open]:text-white hover:text-white rounded-none px-10 md:pl-14">
              {item.heading}
            </AccordionTrigger>
            <AccordionContent className="group-data-[state=open]:bg-black group-data-[state=open]:text-white px-10 md:pl-14">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionInfo;
