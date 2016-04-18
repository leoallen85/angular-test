describe('Todos tracker', function() {
  it('has several ToDos', function() {
    browser.get('/');
    var todos = $$('#todos p');
    expect(todos.first().getText()).toEqual('ToDo1: completed');
    expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });

  it('can add a ToDo', function() {
    browser.get('/');
    $('#new-todo-name').sendKeys("NewTodo");
    $('#add-todo').click();

    var todo = $$('#todos p').last().getText();
    expect(todo).toEqual('NewTodo: not completed');
  });

  it('can remove a ToDo', function() {
    browser.get('/');
    var todos = $$('#todos p');
    var initialCount = todos.count();

    $('#remove-todo').click();

    // This has a magic number, how could this magic number be avoided?
    // The solution is actually surprisingly complex so we've kept in the magic
    // number for simplicity's sake
    expect(todos.count()).toEqual(1);
  });
});

