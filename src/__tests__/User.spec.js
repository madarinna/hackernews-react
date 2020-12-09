import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { singularProfile } from '../fixtures';
import { getUser } from '../services/hnApi';
import { BrowserRouter } from "react-router-dom";
import { User } from '../components/User';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
    getUser: jest.fn(),
}));

test('renders the user\'s profile component with content', async () => {
  getUser.mockImplementation(() => Promise.resolve(singularProfile));

  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <User storyId="1" />
    </BrowserRouter>);

  await waitFor(() => [
    expect(getByTestId('user')).toBeTruthy(),
    expect(getByText('Check out my insta')).toBeTruthy(),
    expect(getByTestId('user-created').textContent).toEqual('Joined: 31 August 2019')
  ]);
});