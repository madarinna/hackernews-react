import axios from 'axios';
import {
  getNewStoryIds,
  getTopStoryIds,
  getStory,
  newStoriesUrl,
  storyUrl,
  getUser,
  userUrl,
  topStoriesUrl,
  getBestStoryIds,
  bestStoriesUrl,
  getAskStoryIds,
  askStoriesUrl,
  getShowStoryIds,
  showStoriesUrl,
  getJobStoryIds,
  jobStoriesUrl,
  getCommentIds,
  getComment,
  getSubmissionIds,
  getAskText,
} from '../services/hnApi';
import { singularStory, storyIds, emptySingularStory, singularProfile, emptySingularProfile, singularComment, singularAsk } from '../fixtures';

jest.mock('axios');

describe('HackerNews API', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getStory functionality', () => {
    it('requests and gets a story from the HackerNews API', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(singularStory);
    });

    it('does not retrieve a story from the API, but handles gracefully', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(emptySingularStory);
    });
  });

  describe('getUser functionality', () => {
    it('requests and gets a user\'s profile from the HackerNews API', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularProfile })
      );

      const entity = await getUser('Madarinna');
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${userUrl + 'Madarinna'}.json`);
      expect(entity).toEqual(singularProfile);
    });

    it('does not retrieve a user\'s profile from the API, but handles gracefully', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularProfile })
      );

      const entity = await getUser('Madarinna');
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${userUrl + 'Madarinna'}.json`);
      expect(entity).toEqual(emptySingularProfile);
    });
  });

  describe('getComment functionality', () => {
    it('requests and gets a comment from the HackerNews API', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularComment })
      );

      const entity = await getComment(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(singularComment);
    });
  });

  describe('getAskText functionality', () => {
    it('requests and gets a ask story from the HackerNews API', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularAsk })
      );

      const entity = await getAskText(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(singularAsk);
    });
  });

  describe('getNewStoryIds functionality', () => {
    it('requests and gets new story ids from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getNewStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(newStoriesUrl);
      expect(entity).toEqual(storyIds);
    });
  });

  describe('getTopStoryIds functionality', () => {
    it('requests and gets top story ids from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getTopStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(topStoriesUrl);
      expect(entity).toEqual(storyIds);
    });
  });

  describe('getBestStoryIds functionality', () => {
    it('requests and gets best story ids from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getBestStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(bestStoriesUrl);
      expect(entity).toEqual(storyIds);
    });
  });

  describe('getAskStoryIds functionality', () => {
    it('requests and gets ask story ids from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getAskStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(askStoriesUrl);
      expect(entity).toEqual(storyIds);
    });
  });

  describe('getShowStoryIds functionality', () => {
    it('requests and gets show story ids from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getShowStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(showStoriesUrl);
      expect(entity).toEqual(storyIds);
    });
  });

  describe('getJobStoryIds functionality', () => {
    it('requests and gets job story ids from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getJobStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(jobStoriesUrl);
      expect(entity).toEqual(storyIds);
    });
  });

  describe('getCommentIds functionality', () => {
    it('requests and gets comment ids of a story from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: singularStory }));

      const entity = await getCommentIds(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(singularStory.kids);
    });
  });

  describe('getSubmissionIds functionality', () => {
    it('requests and gets submission ids of a user from the HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: singularProfile }));

      const entity = await getSubmissionIds('Madarinna');
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${userUrl + 'Madarinna'}.json`);
      expect(entity).toEqual(singularProfile.submitted);
    });
  });
});