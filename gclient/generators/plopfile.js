module.exports = function (plop) {
    plop.setPlopfilePath('./generators/plopfile.js')
    const gPath = plop.getPlopfilePath('generators/plopfile.js')
    console.log('gPath',gPath)
    // create your generators here
    plop.setGenerator('component', {
        description: 'generate front-end feature',
        // array of inquirer prompts
        prompts: [{
            type: 'list',
            name: 'component', 
            message: 'container or component?',
            choices: [
                'container',
                'component'
            ]
        },{
            type: 'input',
            name: 'name',
            message: 'name of the container/component?'
        }], 
        // array of actions
        actions: function (data){
            let actions = [];
            if(data.component == 'container'){
                actions.push({
                    type: 'add',
                    path: '../src/containers/{{name}}/index.js',
                    templateFile: 'plop-templates/container.js.hbs'
                })
                actions.push({
                    type: 'add',
                    path: '../src/containers/{{name}}/styles.js',
                    templateFile: 'plop-templates/styles.js.hbs'
                })
            }else if(data.component == 'component'){
                actions.push({
                    type: 'add',
                    path: '../src/components/{{name}}/index.js',
                    templateFile: 'plop-templates/component.js.hbs'
                })
                actions.push({
                    type: 'add',
                    path: '../src/components/{{name}}/styles.js',
                    templateFile: 'plop-templates/styles.js.hbs'
                })
            }
            console.log('actions',actions)
            console.log('data',data)
            return actions;
        } 
    });
};