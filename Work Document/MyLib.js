
/*
** On se fait une ptite lib du menu.
*/

var readline = require('readline'),
    menu;

// focntion enjoliveur de menu
MenuEnhancer = function (title,[...z]){
    // Variable d'accumulation
    let text;
    // Clear screen
    process.stdout.write('\033c');
    // Entête
    text = "\n_- MENU -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n\n";
    if (title != "") {text += "- " + title +" -\n\n"};
    // Boucle de remplissage des options
    for (var i = 0; i <= z.length - 1; i++) {
        text += `${i+1}. ${z[i]}\n`;
    };
    // Footer
    return text += "\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n";
};
LogMenuEnhancer = function (t,z){console.log(MenuEnhancer(t,z));}

Questionary = function (quest,deaf,[...z]){
    // Vérification en cas de double menu
    if(menu) menu.close();
    // Créer une instance d'interface readline
    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // la question
    menu.question(quest, function(input) {

        if (input-1 <= z.length -1 && input-1 >= 0) {
            if (!Array.isArray(z[input-1])) {z[input-1]();}
            else{
                for (var i = 0; i < z[input-1].length - 1; i++) {
                z[input-1][i]();
                console.log("\n"+i + " : " + z[input-1][i] + "\n");
                };
            };
        }else deaf();
    });
}

// Export des Module
module.exports = {
    ME : LogMenuEnhancer,
    QE : Questionary
};

/*  ___  _____  _  _  ____  ____
   / __)(  _  )( \( )(_  _)( ___)
  ( (__  )(_)(  )  (   )(   )__)
   \___)(_____)(_)\_) (__) (____)
    ___  _____  ____  ____  _  _  ____  ____  _  _
   / __)(  _  )(  _ \( ___)( \( )(_  _)(_  _)( \( )
  ( (__  )(_)(  )   / )__)  )  (   )(   _)(_  )  (
   \___)(_____)(_)\_)(____)(_)\_) (__) (____)(_)\_)
*/

