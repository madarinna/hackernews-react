/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, memo } from "react";
import { mapTime } from "../mappers/mapTime";
import { clean } from "../mappers/mapTime";
import { getComment } from "../services/hnApi";
import {
	StoryMeta,
	StoryMetaElement,
	StoryWrapper,
} from "../styles/StoryStyles";
import { HashLink as Link } from "react-router-hash-link";
import { Content } from "antd/lib/layout/layout";

const Comment = memo(function Comment({ commentId }) {
	const [comment, setComment] = useState();

	useEffect(() => {
		getComment(commentId).then((data) => {
			data && data.text && setComment(data);
		});
	}, []);

	return comment && comment.text ? (
		<StoryWrapper data-testid="comment">
			<Content style={{ padding: "0 50px" }}>
				<StoryMeta>
					<p>
						<span data-testid="comment-time">
							{mapTime(comment.time)} ago {` `}
						</span>
						<Link to={`/user/${comment.by}`}>
							<span data-testid="comment-by">
								<StoryMetaElement color="#000">
									by {comment.by}
								</StoryMetaElement>
							</span>
						</Link>
					</p>
					<p data-testid="comment-text" style={{fontStyle : "normal"}}>
						{clean(comment.text)}
					</p>
				</StoryMeta>
			</Content>
		</StoryWrapper>
	) : (
		<></>
	);
});
export default Comment;
