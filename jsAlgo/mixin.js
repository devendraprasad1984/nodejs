//Mixin patterns in JavaScript are often used to augment a prototype method by wrapping it with additional behavior.
//similar to decorators pattern

// Profiling and Mixins are just two simple examples. Here’s a few other useful applications:
// Code coverage – use function wrappers to detect if a function has been invoked during the execution of an application
// Hiding complexity – use function wrappers to provide a simpler API than the underlying code
// Cross-platform code – function wrappers are often used to smooth-out minor incompatibilities between an API on different platforms
// Partial applications – use a function wrapper to fix specific arguments to that function’s invocation
// Safely handling errors – our very first example, using function wrappers to transparently try/catch errors

function User(name) {
    this.name = name;
  }
  
  User.prototype.getName = function () {
    return this.name;
  };
  
  function makeRoyalMixin(klass) {
    var oldGetName = klass.prototype.getName;
    var designation = ordinal((Math.random() % 10) + 1); // '1st', '3rd', '9th', etc
  
    klass.prototype.getName = function () { // the wrapper
      return oldGetName.call(this) + ' the ' + designation;
    };
  }
  
  var user = new User('Janey Smith');
  user.getName(); // => "Janey Smith'
  
  makeRoyalMixin(User);
  user.getName(); // => "Janey Smith the 7th"

