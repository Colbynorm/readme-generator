const inquirer = require("inquirer");
const axios = require("axios");
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
            message: "What Command Should Be Run?"
        },
        {
            type: "input",
            name: "Usage",
            message: "What Does The User Need To Know About Using This Repo?"
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
            message: "What Command Should Be Rub To Test?"
        },
        {
            type: "input",
            name: "username",
            message: "What Is Your GitHub username?",
        },
    ]);
}

function generateMD(answers, data) {
    return `Badge: ${answers.badge} \n
Name: ${answers.name}\n
Project Description: ${answers.description}
Table of Contents: ${answers.tableOfContents}\n
Installation: ${answers.installation}\n
Usage: ${answers.usage}\n
License: ${answers.license}\n
Contributing: ${answers.contributing}\n
Tests: ${answers.tests}\n
Username: ${answers.username}\n
![Profile Pic](${data.avatar_url})\n
Email: ${data.email} \n`
}

async function init() {
    try {
        const answers = await promptUser();
        //console.log(answers)

        let res = await axios.get(`https://api.github.com/users/${answers.username}`)
        //let res = await axios.get("https://api.github.com/users/" + username)

        const md = generateMD(answers, res.data);
        //console.log(md)
        await writeFileAsync("README.md", md);
    } catch(err){
        throw err;
    }
}

init();
