import React, { useEffect, useState } from "react";
import { getSubmissionIds } from "../services/hnApi";
import Submission from "../components/Submission";
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

export const UserSubContainer = ({ userId }) => {
	const { count } = useInfiniteScroll();
	const [submissionIds, setSubmissionIds] = useState([]);

	useEffect(() => {
		getSubmissionIds(userId).then((data) => setSubmissionIds(data));
	}, []);

	return (
		<ReactPlaceholder
			ready={submissionIds.length > 0}
			customPlaceholder={<GhostPlaceholder />}
		>
			<>
				<GlobalStyle />
				<StoriesContainerWrapper data-test-id="stories-container">
					&nbsp;
					<h1 style={{ marginTop: "10px" }}><b>{userId}'s Submissions</b></h1>
					{submissionIds.slice(0, count).map((submissionId) => (
						<Submission key={submissionId} submissionId={submissionId} />
					))}
				</StoriesContainerWrapper>
			</>
		</ReactPlaceholder>
	);
};
