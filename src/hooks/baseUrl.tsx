const url = process.env.REACT_APP_BASE_URL;

export const baseUrl = (): string | undefined => {
	return url;
};
