import React from "react";
import { User } from "../components/User";
import { useParams } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../images/hacker-news1_logo-c6b9933e1bd8db44697993fd5cf2386ae9cab6d650276e1d0769fdceee1502aa.jpg";

function UserPage() {
	let { userId } = useParams();
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
					<img className="hackernews-logo" src={Logo} alt="hackernews" />
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
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
					<User userId={userId} />
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}> ©2020 </Footer>
		</Layout>
	);
}

export default UserPage;
