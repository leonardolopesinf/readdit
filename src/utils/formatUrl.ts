const formatUrl = (url: string) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
};

export default formatUrl;
