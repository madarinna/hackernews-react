import React, { useEffect, useState } from "react";
import { getCommentIds } from "../services/hnApi";
import Comment from "../components/Comment";
import {
	GlobalStyle,
	StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import Story from "../components/Story";
import { Content } from "antd/lib/layout/layout";
import { Input, Button } from "antd";
import { TextRow } from "react-placeholder/lib/placeholders";
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

export const CommentContainer = ({ storyId }) => {
	const { count } = useInfiniteScroll();
	const [commentIds, setCommentIds] = useState([]);
	const { TextArea } = Input;

	useEffect(() => {
		getCommentIds(storyId).then((data) => setCommentIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={commentIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					<>&nbsp;</>
					<Story storyId={storyId} />
					<>&nbsp;</>
					<Content style={{ margin: "10px" }}>
						<p>
							<TextArea
								placeholder="Type your comment here..."
								autoSize={{ minRows: 3 }}
								style={{ paddingRight: "5px", width: "50%" }}
							/>
						</p>
						<p>
							<Button htmlType="submit">Add Comment</Button>
						</p>
					</Content>
					<Content style={{ padding: "5px" }}>
						<h1 style={{ marginTop: "10px", fontStyle: "normal" }}>
							<b>Comments</b>
						</h1>
						{commentIds.slice(0, count).map((commentId) => (
							<Comment key={commentId} commentId={commentId} />
						))}
					</Content>
					<Content style={{ padding: "5px" }}></Content>
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
};
