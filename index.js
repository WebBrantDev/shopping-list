function addNewItem(newItem) {
  $(".shopping-list").append(`<li>
  <span class="shopping-item">${newItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);
}

function handleNewItem() {
  $("#js-shopping-list-form").submit(function (event) {
    event.preventDefault();
    const newItem = $("#shopping-list-entry").val();
    $("#shopping-list-entry").val("");
    addNewItem(newItem);
  });
}

function handleItemCheckClicked() {
  $(".shopping-list").on("click", ".shopping-item-toggle", (e) => {
    $(e.currentTarget)
      .closest("li")
      .children()
      .filter("span")
      .toggleClass("shopping-item__checked");
  });
}

function handleItemDeleted() {
  $(".shopping-list").on("click", ".shopping-item-delete", (e) => {
    $(e.currentTarget).closest("li").remove();
  });
}

function handler() {
  handleNewItem();
  handleItemCheckClicked();
  handleItemDeleted();
}

$(handler);
