# Using This Boilerplate

The recommended directory structure for a project looks like:

```
example/                     # → Root folder for the project
├── src/                     # → Your project code
    └── example/             # → Example code subfolder
        └── example.js       # → Example code file
├── test/                    # → Your test files
    └── example/             # → Example test subfolder
        └── example.test.js  # → Example test file
├── .eslintrc                # → Rules for ESLint
├── .flowconfig              # → Config file for Flow
├── .gitignore               # → Ignore files from repository
├── package.json             # → Project dependencies
├── package-lock.json        # → Dependency lock file
├── README.md                # → Project readme document
└── CHANGELOG.md             # → Project changelog file
```

Pick a descriptive name for your project and use it instead of the default `example` below.

1. Create a new project directory:

	`mkdir example && cd example`

2. Clone the boilerplate:

	`git clone --depth=1 git@bitbucket.org:komodohq/nodejs-boilerplate.git . && rm -rf ./.git`

3. Install dependencies:

	`npm install`

4. Execute tests to make sure the boilerplate is set up correctly:

	`npm run test::all`
	
5. Update the readme document below with the project details and remove the *Using This Boilerplate* section. 

--

# Project: Project Title

Project explanation. This section should detail the objectives of the project, what technologies have been used, and what a development might need to know in order to work on the project (e.g. `feature X is on hold in branch` - this should **always** be up to date.

**Remember that the README.md file is a living document. It is never finished. Keep the details up to date.**

## What's included

* Node package lock
* ES6
* Istanbul
* Mocha
* Chai 
* MochaAwesome
* Readme 
* Flow
* Eslint 
* Node Inspector
* Standard Version & Changelog 
* Commitizen

## Optional global installs

* Commitizen

## Future additions

* Snyk
* Greenkeeper
* SonarQube
* Sentry.io

## Key Configuration Options

Service                  | Location                       |  Notes
------------------------ | ------------------------------ | ----------
Live Site                | http://www.example.com/        | The Live server is deployed to from the `master` branch. Please do not make any changes to the live service without following Komodo's SOP for this, including peer review, seeking approval for submission and scheduled delivery.
Staging Site             | http://staging.example.com/    | The Staging server hosts pre-live changes ready for testing and review. It is deployed to from the `develop` branch. Please follow Komodo's SOP for this, including peer review, seeking approval for submission and scheduled delivery.
Development Site         | http://example.dev/            | Local environment is located in XXX and tailored for development from the Mac OS platform. Whilst it may be possible to develop from linux based systems, this is currently not tested. 
BitBucket Repo           | project-name                   | BitBucket repository for the project
Development host entry   | 192.168.1.123 development.dev  | Local development host entry if required
Item in LastPass        | Username is xyz                | How to find project items in LastPass

## Initialisation

Instructions for spinning up a local development version of the project.

1. Clone the repo to a new directory
2. Use `npm start` to start the project. 

   > Note: Your start command should automate the entire process of getting the project up and running, from downloading the requirements to provisioning services, to pulling in and installing a database migration, to building the project. Whereever possible a developer should be able to run a single command and have a working version of the site.
      
## Build

Details of the build process. This section shall include;

1. What technology the build chain uses (e.g. gulp, npm, make).
2. What artefacts the build process produces (e.g. /var/www/dist/)
3. What artefacts the build process does note produce (e.g. /wp-content/uploads/)

### Available Build commands

Details of the build commands available, and how they should be used. This section shall include;

1. Watch and sync functions e.g. `gulp watch` that should be used during development
2. Build functions e.g. `gulp build` that creates a final build

## Testing

Details of the testing process. This section shall include details of the test runner, tests available, coverage tools, etc.

### Automated tests (Mocha+Chai, Snyk, SonarQube)

1. How to run the tests, e.g. `npm run test::all`
2. Where test reports are stored, e.g. `/var/www/logs/`

### Functional tests (Lantern, Browserstack, etc)

1. How to run the tests, e.g. `karma run`
2. Where test reports are stored, e.g. `/var/www/logs/`
3. Where the test data is stored, e.g. `/var/www/tests`

### Test coverage (Istanbul)

[Istanbul](https://istanbul.js.org/) instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your tests exercise your codebase. It is executed using the `nyc` command-line-client which works well with most JavaScript testing frameworks, e.g. Mocha. 

It is executed as part of the `npm test` command and you will see its output in the terminal window.

## Quality assurance

### Flow

[Flow](https://flow.org/en/docs/getting-started/) is a static type checker for your JavaScript code. The recommended way to use Flow is through its [comment types](https://flow.org/en/docs/types/comments/) syntax, which makes it possible to use Flow without having to compile your files.

It is executed as part of the `npm run test::all` command and can be integrated directly into your IDE or editor to show output. 

### ESLint

[ESLint](https://eslint.org/) enforces high quality code style in your JavaScript code without executing it. Rules and exceptions can be added in the `.eslintrc` file and a custom rule has been included to allow Flow support. 

It is executed as part of the `npm run test::all` command and can be integrated directly into your IDE or editor to show output. 

### Commitizen

[Commitizen](https://github.com/commitizen/cz-cli) prompts you to fill out any required commit fields at commit time. It will prompt you for required fields and generate [conventional commit messages](https://conventionalcommits.org/). 

It is configured to use the [cz-conventional-changelog](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) adapter. 

To use, add files to Git as you normally would and use `npm run commit` or `git cz` instead of `git commit` when committing.

### Standard version & changelog

[Standard Version](https://github.com/conventional-changelog/standard-version) is an automatic versioning and CHANGELOG generator. As long as your git commit messages are conventional and accurate, you no longer need to specify the semver type and you get CHANGELOG generation for free. It uses Git's squash feature and [conventional commit messages](https://conventionalcommits.org/). If you use Commitizen, it will help you structure your commit messages correctly. 

To generate your changelog for your first release, simply do:

`npm run release -- --first-release`

To create subsequent releases, do:

`npm run release`

### Mocha, Chai & Mochawaesome

[Mocha](https://mochajs.org/) is a NodeJS test framework and [Mochaawesome](https://github.com/adamgruber/mochawesome) is a custom reporter for use with Mocha, which generates HTML reports that can be delivered to third parties, such as customers. 

These reports are automatically generated by the `npm test` command. 

Create tests in the tests directory using the [Chai](http://chaijs.com/api/assert/) syntax. 

## Manual testing and test scripts

Information about the project and what should be tested, including information about different browsers and operating systems. Include information about test user details (or how to find them in LastPass).

Where the user test scripts are stored, e.g. `/var/www/tests/user`.

> User test scripts are documented processes for achieving a specific result in an application. For example, if a user can log in to the site and change their user information then each necessary step should be written out as a script that the tester can follow.
> 
> Testers need to know about *every* feature in a site in order to manually verify that the software works correctly. Do not assume anything is ‘obvious’ just because it’s obvious to you. Ideally a tester should be able to print the user test scripts and go through them one by one, ticking off features as they go, and by the time they’ve ticked off every script we know for certain that the software is complete.

## Deployment

Steps to deploy the website to staging or live. Make sure that this section is _very_ detailed. This part is important.

### Available deployment commands

Any commands that are used to deploy the website should be documented, e.g. `gulp deploy` or `npm deploy`. Deployment commands should deploy to a staging site by default, and to a live site if a parameter is given in order to stop things being deployed by mistake.
Ideally use Codeship. Deploy to staging on a push to your develop branch and deploy to live on a merge to master.

### How to rollback a failed deploy

Any automated deploy process **must** be backed by an automated rollback proceedure that has been tested and is straightfoward to run. Automated deployments should test every stage as they deploy and bail out at the first sign something is wrong, rolling back any changes as they go. Further to that, a developer should be able to rollback a deployment easily e.g. 
`gulp rollback live`

## Backups

Details of the backup process, locations of backups, process for loading a site from a backup.

## Support

Todo.

--
Happy coding.