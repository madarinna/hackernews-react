import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import Comment from '../components/Comment';
import { singularComment } from '../fixtures';
import { getComment } from '../services/hnApi';
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
  getComment: jest.fn(),
}));

test('renders the story component with content', async () => {
  getComment.mockImplementation(() => Promise.resolve(singularComment));

  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <Comment storyId="1" />
    </BrowserRouter>);

  await waitFor(() => [
    expect(getByTestId('comment')).toBeTruthy(),
    expect(getByText('So cool!')).toBeTruthy(),
    expect(getByTestId('comment-by').textContent).toEqual('by Madarinna'),
  ]);
});