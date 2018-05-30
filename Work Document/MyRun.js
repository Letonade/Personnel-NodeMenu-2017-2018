
/*
** On se fait une ptite lib de lancement programme.
*/

firefox = function(){
    let exec = require('child_process').exec;
    exec('C:\\Users\\CONTE\\Documents\\FirefoxPortable64\\App\\Firefox64\\firefox.exe').unref();
};

explorer = function(where){
    let exec = require('child_process').exec;
    exec('C:\\Windows\\explorer.exe '+where).unref();
}

const explorerToLaunch = () => {explorer("C:\\Users\\CONTE\\Documents\\NodeJStest\\Work Document")};

module.exports = {
    firefox : firefox,
    explorerToLaunch : explorerToLaunch
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

