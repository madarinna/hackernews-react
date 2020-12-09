import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { AskStoriesContainer, BestStoriesContainer, JobStoriesContainer, NewStoriesContainer, ShowStoriesContainer, TopStoriesContainer } from '../containers/StoriesContainer';
import { storyIds, singularStory, singularAsk } from '../fixtures';
import { getStory, getNewStoryIds, getAskStoryIds, getTopStoryIds, getBestStoryIds, getShowStoryIds, getJobStoryIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';
import { BrowserRouter } from "react-router-dom";

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
  getNewStoryIds: jest.fn(),
  getTopStoryIds: jest.fn(),
  getAskStoryIds: jest.fn(),
  getBestStoryIds: jest.fn(),
  getShowStoryIds: jest.fn(),
  getJobStoryIds: jest.fn()
}));

test('renders the new story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getNewStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId, getByTestId } = render(
    <BrowserRouter>
      <NewStoriesContainer />
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('Indonesia Found Vaccine to COVID-19')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Madarinna'),
    expect(getByTestId('story-comments').textContent).toEqual('Comments: 2')
  ]);
});

test('renders the top story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getTopStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId, getByTestId } = render(
    <BrowserRouter>
      <TopStoriesContainer />
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('Indonesia Found Vaccine to COVID-19')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Madarinna'),
    expect(getByTestId('story-comments').textContent).toEqual('Comments: 2')
  ]);
});

test('renders the best story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getBestStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId, getByTestId } = render(
    <BrowserRouter>
      <BestStoriesContainer/>
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('Indonesia Found Vaccine to COVID-19')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Madarinna'),
    expect(getByTestId('story-comments').textContent).toEqual('Comments: 2')
  ]);
});

test('renders the ask story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularAsk));
  getAskStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(
    <BrowserRouter>
      <AskStoriesContainer />
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('Ask HN: What is this?')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Madarinna')
  ]);
});

test('renders the show story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getShowStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId, getByTestId } = render(
    <BrowserRouter>
      <ShowStoriesContainer />
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('Indonesia Found Vaccine to COVID-19')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Madarinna'),
    expect(getByTestId('story-comments').textContent).toEqual('Comments: 2')
  ]);
});

test('renders the show story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getJobStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId, getByTestId } = render(
    <BrowserRouter>
      <JobStoriesContainer />
    </BrowserRouter>);
  await waitFor(() => [
    expect(getByText('Indonesia Found Vaccine to COVID-19')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Madarinna'),
    expect(getByTestId('story-comments').textContent).toEqual('Comments: 2')
  ]);
});