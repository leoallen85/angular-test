describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with several todos', function() {
    var todos = [
      {text: "ToDo1", completed: true},
      {text: "ToDo2", completed: false}
      ];

    expect(ctrl.todos).toEqual(todos);
  });
});

