// src/components/Accordion/Accordion.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

describe("Test Accordion component", () => {
  test("renders the accordion and allows for single toggling", () => {
    render(
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const item1Trigger = screen.getByText("Item 1");
    const item2Trigger = screen.getByText("Item 2");
    expect(item1Trigger).toHaveAttribute("data-state", "closed"); // Closed means its not visible
    expect(item2Trigger).toHaveAttribute("data-state", "closed");

    // Click on the first item to open it
    fireEvent.click(item1Trigger);
    expect(item1Trigger).toHaveAttribute("data-state", "open");

    // Click on the second element and check that the other one closes
    fireEvent.click(item2Trigger);
    expect(item2Trigger).toHaveAttribute("data-state", "open");
    expect(item1Trigger).toHaveAttribute("data-state", "closed");
  });

  test("allows multiple items to be open if type is set to multiple", () => {
    render(
      <Accordion type='multiple'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const item1Trigger = screen.getByText("Item 1");
    const item2Trigger = screen.getByText("Item 2");
    expect(item1Trigger).toHaveAttribute("data-state", "closed"); // Closed means its not visible
    expect(item2Trigger).toHaveAttribute("data-state", "closed");

    // Click on the first item to open it
    fireEvent.click(item1Trigger);
    expect(item1Trigger).toHaveAttribute("data-state", "open");

    // Click on the second element and check that the other one still open
    fireEvent.click(item2Trigger);
    expect(item2Trigger).toHaveAttribute("data-state", "open");
    expect(item1Trigger).toHaveAttribute("data-state", "open");
  });
});
