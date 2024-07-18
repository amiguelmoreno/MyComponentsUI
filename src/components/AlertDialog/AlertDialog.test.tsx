import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogPortal,
  AlertDialogFooter,
} from "./AlertDialog";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";

describe("Test Alert Dialog component", () => {
  test("renders AlertDialog and interacts correctly", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogOverlay data-testid='overlay' />
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Dialog Title</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>Description</AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogAction>Confirm</AlertDialogAction>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    );

    expect(screen.queryByText("Open Dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Dialog"));

    fireEvent.click(screen.getByTestId("overlay")); //try clicking outside the dialog to check it doesn't close

    expect(screen.getByText("Dialog Title")).toBeVisible();
    expect(screen.getByText("Description")).toBeVisible();
    expect(screen.getByText("Confirm")).toBeVisible();
    expect(screen.getByText("Cancel")).toBeVisible();

    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();

    //try again with the confirm button

    fireEvent.click(screen.getByText("Open Dialog"));

    fireEvent.click(screen.getByText("Confirm"));

    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
  });
});
