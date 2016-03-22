function Person(name, age) {
  return {
    name: name,
    age: age,
    about: function() {
      return this.name + " has age " + this.age;
    }
  }
}

function test_Based_Direct_Styles() {

  var node = document.getElementById('result');
  node.style.opacity = 0;
  window.setTimeout(function() {
    node.innerHTML = "<h1>" + new Person("bhaskar", 10).about() + "</h1>";
    node.style.opacity = 1;

  }, 1000)
}

function test() {
  var node = document.getElementById('result');
  node.classList.remove('item-selected');
  window.setTimeout(function() {
    node.innerHTML = "<h1>" + new Person("bhaskar", 10).about() + "</h1>";
    node.classList.add('item-selected');

  }, 1000)
}
console.log(new Person("bhaskar", 10).about());
console.log(new Person("bhaskar1", 10).about())
console.log(Person("user", 10).about())
console.log(Person("user1", 10).about())
