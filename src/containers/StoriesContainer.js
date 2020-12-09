import React, { useEffect, useState } from "react";
import {
	getAskStoryIds,
	getBestStoryIds,
	getJobStoryIds,
	getNewStoryIds,
	getShowStoryIds,
	getTopStoryIds,
} from "../services/hnApi";
import Story from "../components/Story";
import AskStory from "../components/AskStory";
import {
	GlobalStyle,
	StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import {
	TextRow,
} from "react-placeholder/lib/placeholders";
import ReactPlaceholder from "react-placeholder";

const GhostPlaceholder = () => (
	<div
		className="my-placeholder"
		style={{
			marginTop: "50px",
		}}
	>
		{/* Skeleton */}
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>

		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "400px",
				padding: "0px, 20px",
				marginLeft: "100px",
				marginBottom: "20px",
			}}
		/>
		<TextRow
			rows={6}
			color="rgba(242, 242, 242, 1)"
			style={{
				width: "300px",
				padding: "0px, 20px",
				marginLeft: "120px",
				marginBottom: "20px",
			}}
		/>
		<section
			style={{
				width: "1140px",
				borderTop: "1px solid #cccccc",
				marginLeft: "100px",
			}}
		/>
	</div>
);

const LoadMoreGhostPlaceholder = () => (
	<>
		<section
			style={{
				width: "1120px",
				borderTop: "1px solid #cccccc",
				// marginLeft: "100px",
			}}
		/>
		<div
			className="my-placeholder"
			style={{
				marginTop: "15px",
			}}
		>
			{/* Skeleton */}
			<TextRow
				rows={6}
				color="rgba(242, 242, 242, 1)"
				style={{
					width: "400px",
					// padding: "0px, 20px",
					// marginLeft: "100px",
					marginBottom: "20px",
				}}
			/>
			<TextRow
				rows={6}
				color="rgba(242, 242, 242, 1)"
				style={{
					width: "300px",
					// padding: "0px, 20px",
					// marginLeft: "120px",
					marginBottom: "20px",
				}}
			/>
			<section
				style={{
					width: "1120px",
					borderTop: "1px solid #cccccc",
					// marginLeft: "100px",
				}}
			/>
		</div>
	</>
);

export const NewStoriesContainer = () => {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getNewStoryIds().then((data) => setStoryIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={storyIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					&nbsp;
					{storyIds.slice(0, count).map((storyId) => (
						<Story key={storyId} storyId={storyId} />
					))}
					<LoadMoreGhostPlaceholder />
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
	// }
};

export const TopStoriesContainer = () => {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getTopStoryIds().then((data) => setStoryIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={storyIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					&nbsp;
					{storyIds.slice(0, count).map((storyId) => (
						<Story key={storyId} storyId={storyId} />
					))}
					<LoadMoreGhostPlaceholder />
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
};

export const BestStoriesContainer = () => {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getBestStoryIds().then((data) => setStoryIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={storyIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					&nbsp;
					{storyIds.slice(0, count).map((storyId) => (
						<Story key={storyId} storyId={storyId} />
					))}
					<LoadMoreGhostPlaceholder />
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
};

export const AskStoriesContainer = () => {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getAskStoryIds().then((data) => setStoryIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={storyIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					&nbsp;
					{storyIds.slice(0, count).map((storyId) => (
						<AskStory key={storyId} storyId={storyId} />
					))}
					<LoadMoreGhostPlaceholder />
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
};

export const ShowStoriesContainer = () => {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getShowStoryIds().then((data) => setStoryIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={storyIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					&nbsp;
					{storyIds.slice(0, count).map((storyId) => (
						<Story key={storyId} storyId={storyId} />
					))}
					<LoadMoreGhostPlaceholder />
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
};

export const JobStoriesContainer = () => {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getJobStoryIds().then((data) => setStoryIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={storyIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					&nbsp;
					{storyIds.slice(0, count).map((storyId) => (
						<Story key={storyId} storyId={storyId} />
					))}
					<LoadMoreGhostPlaceholder />
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
};
