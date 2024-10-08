module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addWatchTarget('src/css');
	eleventyConfig.addPassthroughCopy('src/publications');
	eleventyConfig.addPassthroughCopy("src/bundle.js");

	eleventyConfig.addCollection('projects', (collection) => {
		return collection.getFilteredByGlob('src/projects/*.md');
	});

	const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);


	eleventyConfig.addShortcode('year', () => {
		return `${new Date().getFullYear()}`;
	});

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};