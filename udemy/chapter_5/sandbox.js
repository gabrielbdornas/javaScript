// object literals
let user = {
    name: 'Gabriel',
    age: 35,
    email: 'gabrielbdornas@gmail.com'
};

console.log(user);
console.log(user.name);
console.log(user.age);
user.age = 40;
console.log(user.age);
console.log(user['name']);
console.log(typeof user)
    
//adding methods
let userMethod = {
    name: 'Gabriel',
    age: 35,
    email: 'gabrielbdornas@gmail.com',
    blogs: ['blog teste1', 'blog teste 2'],
    login: function(){ 
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out')
    },
    printBlogs(){ // this wont work with arrow function - we need to use regular function - easy way to writte regular function
        console.log('this user has written theses blogs:');
        this.blogs.forEach(blog => { console.log(blog) });
    }

};

userMethod.login();
userMethod.logout();
userMethod.printBlogs();

//this keyword
//this is context keyword - for exemple console.log(this) - refer to a globol object ow window

//object in arrays

//maths objects
console.log(Math);
console.log(Math.PI);

//primitive types


