/**
 * This test suite is for the Header component of the Series Explorer application.
 * It verifies that the component renders correctly and that user interactions work as expected.
 *
 * The tests include:
 * 1. Checking if the logo and navigation link are present in the document.
 * 2. Ensuring that submitting the search form navigates to the correct search page with the query parameter.
 */

import Header from "@/components/layout/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

// We mock useRouter because it is a Next.js hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("renders logo and navigation link", () => {
    render(<Header />);
    const logo = screen.getByText("Series Explorer");
    const navLink = screen.getByText("Inicio");
    expect(logo).toBeInTheDocument();
    expect(navLink).toBeInTheDocument();
  });

  it("navigates to search page on form submit", () => {
    render(<Header />);
    const input = screen.getByPlaceholderText("Buscar series...");
    const button = screen.getByText("Buscar");

    fireEvent.change(input, { target: { value: "Breaking Bad" } });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/search?query=Breaking%20Bad");
    expect(input).toHaveValue("");
  });
});
