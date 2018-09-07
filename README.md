# JS Exercise

## You will need:
- [NodeJS](https://nodejs.org/) installed on your computer.

## Getting Started
- Create a private repository under your name. (make sure to add `gilanyym` as a collaborator)
- Clone the Repository to your computer and push it to your own.
using `Git Bash` on Windows or `Terminal` on macOS or Linux.
```
git clone --bare git@github.uc.edu:IT3049-18FS/JS-Exercise.git
```
```
cd JS-Exercise.git
```
```
git push --mirror <ssh link to your repo>
```
```
cd .. && rm -rf JS-Exercise.git
```
- clone your repo to your computer
```
git clone <ssh link to your repo>
```
- Navigate to your cloned repo (i.e. if your repo was named `JS-Exercise`, run the following command
```
cd JS-Exercise
```
- run the following command to install the node.js dependencies
```
npm install
```
- start the project
```
npm start
```

You can then view the tests in your browser at
[http://localhost:4444](http://localhost:4444).

When you visit that page, all of the tests should be failing; your job is to
get the tests to pass. To do this, you'll need to refer to the tests in the
files in the `tests/app` directory, and edit the files in the `app/` directory.
Once you update a test, you can reload the test page in the browser to see
whether it worked.


# License

This was adapted from Rebecca Murphey's [repository](https://github.com/rmurphey/js-assessmenton) on Github.

Copyright &copy; 2012-2016 Rebecca Murphey with many thanks to several
[contributors](https://github.com/rmurphey/js-assessment/graphs/contributors).

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
