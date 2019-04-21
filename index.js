function handleChecked() {
    $(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
        let checkedItem = $(this).closest('li').find('span.shopping-item');
        $(checkedItem).toggleClass('shopping-item__checked');
    })
};

$(handleChecked);


function addListItem() {
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        let newLi = `<span class="shopping-item">` + newItem + `</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>`;
        $('.shopping-list').append('<li>' + newLi + '</li>');
        $('input').val('');
    });
};

$(addListItem);
