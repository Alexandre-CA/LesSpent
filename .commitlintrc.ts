const starts_prefix = [
  ":sparkles: feat:",
  ":recycle: refactor",
  ":broom: cleanup",
  ":package: build:",
  ":test_tube: test:",
  ":books: docs:",
  ":tada: init:",
  ":bug: fix:",
];

const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   * Referenced packages must be installed
   */
  // parserPreset: "conventional-changelog-atom",
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  // formatter: "@commitlint/format"
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    "subject-empty": [0, "never"],
    "type-empty": [0, "never"],
    "start-prefix-icon": [2, "always"],
    "contain-subject": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "start-prefix-icon": ({ header }) => {
          const validate = starts_prefix.some((start) => header.startsWith(start));

          if (validate) {
            return [true];
          }
          return [
            false,
            `The commit message must start with one of the predefined icons: [${starts_prefix.join(", ")}] `,
          ];
        },
        "contain-subject": ({ header }) => {
          const prefix = starts_prefix.find((x) => {
            return header.startsWith(x);
          });

          const validate = header.replace(prefix, "").trim().length > 0;

          if (validate) {
            return [true];
          }
          return [false, `subject may not be empty`];
        },
      },
    },
  ],
  /*
   * Array of functions that return true if commitlint should ignore the given message.
   * Given array is merged with predefined functions, which consist of matchers like:
   *
   * - 'Merge pull request', 'Merge X into Y' or 'Merge branch X'
   * - 'Revert X'
   * - 'v1.2.3' (ie semver matcher)
   * - 'Automatic merge X' or 'Auto-merged X into Y'
   *
   * To see full list, check https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
   * To disable those ignores and run rules always, set `defaultIgnores: false` as shown below.
   */
  // ignores: [(commit) => commit === ""],
  /*
   * Whether commitlint uses the default ignore rules, see the description above.
   */
  // defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  // helpUrl:"https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
  /*
   * Custom prompt configs
   */
  // prompt: {
  //   messages: {},
  //   questions: {
  //     type: {
  //       description: "please input type:",
  //     },
  //   },
  // },
};

export default Configuration;
