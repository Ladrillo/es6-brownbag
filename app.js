{
    // 1 let const AND BLOCK SCOPE
    
    // block scope in conditionals, whiles and for loops
    // no re-declaring of lets and consts
    // no re-assignment of consts, but mutating arrays and objects possible
    
    for (var i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log(i);
}


{
    // 2 DESTRUCTURING
    
    // objects
    
    let {name, age} = { a: 1, name: 'chase', age: 34, z: 22 };
    console.log(name, age);

    let {title: job} = { a: 1, title: 'dev' };
    console.log(job);

    let {a: {friends}} = { a: { friends: ['chase', 'blake'] } };
    console.log(friends);

    let {a: {people: myFriends}} = { a: { people: ['luke', 'kellie'] } };
    console.log(myFriends);
    
    
    // arrays
    
    let [x, y] = [666, 777];
    console.log(x, y);

    [x, y] = [y, x];
    console.log(x, y);
    
    
    // functions
    
    let foo = function () { return [10, 20, 30]; };
    let [, m, n] = foo();
    console.log(m, n);
    
    
    // function parameters
    
    let bar = function ({a: x, b: y}) {
        console.log(x, y);
    };
    bar({ a: 'gabriel', b: 'ryan' });
}


{
    // 3 DEFAULT PARAMETERS
    
    let foo = function (a = 'peter', b = 'adam') {
        console.log(a, b);
    };

    foo();
    foo(undefined);
    foo('john');
    foo('kyle', 'miles');
}


{
    // 4 REST PARAMETERS
    
    let foo = function (...stuff) {
        console.log(stuff);
    };

    foo('my boss', 'my friends');

    let bar = function (a = 'default', ...stuff) {
        console.log(a, stuff);
    };

    bar('google', 3, false);
    bar();
}


{
    // 5 SPREAD OPERATOR
    
    // concatenating arrays
    let a = [2, 3, 4];
    console.log([1, ...a, 5, 6]);

    // spreading arguments
    let fun = function (a, b, c) {
        console.log(a + b + c);
    };

    let arr = [1, 2, 3];
    fun(...arr);
}


{
    // 6 TEMPLATES
    
    let [a, b] = ['jeremy', 'cahlan'];
    console.log(`these are ${a} and ${b}!`);
}


{
    // 7 TAG FUNCTIONS    
    
    let [a, b] = [13, 17];

    let myTagFunction = function (words, ...values) {
        // does stuff
    };

    let result = myTagFunction `I have ${a} brothers and ${b} sisters`;
}


{
    // 8 CLASSES 1
    
    // the old way
    let Car = function (odometer = 0) {
        this.odometer = odometer;
    };

    Car.prototype.drive = function (distance) {
        this.odometer += distance;
    };

    let camry = new Car();
    camry.drive(20);
    console.log(camry);
}


{
    // 9 CLASSES 2
    
    // the new way
    class Car {
        constructor(odometer = 0) {
            this.odometer = odometer;
        }
        drive(distance) {
            this.odometer += distance;
        }
    }

    let sentra = new Car();
    sentra.drive(200000);
    console.log(sentra);
}


{
    // 10 CLASSES 3
    
    // inheritance
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hi! My name is ${this.name}!`);
        }
    }

    class Employee extends Person {
        constructor(name, age, title) {
            super(name, age);
            this.title = title;
        }
        work() {
            console.log(`I am a ${this.title} hard at work!`);
        }
    }

    let bob = new Employee('bob', 23, 'mechanic');
    console.log(bob.greet());
    console.log(bob.work());
}


{
    // 11 ARROW FUNCTIONS 1
    
    // syntax
    let fun = () => 'hi there';
    console.log(fun());

    let f = thing => `${thing} rulez!`;
    console.log(f('DevMountain'));

    let foo = (a, b, c) => a + b + c;
    console.log(foo(333, 222, 666));

    let baz = () => {
        let a = 'Spain';
        return a;
    };
    console.log(baz());

    let bar = arr => arr.map(e => e * e);
    console.log(bar([1, 2, 3, 4, 5, 6]));
}


{
    // 12 ARROW FUNCTIONS AND THE this KEYWORD
    
    // the problem:
    class Guy {
        constructor(name) {
            this.name = name;
        }
        greet() {
            setTimeout(function () {
                // alert(`Hi there! My name is ${this.name}`);
            }, 500);
        }
    }

    let guy = new Guy('John');
    guy.greet();
    
    // the solution:
    class Gal {
        constructor(name) {
            this.name = name;
        }
        greet() {
            setTimeout(() => {
                // alert(`Hi there! My name is ${this.name}`);
            }, 500);
        }
    }

    let gal = new Gal('Anna');
    gal.greet();
}


{
    // 13 ITERATORS 1
    
    let it = ['a', 'b', 'c', 'd'][Symbol.iterator]();
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);

    let anotherIt = 'Provo'[Symbol.iterator]();
    console.log(anotherIt.next().value);
    console.log(anotherIt.next().value);
    console.log(anotherIt.next().value);
    console.log(anotherIt.next().value);
    console.log(anotherIt.next().value);
    console.log(anotherIt.next().value);
    
    // generators
    
    // let makeIt = function* (obj) {
    //     for (let i in obj) {
    //         yield obj[i];
    //     }
    // };

    // let anIt = makeIt({ a: 10, b: 20, c: 30 });
    // console.log(anIt.next().value);
    // console.log(anIt.next().value);
    // console.log(anIt.next().value);
    // console.log(anIt.next().value);
}


{
    // 14 ITERATORS 2
    
    let obj = [7, 14, 21];
    for (let v of obj) {
        console.log(v);
    }

    let str = 'javascript';
    for (let ch of str) {
        console.log(ch);
    }
}


{    
    // 15 MAPS
    
    let m = new Map();
    let [x, y] = [{ id: 1 }, { id: 2 }];

    m.set(x, 'foo');
    m.set(y, 'bar');

    // m.delete(y);
    // m.clear();

    let valueX = m.get(x);
    console.log(valueX);

    let valueY = m.get(y);
    console.log(valueY);

    for (let i of m) {
        console.log(i);
    }

    let keys = m.keys();
    console.log(keys.next());
    console.log(keys.next());
    console.log(keys.next());
}


{
    // 16 SETS
    
    let s = new Set();

    s.add(1);
    s.add(1);
    s.add(2);
    s.add(13);

    s.delete(13);
    // s.clear();
    
    console.log(s.size);
    console.log(s.has(1));
}


{
    // 17 ARRAY COMPREHENSIONS
    
    // let myArr = [for (e of [1, 2, 3, 4]) if (e % 2 === 0) e * e];
    // console.log(myArr);
    
    // let firsts = ['Peter', 'John', 'Nick'];
    // let middles = ['Miles', 'James', 'John'];
    // let names = [for (f of firsts) for (m of middles) if (f !== m) f + ' ' + m + ' Smith'];
    
    // for (let n of names) {
    //     console.log(n);
    // }
}
