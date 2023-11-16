import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "./ui/checkbox";
import Stars from "./stars";
import { useEffect, useState } from "react";

export function Filters({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}) {
  return (
    <div className="min-w-[20%] sticky top-0 h-fit">
      <Accordion type="multiple" defaultValue={["brand", "price", "rating"]}>
        <AccordionItem value="brand">
          <AccordionTrigger className="font-medium text-lg">
            BRAND
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mango"
                onCheckedChange={(e: boolean) => {
                  setFilters({ ...filters, mango: e });
                }}
              />
              <label
                htmlFor="mango"
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mango
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="h&m"
                onCheckedChange={(e: boolean) => {
                  setFilters({ ...filters, hm: e });
                }}
              />
              <label
                htmlFor="h&m"
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                H&M
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="font-medium text-lg">
            PRICE RANGE
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="500"
                onCheckedChange={(e: boolean) => {
                  setFilters({ ...filters, 500: e });
                }}
              />
              <label
                htmlFor="500"
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Under 500
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="1000"
                onCheckedChange={(e: boolean) => {
                  setFilters({ ...filters, 1000: e });
                }}
              />
              <label
                htmlFor="1000"
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1000 to 3000
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="rating" className="border-none">
          <AccordionTrigger className="font-medium text-lg">
            RATINGS
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div className="flex items-center space-x-2" key={rating}>
                <Checkbox
                  id={rating.toString()}
                  onCheckedChange={(e: boolean) => {
                    setFilters({ ...filters, [rating]: e });
                  }}
                />
                <label
                  htmlFor={rating.toString()}
                  className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Stars rating={rating} />
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
