import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

describe("Test Alert component", () => {
  test("renders with default variant", () => {
    render(
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert</AlertDescription>
      </Alert>
    );
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("bg-background text-foreground");
    expect(alert).not.toHaveClass(
      "border-destructive/50 border-2 text-destructive"
    );
    expect(screen.getByText("Default Alert")).toBeInTheDocument();
    expect(screen.getByText("This is a default alert")).toBeInTheDocument();
  });

  test("renders with destructive variant", () => {
    render(
      <Alert variant='destructive'>
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>This is a destructive alert</AlertDescription>
      </Alert>
    );
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass(
      "border-destructive/50 border-2 text-destructive"
    );
    expect(alert).not.toHaveClass("bg-background text-foreground");
    expect(screen.getByText("Destructive Alert")).toBeInTheDocument();
    expect(screen.getByText("This is a destructive alert")).toBeInTheDocument();
  });

  test("renders Alert Title and Alert Description correctly", () => {
    render(
      <Alert>
        <AlertTitle>Test Title</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    );
    const alertTitle = screen.getByText("Test Title");
    const alertDescription = screen.getByText("Test Description");
    expect(alertTitle).toBeInTheDocument();
    expect(alertDescription).toBeInTheDocument();
    expect(alertTitle).toHaveClass(
      "mb-1 font-medium leading-none tracking-tight"
    );
    expect(alertDescription).toHaveClass("text-sm [&_p]:leading-relaxed");
  });
});
