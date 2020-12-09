import axios from "axios";
import { selectStoryFields, selectUserFields, selectCommentFields } from "../selectors/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const askStoriesUrl = `${baseUrl}askstories.json`;
export const showStoriesUrl = `${baseUrl}showstories.json`;
export const jobStoriesUrl = `${baseUrl}jobstories.json`;

export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;

export const getNewStoryIds = async () => {
	const result = await axios.get(newStoriesUrl).then(({ data }) => data);
	return result;
};

export const getTopStoryIds = async () => {
	const result = await axios.get(topStoriesUrl).then(({ data }) => data);
	return result;
};


export const getBestStoryIds = async () => {
	const result = await axios.get(bestStoriesUrl).then(({ data }) => data);
	return result;
};

export const getAskStoryIds = async () => {
	const result = await axios.get(askStoriesUrl).then(({ data }) => data);
	return result;
};

export const getShowStoryIds = async () => {
	const result = await axios.get(showStoriesUrl).then(({ data }) => data);
	return result;
};

export const getJobStoryIds = async () => {
	const result = await axios.get(jobStoriesUrl).then(({ data }) => data);
	return result;
};

export const getStory = async (storyId) => {
	const result = await axios
		.get(`${storyUrl + storyId}.json`)
		.then(({ data }) => data && selectStoryFields(data));

	return result;
};

export const getUser = async (storyBy) => {
	const result = await axios
		.get(`${userUrl + storyBy}.json`)
		.then(({ data }) => data && selectUserFields(data));

	return result;
};

export const getCommentIds = async (storyId) => {
	const result = await axios
		.get(`${storyUrl + storyId}.json`)
		.then(({ data }) => data && selectStoryFields(data));
	return result.kids;
};

export const getComment = async (commentId) => {
	const result = await axios
		.get(`${storyUrl + commentId}.json`)
		.then(({ data }) => data && selectCommentFields(data));

	return result;
};

export const getSubmissionIds = async (userId) => {
	const result = await axios
		.get(`${userUrl + userId}.json`)
		.then(({ data }) => data && selectUserFields(data));
	return result.submitted;
};

export const getAskText = async (askId) => {
	const result = await axios
		.get(`${storyUrl + askId}.json`)
		.then(({ data }) => data && selectStoryFields(data));

	return result;
};