// @vitest-environment jsdom
import { describe, test, expect } from "vitest";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from "vitest";
import Home from "./Home";
import OpenTicket from "./OpenTicket";
import Login from "./Login";
import Profile from "./Profile";

test("Home page gomb teszt", async () => {
  cleanup();

  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/openticket"
          element={<OpenTicket user={{ uid: "123" }} />}
        />
      </Routes>
    </MemoryRouter>
  );

  const button = screen.getByText(/Segítség Kérése/i);
  await user.click(button);
  const openTicketText = screen.getByText(/Open a Support Ticket/i);
  expect(openTicketText).toBeInTheDocument();
});

describe("OpenTicket Component", () => {
  test('clicking on "jelentkezve" redirects to the login page and displays "Jelentkezz be itt!"', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/openticket" element={<OpenTicket />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    const button1 = screen.getByText(/Segítség Kérése/i);
    await user.click(button1);
    const button = screen.getByText(/jelentkezve/i);
    await user.click(button);
    const openTicketText = screen.getByText(/Jelentkezz be itt!/i);
    expect(openTicketText).toBeInTheDocument();
  });
});
 