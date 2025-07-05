const report = require("multiple-cucumber-html-reporter");
const dayjs = require("dayjs");

const now = dayjs(); // current time
const startTime = now.subtract(0, "minute");

report.generate({
  jsonDir: "./cypress/cucumber-json",
  reportPath: "./cucumber-html-reports/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "CYPRESS-CUCUMBER-PROJECT" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      {
        label: "Execution Start Time",
        value: startTime.format("MMM D YYYY, hh:mm A"),
      },
      {
        label: "Execution End Time",
        value: now.format("MMM D YYYY, hh:mm A"),
      },
    ],
  },
});