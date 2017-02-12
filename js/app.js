// angular.module('app', []).controller("MainController", function () {
//     this.num1=0;
//     this.num2=0;
// });

angular.module('app', []).controller("MainController", function () {
    this.tasks = [
      {
        name: "Dinner with Wife! at Hotel!",
        done: true
      },
      {
        name: "Buy a New House In Thane!",
        done: false
      },
      {
        name: "Buy a new MoterCycle of Honda!",
        done: false
      }
    ];
});


angular.module('app-form', []).controller("FormController", function () {
    this.tasks = [
      {
        name: "Dinner with Wife! at Hotel!",
        done: false
      },
      {
        name: "Buy a New House In Thane!",
        done: false
      },
      {
        name: "Buy a new MoterCycle of Honda!",
        done: false
      }
    ];

    this.add = function (newtask) {
      console.log("Adding task :" + newtask.name);
      var task = {};
      task.name = newtask.name;
      task.done = false;
      this.tasks.push (task);
      newtask.name = "";
    };

    this.delete = function (task) {
      console.log("deleting the task: " + task.name);
      for (var i = 0; i < this.tasks.length; i++) {
        this.tasks.splice(i,1);
        break;
      }
    };
    this.deleteAll = function () {
      console.log("deleting the All task: ");
      this.tasks.length = 0;
    };
});
