function evenOdd() {
    let myName = "tanvir "
    if (myName.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}


const myFullName = evenOdd()
console.log(myFullName);