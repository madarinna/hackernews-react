export const selectStoryFields = ({
	id,
	by,
	url,
	time,
	title,
	kids,
	score,
	text
} = {}) => ({
	id,
	by,
	url,
	time,
	title,
	kids,
	score,
	text
});

export const selectUserFields = ({
	id,
	created,
	karma,
	about,
	submitted,
} = {}) => ({
	id,
	created,
	karma,
	about,
	submitted,
});

export const selectCommentFields = ({
	by,
	id,
	kids,
	time,
	text,
	parent,
} = {}) => ({
	by,
	id,
	kids,
	time,
	text,
	parent,
});
