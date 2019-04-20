function handleChecked() {
    $(".shopping-item-toggle").click(function(event) {
        let checkedItem = $(this).closest('li').find('span.shopping-item');
        $(checkedItem).toggleClass('shopping-item__checked');
    })
}
$(handleChecked);