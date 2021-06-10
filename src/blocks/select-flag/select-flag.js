import intlTelInput from 'intl-tel-input';

const inputTel = document.querySelectorAll(".phone-country");

inputTel.forEach((item)=>{
    intlTelInput(item, {
        // any initialisation options go here
    });
})

function checkTelNum() {
    let intlTelInputWrapper = document.querySelectorAll('.phone-country__wrapper')
    let intlTelList = document.querySelectorAll('.iti__country-list')
    let intlTelLi = 'iti__country';

    let div = document.createElement('div');
    div.classList.add('iti__code')

    intlTelInputWrapper.forEach((item)=>{
        let selectLoad =  item.querySelector('.iti__selected-flag')
        let num = selectLoad.getAttribute('title')
        let codeLoad = parseInt(num.match(/\d+/))
        div.innerText = '+'+codeLoad
        selectLoad.append(div)
        item.querySelector('.phone-country').value = '+'+codeLoad
    })

    intlTelList.forEach((item)=>{
        item.addEventListener('click', function (e) {
            let target = e.target;
            let containerSelect = target.closest('.' + intlTelLi).parentNode.parentNode

            if(target.closest('.' + intlTelLi).classList.contains(intlTelLi)) {
                let currentCountryCode = target.closest('.' + intlTelLi).querySelector('.iti__dial-code').innerText
                div.innerText = ''
                div.innerText = currentCountryCode
                containerSelect.querySelector('.iti__selected-flag').append(div)
            }
        })
    })

}

checkTelNum()
