module.exports = function(first,last){  
    this.first = first;  
    this.last = last;  
    this.myName = function(){  
        return `${this.first} ${this.last}`;  
    }  
}  