module.exports = {
  // NOTE: The order in which the types appear also determines the order of the generated sections in the changelog.
  types: [
    { types: ["feat", "feature"], label: "๐ New Features" },
    { types: ["fix", "bugfix", "bug"], label: "๐ Bug Fixes" },
    { types: ["improvements", "enhancement"], label: "๐จ Improvements" },
    { types: ["perf"], label: "๐๏ธ Performance Improvements" },
    { types: ["doc", "docs"], label: "๐ Documentation Changes" },
    { types: ["test", "tests"], label: "๐ Tests" },
    { types: ["refactor"], label: "๐ช Refactors" },
    { types: ["style"], label: "๐ Code Style Changes" },
    { types: ["build", "ci", "cd"], label: "๐๏ธ Build System" },
    { types: ["chore"], label: "๐งน Chores" },
    { types: ["other"], label: "Other Changes" },
  ],

  excludeTypes: ["test", "tests", "refactor", "style", "build", "ci", "cd", "chore", "other"],

  renderTypeSection: function (label, commits) {
    let text = `\n## ${label}\n`;

    commits.forEach((commit) => {
      text += `- ${commit.subject}\n`;
    });

    return text;
  },

  renderChangelog: function (release, changes) {
    const now = new Date();
    if (!changes) { return "" }
    return `# ${release} - ${now.toISOString().substr(0, 10)}\n` + changes + "\n\n";
  },
};
