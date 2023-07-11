const phones = [
    { name: 'samsung', camera: 12, storage: "32gb", price: 36000, color: 'silver' },
    { name: 'apple', camera: 20, storage: "32gb", price: 85000, color: 'silver' },
    { name: 'oneplus', camera: 24, storage: "32gb", price: 66000, color: 'silver' },
    { name: 'vivo', camera:50, storage: "32gb", price: 26000, color: 'silver' },
    { name: 'walton', camera: 48, storage: "32gb", price: 16000, color: 'silver' },
    { name: 'symphony', camera: 89, storage: "32gb", price: 12000, color: 'silver' },
    { name: 'htc', camera: 108, storage: "32gb", price: 6000, color: 'silver' },
    { name: 'xiamoi', camera: 75, storage: "32gb", price: 35000, color: 'silver' },
    { name: 'nokia', camera: 45, storage: "32gb", price: 44000, color: 'silver' }
]

function cheapestPhone(phones){
    let cheapest = phones[0]
    for(let i=0; i < phones.length; i++){
        const phone = phones[i]
        // console.log(phones)
        if(phone.camera > cheapest.camera ){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);