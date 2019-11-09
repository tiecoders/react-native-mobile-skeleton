import fs from 'fs-extra'
import readline from 'readline'
import replace from 'replace-in-file'
import chalk from 'chalk'

const typesWhitelist = [ 'atom', 'molecule', 'organism', 'modals', 'pages' ]

// Log a message in console
const log = (type, title, details = null) => {
    const successColor = '#7bc700'
    const errorColor = '#f9431a'

    console.log(
        `\n${
            chalk.hex(type === 'success' ? successColor : errorColor)(title)
        }${details ? `\n${details}` : ''
        }\n`
    )
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const component = {
    name: null,
    type: null
}

const componentName = () => new Promise(resolve => {
    rl.question('Nom du composant: ', answer => {
        component.name = answer.charAt(0).toUpperCase() + answer.slice(1)
        resolve()
    })
}).catch(error => { })

const componentType = () => new Promise((resolve, reject) => {
    rl.question(`Type de composant (${typesWhitelist.join(', ')}) [${typesWhitelist[0]}]: `, answer => {
        if (typesWhitelist.includes(answer)) {
            component.type = `${answer}s`
            resolve()
        } else {
            component.type = 'atoms'
            reject()
        }
    })
}).catch(error => { })

const renameComponent = (source, component) => {
    const { name } = component

    fs.renameSync(`${source}/Component.js`, `${source}/${name}.js`)
    fs.renameSync(`${source}/styles/Component.style.js`, `${source}/styles/${name}.style.js`)

    replace.sync({
        files: `${source}/${name}.js`,
        from: /_ComponentName/g,
        to: name
    })

    replace.sync({
        files: `${source}/index.js`,
        from: /_ComponentName/g,
        to: `${name}`
    })

    replace.sync({
        files: `${source}/styles/index.js`,
        from: /_ComponentName/g,
        to: name
    })
}

const main = async() => {
    await componentName()

    if (component.name.length === 0) {
        log('error', 'Le composant doit avoir un nom valide.')
        await componentName()
    }

    await componentType()

    const source = 'templates/component'
    const destination = `src/components/${component.type}/${component.name}`

    if (!fs.existsSync(destination)) {
        fs.copy(source, destination, err => {
            if (err) {
                log('error', 'Impossible de créer le dossier du composant. Merci de rééssayer.' + err)
            } else {
                renameComponent(destination, component)
                log('success', 'Composant créé avec succès !', `Votre composant ${component.name} est disponible ici : "${destination}"`)
            }
        })
    } else {
        log('error', `Le composant ${component.name} existe déjà.`)
    }

    rl.close()
}

main()