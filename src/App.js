import React from "react";
import { Switch, Route } from "react-router-dom";
import NewPage from "./pages/NewPage";
import UserPage from "./pages/userPage";
import UserSubPage from "./pages/UserSubPage";
import TopPage from "./pages/TopPage";
import AskPage from "./pages/AskPage";
import BestPage from "./pages/BestPage";
import JobPage from "./pages/JobPage";
import ShowPage from "./pages/ShowPage";
import CommentPage from "./pages/CommentPage";
import AskStoryPage from "./pages/AskStoryPage";
import "./App.css";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={NewPage} />
				<Route exact path="/top" component={TopPage} />
				<Route exact path="/best-stories" component={BestPage} />
				<Route exact path="/ask/" component={AskPage} />
				<Route exact path="/ask/:storyId" component={AskStoryPage} />
				<Route exact path="/show" component={ShowPage} />
				<Route exact path="/jobs" component={JobPage} />
				<Route exact path="/comments/:storyId" component={CommentPage} />
				<Route exact path="/user/:userId" component={UserPage} />
				<Route exact path="/user/:userId/submission" component={UserSubPage} />
			</Switch>
		</>
	);
}

export default App;
