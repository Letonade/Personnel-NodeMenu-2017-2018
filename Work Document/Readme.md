Cette app js est une de mes idées, j'ai pensé que présenté mes éxamens avec de vrai menu pourrai être sympa, puis j'ai joué avec pour lui donner d'autre utiliter.

l'application principale est App.js

PROBLEME ACTUEL :
- Bloquant :
    Dans cette version, un choix possédant plusieurs action éffectue la première puis ce bloque.
- Non-Bloquant :
    Il est souhaité que le lancement que lorsqu'une action s'effectue le focus reste sur l'invite de commande.

/*  ___  _____  _  _  ____  ____
   / __)(  _  )( \( )(_  _)( ___)
  ( (__  )(_)(  )  (   )(   )__)
   \___)(_____)(_)\_) (__) (____)
    ___  _____  ____  ____  _  _  ____  ____  _  _
   / __)(  _  )(  _ \( ___)( \( )(_  _)(_  _)( \( )
  ( (__  )(_)(  )   / )__)  )  (   )(   _)(_  )  (
   \___)(_____)(_)\_)(____)(_)\_) (__) (____)(_)\_)
*/

Le code des menu originel ne me plaisait pas et n'est pas de moi. j'en ai changer la forme et le code mais le principe de base reste. Je l'est pris à cet addresse 'https://stackoverflow.com/questions/32458427/multiple-menus-with-node-js'
le code semble être de Ben Besuijen et est le suivant :

/*
** Le code
*/

// Requires readline and create global variable menu
var readline = require('readline'),
    menu;

// Main
function showMain() {
    // Clear screen
    process.stdout.write('\033c');

    // Log the menu
    console.log(
        'Main menu\n\n' +
        '1 = Go to sub\n' +
        '2 = Can be another sub... For now same as option 1\n' +
        '3 = Exit'
        );

    // Check if there is already a menu active. If true, close it.
    if(menu) menu.close();

    //Creates a readline Interface instance
    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Ask question
    menu.question('Where to go? ', function(input) {
        switch(input) {
            case '1': showSub(); break;
            case '2': showSub(); break;
            case '3': process.exit(); break;
            default: showMain() /* show menu again if input does not match */;
        }
    });
}

// Sub
function showSub() {
    // Clear screen
    process.stdout.write('\033c');

    // Log the menu
    console.log(
        'Sub menu\n\n' +
        '1 = Another sub blabla...\n' +
        '2 = Go back to main'
        );

    // Check if there is already a menu active. If true, close it.
    if(menu) menu.close();

    // Creates a readline Interface instance
    menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Ask question
    menu.question('Where to go? ', function(input) {
        switch(input) {
            case '1': console.log('Another sub blabla...'); break;
            case '2': showMain(); break;
            default: showSub() /* show menu again if input does not match */;
        }
    });
}

showMain();

/*(merci à lui)
** Fin du code
*/
