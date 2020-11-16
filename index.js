const STORE = [
  { id: cuid(), name: "apples", checked: false },
  { id: cuid(), name: "oranges", checked: false },
  { id: cuid(), name: "milk", checked: true },
  { id: cuid(), name: "bread", checked: false },
];

function generateItemElement(item, index, temp) {
  return `
    <li data-item-id="${item.id}">
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
  STORE.push({ id: cuid(), name: itemName, checked: false });
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

function getItemIdFromElement(item) {
  return $(item).closest("li").data("item-id");
}

function toggleChecked(id) {
  const item = STORE.find((item) => item.id === id);
  item.checked = !item.checked;
}

function handleItemCheckClicked() {
  $(".shopping-list").on("click", ".js-item-toggle", (event) => {
    const id = getItemIdFromElement(event.currentTarget);
    toggleChecked(id);
    renderShoppingList();
  });
}

function deleteItem(itemId) {
  const itemInd = STORE.findIndex((item) => item.id === itemId);
  STORE.splice(itemInd, 1);
}

function handleItemDeleted() {
  $(".shopping-list").on("click", ".js-item-delete", (e) => {
    const itemId = getItemIdFromElement(e.currentTarget);
    deleteItem(itemId);
    renderShoppingList();
  });
}

function handler() {
  renderShoppingList();
  handleNewItem();
  handleItemCheckClicked();
  handleItemDeleted();
}

$(handler);
