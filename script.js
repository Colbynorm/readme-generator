const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "badge",
            message: "What Badge Is Used?"
        },
        {
            type: "input",
            name: "name",
            message: "What Is The Title Of Your Readme File?"
        },
        {
            type: "input",
            name: "description",
            message: "What Is The Description Of Your Readme File?"
        },
        {
            type: "input",
            name: "table of contents",
            message: "What Is In Your Table of Contents?"
        },
        {
            type: "input",
            name: "installation",
            message: " "
        },
        {
            type: "input",
            name: "Usage",
            message: " "
        },
        {
            type: "input",
            name: "license",
            message: "Were There Any Licenses?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who Contributed To ReadMe File?"
        },
        {
            type: "input",
            name: "tests",
            message: " "
        },
        {
            type: "input",
            name: "email",
            message: "What Is Your GitHub email?",
        },
    ])
}