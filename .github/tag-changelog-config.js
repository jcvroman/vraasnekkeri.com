module.exports = {
  // NOTE: The order in which the types appear also determines the order of the generated sections in the changelog.
  types: [
    { types: ["feat", "feature"], label: "🎉 New Features" },
    { types: ["fix", "bugfix", "bug"], label: "🐛 Bug Fixes" },
    { types: ["improvements", "enhancement"], label: "🔨 Improvements" },
    { types: ["perf"], label: "🏎️ Performance Improvements" },
    { types: ["doc", "docs"], label: "📚 Documentation Changes" },
    { types: ["test", "tests"], label: "🔍 Tests" },
    { types: ["refactor"], label: "🪚 Refactors" },
    { types: ["style"], label: "💅 Code Style Changes" },
    { types: ["build", "ci", "cd"], label: "🏗️ Build System" },
    { types: ["chore"], label: "🧹 Chores" },
    { types: ["other"], label: "Other Changes" },
  ],

  // excludeTypes: ["other"],

  renderTypeSection: function (label, commits) {
    let text = `\n## ${label}\n`;

    commits.forEach((commit) => {
      text += `- ${commit.subject}\n`;
    });

    return text;
  },

  renderChangelog: function (release, changes) {
    const now = new Date();
    return `# ${release} - ${now.toISOString().substr(0, 10)}\n` + changes + "\n\n";
  },
};
