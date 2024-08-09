module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addWatchTarget('src/css');

	eleventyConfig.addCollection('projects', (collection) => {
		return collection.getFilteredByGlob('src/projects/*.md');
	});
    eleventyConfig.addCollection('plans', (collection) => {
		return collection.getFilteredByGlob('src/plan/*.md');
	});

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