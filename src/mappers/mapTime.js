export const mapTime = (timestamp) => {
	const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

	let interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return `${interval} years`;
	}
	interval = Math.floor(seconds / 2592000);

	if (interval > 1) {
		return `${interval} months`;
	}
	interval = Math.floor(seconds / 86400);

	if (interval > 1) {
		return `${interval} days`;
	}
	interval = Math.floor(seconds / 3600);

	if (interval > 1) {
		return `${interval} hours`;
	}
	interval = Math.floor(seconds / 60);

	if (interval > 1) {
		return `${interval} minutes`;
	}

	return `${Math.floor(seconds)} seconds`;
};

export const check1 = (kids) => {
	if (kids) {
		return "Comments: "
	} else {
		return "";
	}
};

export const check2 = (kids) => {
	if (kids) {
		return kids.length;
	} else {
		return "";
	}
};

export const formatDate = (date) => {
	var monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	date = new Date(date*1000);
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return day + " " + monthNames[monthIndex] + " " + year;
};

export const clean = (str) => {
	if (str) {
		str = str.replace(/(&#x27;)/g, "'");
		str = str.replace(/(<p>)/g, "\n");
		str = str.replace(/(<a[^>]*href=")[^"]*("[^>]*>)/g, " ");
		str = str.replace(/(<\/a>)/g, "");
		str = str.replace(/(&#x2F;)/g, "/");
		str = str.replace(/(&quot;)/g, '"');
		str = str.replace(/(&amp;)/g, "&");
		str = str.replace(/(<\/i>)/g, " ");
		str = str.replace(/(<i>)/g, " ");
		return str;
	} else return "";
};
