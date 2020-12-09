import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import Story from '../components/Story';
import { singularStory } from '../fixtures';
import { getStory } from '../services/hnApi';
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
}));

test('renders the story component with content', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <Story storyId="1" />
    </BrowserRouter>);

  await waitFor(() => [
    expect(getByTestId('story')).toBeTruthy(),
    expect(getByText('Indonesia Found Vaccine to COVID-19')).toBeTruthy(),
    expect(getByTestId('story-by').textContent).toEqual('By: Madarinna'),
    expect(getByTestId('story-comments').textContent).toEqual('Comments: 2')
  ]);
});