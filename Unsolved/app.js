const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Warcraft10621eff!',
    database: 'top_songsDB'
})
connection.connect(err => {
    if (err) throw err
    console.log(`Connect on thread ${connection.threadId}`)
    initialPrompts()
})

function initialPrompts() {
    inquirer.prompt([
        {
            name: 'action',
            message: 'What do you want to do?',
            type: 'list',
            choices: ['Artist Search',
                    'Multi Search',
                'Range Search',
                'Song Search',
                'Exit']
        }
    ]).then(answer => {
        switch (answer.action) {
            case 'Artist Search':
                artistSearch()
                break
            case 'Multi Search':
                multiSearch()
                break
            case 'Range Search':
                rangeSearch()
                break
            case 'Song Search':
                songSearch()
                break
            default:
                connection.end()
                process.exit()
        }
    })
}

//artist search
function artistSearch() {
    console.log('Searching artist....')
    initialPrompts()
}
// query which returns all artists who appear within the top 5000 more than once
function multiSearch() {
    console.log("Multi search...")
    initialPrompts()
}
//returns all data contained within a specific rane
function rangeSearch() {
    console.log("reach search")
    initialPrompts()
}
function songSearch() {
    console.log('Searching songs....')
    initialPrompts()
}
