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

import { Content } from "antd/lib/layout/layout";

const Submission = memo(function Submission({ submissionId }) {
	const [story, setStory] = useState();

	useEffect(() => {
		getStory(submissionId).then((data) => {
			data && data.url && setStory(data);
		});
	}, []);

	return story && story.title ? (
		<StoryWrapper data-testid="story">
			<Content style={{ padding: "5px" }}>
				<StoryTitle>
					<a href={story.url}>
						<p>{story.title}</p>
					</a>
				</StoryTitle>
				<StoryMeta>
					<span data-testid="story-score">
						<StoryMetaElement color="#000">Points: </StoryMetaElement>
						{story.score}
					</span>
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
			</Content>
		</StoryWrapper>
	) : (
		<></>
	);
});
export default Submission;
