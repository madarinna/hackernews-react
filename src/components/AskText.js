/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { mapTime, clean } from "../mappers/mapTime";
import { getAskText } from "../services/hnApi";
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
import { CommentContainer } from "../containers/CommentContainer";

export const AskText = ({ storyId }) => {
	const [ask, setAsk] = useState();

	useEffect(() => {
		getAskText(storyId).then((data) => data && setAsk(data));
	}, []);

	return ask ? (
		<>
			<GlobalStyle />
			<StoriesContainerWrapper data-test-id="stories-container">
				&nbsp;
				<h1 style={{ marginTop: "10px" }}>{ask.title}</h1>
				<StoryWrapper data-testid="ask">
					<StoryMeta>
                        <p>
                            <span data-testid="ask-time">
                                <StoryMetaElement color="#000"></StoryMetaElement>{" "}
                                {mapTime(ask.time)} ago {` `}
                            </span>
                            <Link to={`/user/${ask.by}`}>
                                <span data-testid="ask-by">
                                    <StoryMetaElement color="#000">by {ask.by}</StoryMetaElement>
                                </span>
                            </Link>
                        </p>
                        <div data-testid="ask-text" style={{fontStyle : "normal"}}>
                            {clean(ask.text)}
                        </div>
						<Content style={{ padding: "5px" }}>
							<div className="site-layout-content">
								<CommentContainer storyId={storyId} />
							</div>
						</Content>
					</StoryMeta>
				</StoryWrapper>
			</StoriesContainerWrapper>
		</>
	) : (
		<></>
	);
};
