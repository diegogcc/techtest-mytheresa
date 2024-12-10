# MyTheresa
## _By Diego Campo_


## Test
Consider the following situation, where you have a new website launched, and you are asked to automate a suite of test cases. The suite should run on any browser and should run against different environments. For example, the test cases should run against in the following environments:

- Local: [http://localhost:4000/fashionhub/](http://localhost:4000/fashionhub/)
- Staging (dummy environment): [https://staging-env/fashionhub/](https://staging-env/fashionhub/)
- Production: [https://staging-env/fashionhub/](https://pocketaces2.github.io/fashionhub/)

You can run the application locally as a container from this Docker image: [Fashionhub Demo app](https://hub.docker.com/r/pocketaces2/fashionhub-demo-app)

The expectations are: 
- The program must run and return result
- Implement the solutions using Playwright or Cypress
- The code must be well-structured to support future maintenance, evolutions and scalability. Try to use the best practices that you have learned from your experiences approaching production like quality is more important than implementation speed and feature completeness.
- A build procedure whenever applicable.
- Any environment option needed to run the test could be passed from the command line or from a config file (the system should verify which one is the preferred option, and select th eother one if the primary one is not present)

## Solution

### Prerequisites and installation
- nodejs: Download and install Node JS from
 ```sh
https://nodejs.org/en/download/
```
- Clone the repo
- Install npm packages
```sh
npm install
```
- Run command to download required browsers:
```sh
npx playwright install
```
- Before running execute below code to set the environment [local/staging/prod]:
```js
export npm_config_ENV="prod"
```

### Run
By default the environment is set to run on `npm_config_ENV=local`. You can execute all tests by running: 

```sh
npm run test
```

In order to run the tests using all browsers and on an specific environment you can execute: 

```sh
npm run test --npm_config_ENV="prod"
```

If you want to run the tests using an specific browser you can add the `--project` flag and set it to the one you want (Supported browsers are: Chromium, Chrome, Firefox, and Webkit):

```sh
export npm_config_ENV="prod"
npx playwright test tests/ --project=Chrome
```

## Output

Once you run all tests you can see the results in the console like: 


![Overall Report Screenshot][overall-report-screenshot]
 
Also, you can find more details about the failed tests in the `/test-results/` folder: 

![Detailed Failed Tests Report Screenshot][detailed-report-screenshot]

Finally, as you can see in the previous image, the `prReport.csv` file can be found. Which is the output of the Test Case 04. 


<!-- MARKDOWN LINKS & IMAGES -->
[overall-report-screenshot]: ReadmeImages/MytheresaReport.png
[detailed-report-screenshot]: ReadmeImages/MytheresaFailedTests.png
