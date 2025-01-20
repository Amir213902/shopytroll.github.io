const name_firstname = document.getElementById('name_firstname');
const price = document.getElementById('price');
const error_box = document.getElementById('error_box');
const btn_do = document.getElementById('btn_do');

function switchDisplayErrorBox () {
    if(error_box.style.display == 'flex'){
        error_box.style.display = 'none';
    }else{
        error_box.style.display = 'flex';
    }
}

btn_do.addEventListener('click', () =>{
    // switchDisplayErrorBox();
    if(name_firstname.value == '' && price.value == '') {
        switchDisplayErrorBox();
    }else{
        if(error_box.style.display == 'flex') {
            switchDisplayErrorBox();
        }
        // price_update = price.value + " ₽";
        objectShop = {
            "name": name_firstname.value,
            "price": price.value
        }
        objectShopJSON = JSON.stringify(objectShop)
        console.log(objectShop);
        localStorage.setItem('obj', objectShopJSON);
        window.location.href = "https://amir213902.github.io/shopytroll.github.io/nextStep/";
    }
});
