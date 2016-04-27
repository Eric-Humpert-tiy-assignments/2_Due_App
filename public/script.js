'use strict';
if (this.toDoApp === undefined) this.toDoApp = {};

(function(context) {

    function checkIfChecked(task) {
      console.log(task);
        if (task.target.checked === true) {
            console.log("It's checked!");
        }
    }

    function start() {
        var taskCollector = document.querySelector('#task-adder');
        var taskList = document.querySelector('.toDoList');
        var checkBoxList = document.querySelectorAll('.to-do-check');
        //Call your code here
        console.log('starting!', context);

        for (var i = 0; i < checkBoxList.length; i++) {
            var checkBox = checkBoxList[i];
            checkBox.addEventListener('change', checkIfChecked);
        }
    }

    window.toDoApp.start = start;

})(window.toDoApp);
