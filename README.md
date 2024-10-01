
# API Automation Framework with WDIO v9 & Supertest

This repository contains an API automation framework built with WebdriverIO (WDIO) v9 and Supertest, using TypeScript. The framework follows the Cucumber BDD approach and includes structured folders for tests, configuration, and reporting.

## Project Structure

- **`src/`**: Contains Cucumber step definitions and feature files for test scenarios.
- **`wdio.conf.ts`**: The main configuration file for WDIO. It includes all runner settings, specs, and environment configurations.
- **`support/`**: Contains the API objects, API calls, and Cucumber hooks necessary for the framework.
- **`reporting/`**: 
  - **`wdio-cucumberjs-json-reporter`**: Generates JSON reports for each test scenario.
  - **`multiple-cucumber-html-reporter`**: Compiles all JSON reports into an HTML report.
- **`.result/`**: Stores both JSON and HTML reports.

## Setup and Usage

1. **Clone the repository**:
   ```bash or bat in Win
   git clone <your-repo-url>
   cd <your-repo-directory>
   ```

2. **Install dependencies**:
   ```bash bat in Win
   npm i
   ```

3. **Run the tests**:
   ```bash bat in Win
   npm run wdio
   ```
   This will execute the feature files specified in the `specs[]` section of `wdio.conf.ts`.

## Reporting

- **JSON Reports**: Generated by the `wdio-cucumberjs-json-reporter`, located in the `.result` folder.
- **HTML Reports**: Generated by the `multiple-cucumber-html-reporter` by combining all JSON reports.
  
  **Note**: After cloning the repo, if you want to view the reports, download the entire `.result` folder and open the HTML report locally. Ensure the JSON files are also present, as they are required for generating the HTML reports.

## Jenkins Pipeline

The framework includes a Jenkins pipeline for continuous integration:
- **Checkout**: The pipeline checks out the main branch of the repository.
- **Build**: Executes the build using the `Jenkinsfile` in the repository, which runs the tests.
- **Reporting**: After the build, the pipeline publishes the HTML report in Jenkins.
## IMPORTANT- YOU SHOULD HAVE A NODEJS tool added in tool config of Jenkins to run the pipeline. Name the nodejs tool as 'Nodejs' given in the jenkinsfile.
## Notes

- Ensure the `.result` folder from the previous run is fully downloaded before opening the HTML report in a browser.
- The framework uses TypeScript for type safety and better code organization.
