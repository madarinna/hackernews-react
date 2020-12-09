/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, memo } from "react";
import { mapTime, check1, check2 } from "../mappers/mapTime";
import { getStory } from "../services/hnApi";
import {
	StoryMeta,
	StoryMetaElement,
	StoryTitle,
	StoryWrapper,
} from "../styles/StoryStyles";
import { HashLink as Link } from "react-router-hash-link";

const AskStory = memo(function Story({ storyId }) {
	const [story, setStory] = useState();

	useEffect(() => {
		getStory(storyId).then((data) => {
			data && data.title && setStory(data);
		});
	}, []);

	return story && story.title ? (
		<StoryWrapper data-testid="story">
			<StoryTitle>
				<Link to={`/ask/${story.id}`}>
					<p>{story.title}</p>
				</Link>
			</StoryTitle>
			<StoryMeta>
				<span data-testid="story-score">
					<StoryMetaElement color="#000">Points: </StoryMetaElement>
					{story.score}
				</span>
				<Link to={`/user/${story.by}`}>
					<span data-testid="story-by">
						<StoryMetaElement color="#000">By: </StoryMetaElement>
						{story.by}
					</span>
				</Link>
				&nbsp; &nbsp;
				<span data-testid="story-time">
					<StoryMetaElement color="#000">Posted: </StoryMetaElement>
					{mapTime(story.time)} ago &nbsp;
				</span>
				<Link to={`/comments/${story.id}`}>
					<span data-testid="story-comments">
						<StoryMetaElement color="#000">{check1(story.kids)}</StoryMetaElement>
						{check2(story.kids)}
					</span>
				</Link>
			</StoryMeta>
		</StoryWrapper>
	) : (
		<></>
	);
});
export default AskStory;
