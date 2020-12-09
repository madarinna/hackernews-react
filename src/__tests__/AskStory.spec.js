import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import AskStory from '../components/AskStory';
import { singularAsk } from '../fixtures';
import { getStory } from '../services/hnApi';
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
}));

test('renders the ask story component with content', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularAsk));

  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <AskStory storyId="1" />
    </BrowserRouter>);

  await waitFor(() => [
    expect(getByTestId('story')).toBeTruthy(),
    expect(getByText('Ask HN: What is this?')).toBeTruthy(),
    expect(getByTestId('story-by').textContent).toEqual('By: Madarinna'),
  ]);
});