var person = { 
    firstName: "Saranya", 
    lastName: "Ganesan", 
    age: 15, 
    getFullName: function() { 
            return this.firstName + ' ' + this.lastName 
    }
}; 
//Dot notation
document.write(person.getFullName());
document.write("</br>");
//bracket notation
document.write(person['age']);
