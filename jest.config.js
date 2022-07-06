// jest.config.js
export default {
  transform: {
    "^.+.ts$": "ts-jest",
    "^.+.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!phosphor-svelte)"],
};
