import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Test Button component", () => {
  test("renders with default variant and size", () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole("button", { name: /default button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
    );
  });

  test("renders with destructive variant", () => {
    render(<Button variant='destructive'>Destructive Button</Button>);
    const button = screen.getByRole("button", { name: /destructive button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-destructive text-destructive-foreground hover:bg-destructive/90"
    );
  });

  test("handles onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
