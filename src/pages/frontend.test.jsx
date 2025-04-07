// @vitest-environment jsdom
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import OpenTicket from './OpenTicket';  // Assuming the OpenTicket page is in this path
import Home from './Home';  // Assuming the Home page is in this path
import App from "../App";
import { test, expect } from 'vitest';
import { vi } from 'vitest';

// Test if clicking "Segítség Kérése" button navigates to /openticket
test('Navigates to OpenTicket page when "Segítség Kérése" is clicked', async () => {
  cleanup(); // Clean up the previous render

  const user = userEvent.setup();

  // Mock the useNavigate hook to intercept and check navigation
  const mockNavigate = vi.fn();

  // Render the Home component inside a MemoryRouter with mocked navigation
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/openticket" element={<OpenTicket user={{uid: '123'}} />} />
      </Routes>
    </MemoryRouter>
  );

  // Find the "Segítség Kérése" button
  const button = screen.getByText(/Segítség Kérése/i);

  // Simulate clicking the button
  await user.click(button);

  // Check if the navigate function was called with the correct route
  expect(mockNavigate).toHaveBeenCalledWith('/openticket');
});