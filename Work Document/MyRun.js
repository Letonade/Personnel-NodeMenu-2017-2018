
/*
** On se fait une ptite lib de lancement programme.
*/

// Démarrage de firefox.
firefox = function(){
    let exec = require('child_process').exec;
    exec('C:\\Users\\CONTE\\Documents\\FirefoxPortable64\\App\\Firefox64\\firefox.exe').unref();
};

// Appel de l'explorer où l'ont peut indiquer le chemin.
explorer = function(where){
    let exec = require('child_process').exec;
    exec('C:\\Windows\\explorer.exe '+where).unref();
}

// Liste des chemins pour l'explorer.
const expToLaunch = () => {explorer("C:\\Users\\CONTE\\Documents\\NodeJStest\\Work Document")};

// Exportations
module.exports = {
    firefox : firefox,
    expToLaunch : expToLaunch,
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

