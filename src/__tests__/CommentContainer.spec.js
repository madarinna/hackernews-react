import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { storyIds, singularComment, singularStory } from '../fixtures';
import { getComment, getCommentIds, getStory } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';
import { BrowserRouter } from "react-router-dom";
import { CommentContainer } from '../containers/CommentContainer';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hnApi', () => ({
  getComment: jest.fn(),
  getStory: jest.fn(),
  getCommentIds: jest.fn()
}));

test('renders a story\'s comment container with a comment', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getComment.mockImplementation(() => Promise.resolve(singularComment));
  getCommentIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(
    <BrowserRouter>
      <CommentContainer />
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('So cool!')).toBeTruthy(),
    expect(queryByTestId('comment-by').textContent).toEqual('by Madarinna'),
  ]);
});

