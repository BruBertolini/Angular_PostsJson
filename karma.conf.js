// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

var path = require("path");

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular/cli"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular/cli/plugins/karma"),
      require("karma-sourcemap-loader")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ["progress", "coverage-istanbul"],
    coverageIstanbulReporter: {
      type: "html",
      reports: ["html", "lcovonly", "text-summary"],
      dir: path.join(__dirname, "coverage"),
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      "report-config": {
        html: {
          subdir: "html"
        }
      }
    },
    angularCli: {
      environment: "dev"
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};
