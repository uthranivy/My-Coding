
// class inside method and outside function

class Company {
    constructor(){

    }
    getInfo(){
        console.log("Welcome Our Company");
    }
    // getInfo(location){
    //     console.log("Welcome Our Company");
    // }
}
//Method Overloading is called Polymorphism



class Employee extends Company {
    constructor(name){
        super();  // for call other class
        this.name =name;
        console.log("Constructor")
    }

    skills(){       //method
        console.log("JS Developer " + this.name)
    }
    rolls(){       //method
        console.log("Web Developer")
    }
}
 
// Object create

const e1 = new Employee("Uthra");
e1.skills();
e1.getInfo();

const e2 = new Employee("Siva");
e2.skills();
e2.getInfo();

