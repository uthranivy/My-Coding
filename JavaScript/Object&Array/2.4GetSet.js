class CreateUser {
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }

    get fullName() {
        return `${this.fname} ${this.lname}`;
    }

    set fullName(value){
        const [fname,lname] = value.split(' ');
        this.fname = fname;
        this.lname = lname;
    }
}

const user1 = new CreateUser('Arun', 'Kumar');
const user2 = new CreateUser('Ashwin', 'Kumar');


console.log(user1.fullName);

user1.fullName = 'Ashwin Kumar'; 
console.log(user1.fullName);


