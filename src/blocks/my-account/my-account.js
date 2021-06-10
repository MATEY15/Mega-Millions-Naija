function myAccount() {
    // let myAccount = document.querySelector('.my-account__user')
    // let myAccountDrop = document.querySelector('.my-account__dropdown')
    //
    // myAccount.addEventListener('click', function (e) {
    //     e.preventDefault()
    //     if(myAccountDrop.classList.contains('my-account__dropdown--active')) {
    //         myAccountDrop.classList.remove('my-account__dropdown--active')
    //     } else {
    //         myAccountDrop.classList.add('my-account__dropdown--active')
    //     }
    //
    // })

    $('.my-account__user').click(function(e){
        e.preventDefault();
        $('.my-account__dropdown').toggleClass('my-account__dropdown--active');
    });
    $(document).mouseup(function (e) {
        let container = $(".my-account");
        if (container.has(e.target).length === 0){
            $('.my-account__dropdown').removeClass('my-account__dropdown--active');
        }
    });
}
myAccount()