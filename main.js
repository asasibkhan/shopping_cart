


function handleProductChaneg(product, isIncrease){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseFloat(productInput.value)
    // const productNewCount = productCount - 1;
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount -1;
    }
    productInput.value = productNewCount;
    // const caseTotal = productNewCount * 59;

    let productTotal = 0
    if(product == "phone"){
        productTotal = productNewCount * 1219;
    }
    if(product == "case"){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal();
}


function calculateTotal (){
    

    const phoneCount = getInputValue('product');

    const caseCount = getInputValue ('case');

    const totalPrince = phoneCount * 1219 + caseCount * 59;
    document.getElementById("total-Price").innerText = totalPrince;

}

function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);

    // return productCount

}





// function handleProductChaneg(isIncrease){
//     const caseInput = document.getElementById("case-number-field");
//     const caseCount = parseFloat(caseInput.value)
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount -1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// }





// function handlePhoneChaneg(isIncrease){
//     const phoneInput = document.getElementById("phone-number-field");
//     const phoneCount = parseFloat(phoneInput.value)
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount -1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// }