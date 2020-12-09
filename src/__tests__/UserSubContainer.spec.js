import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { AskStoriesContainer } from '../containers/StoriesContainer';
import { storyIds, singularStory, singularAsk } from '../fixtures';
import { getStory, getSubmissionIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';
import { BrowserRouter } from "react-router-dom";
import { UserSubContainer } from '../containers/UserSubContainer';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
  getSubmissionIds: jest.fn()
}));

test('renders user\'s submission container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getSubmissionIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(
    <BrowserRouter>
      <UserSubContainer />
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('Indonesia Found Vaccine to COVID-19')).toBeTruthy(),
    expect(queryByTestId('story-score').textContent).toEqual('Points: 100'),
  ]);
});

