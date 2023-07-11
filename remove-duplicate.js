/* problem-solving-1 */
/* var names = ['abul', "babul", "habul", "tanvir", "alam", "sihab", "mamun", 'abul', "babul",]

function removeDuplicate(names) {
    const unique =[];
    for (let i = 0; i < names.length; i++) {
        const name = names[i]
        // console.log(name);
        if(unique.includes(names)=== false){
            unique.push(name)
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names)
console.log(uniqueNames); */

/* problem-solving-2 */

var ages = ["25", "56", "56", "85", "78", "80", "74", "80", ""]

function replaceDuplicate(ages){
    const unique = []
    for(let i=0; i<ages.length; i++){
        const age = ages[i]
        // console.log(ages)
        if(unique.includes(ages)=== false){
            unique.push(age);
        }
    }
    return unique;
}
const uniqueAges =replaceDuplicate(ages);
console.log(uniqueAges);