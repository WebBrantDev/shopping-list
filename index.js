const STORE = [
  { name: "apples", checked: false },
  { name: "oranges", checked: false },
  { name: "milk", checked: true },
  { name: "bread", checked: false },
];

function generateItemElement(item, index, temp) {
  return `
  <li>
    <span class="shopping-item js-shopping-item ${
      item.checked ? "shopping-item__checked" : ""
    }">${item.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}

function generateShoppingItemsString(shoppingList) {
  const items = shoppingList.map((item, index) =>
    generateItemElement(item, index)
  );

  return items.join("");
}

function renderShoppingList() {
  const shoppingListItemsString = generateShoppingItemsString(STORE);
  $(".shopping-list").html(shoppingListItemsString);
}

function addNewItem(itemName) {
  STORE.push({ name: itemName, checked: false });
}

function handleNewItem() {
  $("#js-shopping-list-form").submit(function (event) {
    event.preventDefault();
    const newItem = $("#shopping-list-entry").val();
    $("#shopping-list-entry").val("");
    addNewItem(newItem);
    renderShoppingList();
  });
}

function handleItemCheckClicked() {
  $(".shopping-list").on("click", ".js-item-toggle", (event) => {
    console.log("ran");
  });
}

function handler() {
  renderShoppingList();
  handleNewItem();
  handleItemCheckClicked();
}

$(handler);
