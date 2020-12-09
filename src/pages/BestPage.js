import React from "react";
import { BestStoriesContainer } from "../containers/StoriesContainer";

import { Layout, Menu } from "antd";
import { HashLink as Link } from "react-router-hash-link";

function BestPage() {
	const { Header, Content, Footer } = Layout;
	return (
		<Layout className="layout">
			<Header
				style={{
					position: "fixed",
					zIndex: 1,
					width: "100%",
					background: "rgb(255, 102, 0)",
				}}
			>
				<div className="logo">
					<img
						className="hackernews-logo"
						src="hacker-news1_logo-c6b9933e1bd8db44697993fd5cf2386ae9cab6d650276e1d0769fdceee1502aa.jpg"
						alt="hackernews"
					/>
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["3"]}
					style={{ background: "rgb(255, 102, 0)" }}
				>
					<Menu.Item key="1">
						<Link to="/">New</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/top">Top</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/best-stories">Best Stories</Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Link to="/ask">Ask</Link>
					</Menu.Item>
					<Menu.Item key="5">
						<Link to="/show">Show</Link>
					</Menu.Item>
					<Menu.Item key="6">
						<Link to="/jobs">Jobs</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: "0 50px" }}>
				<div className="site-layout-content">
					<BestStoriesContainer />
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}> ©2020 </Footer>
		</Layout>
	);
}

export default BestPage;
