'use strict';
if (this.AppName === undefined) this.AppName = {};

(function(context) {

  function start() {

    //Call your code here
    console.log('starting!', context);

  }

  window.AppName.start = start;

})(window.AppName);
