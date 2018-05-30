
/*
** On se fait un petit menu en Js.
*/
var MyLib = require('./MyLib');
var MyRun = require('./MyRun');

// Main menu
showMain = function () {
    // Création du tableau de texte
    let txt =[];
    txt.push("Go to explorer's");
    txt.push("Start Firefox");
    txt.push("Exit");
    // Affichage du menu
    MyLib.ME("",txt);
    MyLib.QE("You'r choice ?", showMain, [
        showExp,
        [MyRun.firefox, showMain],
        process.exit
        ]);
}

// Sous menu explorers
showExp = function () {
    // Création du tableau de texte
    let txt =[];
    txt.push("To dev");
    txt.push("Go back to Main");
    txt.push("Exit");
    // Affichage du menu
    MyLib.ME("Explorers",txt);
    MyLib.QE("You'r choice ?", showExp, [
        [MyRun.explorerToLaunch,showExp],
        showMain,
        process.exit
        ]);
}

showMain();
//MyRun.explorer('./');

/*  ___  _____  _  _  ____  ____
   / __)(  _  )( \( )(_  _)( ___)
  ( (__  )(_)(  )  (   )(   )__)
   \___)(_____)(_)\_) (__) (____)
    ___  _____  ____  ____  _  _  ____  ____  _  _
   / __)(  _  )(  _ \( ___)( \( )(_  _)(_  _)( \( )
  ( (__  )(_)(  )   / )__)  )  (   )(   _)(_  )  (
   \___)(_____)(_)\_)(____)(_)\_) (__) (____)(_)\_)
*/

