/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { formatDate } from "../mappers/mapTime";
import { clean } from "../mappers/mapTime";
import { getUser } from "../services/hnApi";
import {
	StoryMeta,
	StoryMetaElement,
	StoryWrapper,
} from "../styles/StoryStyles";
import {
	GlobalStyle,
	StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";
import { HashLink as Link } from "react-router-hash-link";
import { Content } from "antd/lib/layout/layout";

export const User = ({ userId }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		getUser(userId).then((data) => data && setUser(data));
	}, []);

	return user ? (
		<>
			<GlobalStyle />
			<StoriesContainerWrapper data-test-id="stories-container">
				&nbsp;
				<h1 style={{ marginTop: "10px" }}>
					<b>{userId}'s Profile</b>
				</h1>
				<StoryWrapper data-testid="user">
					<Content style={{ padding: "0 50px" }}>
						<StoryMeta>
							<p data-testid="user-by">
								<StoryMetaElement color="#000">User: </StoryMetaElement>{" "}
								{user.id}
							</p>
							<p data-testid="user-created">
								<StoryMetaElement color="#000">Joined: </StoryMetaElement>
								{formatDate(user.created)}
							</p>
							<p data-testid="user-karma">
								<StoryMetaElement color="#000">Karma: </StoryMetaElement>{" "}
								{user.karma}
							</p>
							<p data-testid="user-about">
								<StoryMetaElement color="#000">About: </StoryMetaElement>{" "}
								{clean(user.about)}
							</p>
							<Link to={`/user/${user.id}/submission`}>
								<p data-testid="user-submitted">
									<StoryMetaElement
										color="rgb(94,170,248)"
										className="submission-text"
									>
										Submission
									</StoryMetaElement>
								</p>
							</Link>
						</StoryMeta>
					</Content>
				</StoryWrapper>
			</StoriesContainerWrapper>
		</>
	) : (
		<></>
	);
};
