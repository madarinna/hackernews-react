import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { AskText } from '../components/AskText';
import { singularAsk, singularComment, singularStory, storyIds } from '../fixtures';
import { getAskText, getCommentIds, getComment, getStory } from '../services/hnApi';
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
  getAskText: jest.fn(),
  getCommentIds: jest.fn(),
  getComment: jest.fn(),
  getStory: jest.fn()
}));

test('renders the ask component with content', async () => {
  getAskText.mockImplementation(() => Promise.resolve(singularAsk));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getCommentIds.mockImplementation(() => Promise.resolve(storyIds));
  getComment.mockImplementation(() => Promise.resolve(singularComment));

  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <AskText storyId="1" />
    </BrowserRouter>);

  await waitFor(() => [
    expect(getByTestId('ask')).toBeTruthy(),
    expect(getByText('Ask HN: What is this?')).toBeTruthy(),
    expect(getByTestId('ask-text').textContent).toEqual('What is this function doing?'),
    expect(getByText('So cool!')).toBeTruthy(),
    expect(getByTestId('comment-by').textContent).toEqual('by Madarinna')
  ]);
}, 10000);