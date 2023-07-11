
/* 
1.chair----3cft
2.table----5cft
3.bed------10cft
*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const chairWood = 5;
    const tableWood = 10;
    const bedWood = 50;
    const chairTotalWood = chairWood * chairQuantity;
    const tableTotalWood = tableWood * tableQuantity;
    const bedTotalWood = bedWood *  bedQuantity;
    const totalWood = chairTotalWood +tableTotalWood + bedTotalWood;
    return totalWood;
}

const totalWood = woodCalculator(3, 5, 10)
console.log("total wood requiered: ",totalWood);