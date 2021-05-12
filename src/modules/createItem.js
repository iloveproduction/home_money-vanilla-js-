import { brands } from "../data/brands";

export function createItem(index, arr, place, option) {
  let item = document.createElement("div");
  let brand = "shopping-basket-2";
  let color = "";
  let date = arr[index].date;

  if (arr[index].price < 0) {
    color = "minus";
  } else {
    color = "plus";
  }

  for (let br in brands) {
    if (br == arr[index].title.toLowerCase()) {
      brand = brands[br];
    }
  }

  item.innerHTML = `
        <div class='transactions-item__logo'>
            <img src="https://img.icons8.com/color/30/000000/${brand}.png"/>
        </div>
        <div class='transactions-item__title'>
            <div class='item__name'>
                ${arr[index].title.toUpperCase()}
            </div>
            <div class="item__date">
                        ${date.day}.${date.month}.${date.year}
            </div>
        </div> 
        <div class='transactions-item__price ${color}'>
            ${arr[index].price}$
        </div>
        ${
          option
            ? "<div class='trash'><img src='https://img.icons8.com/color/25/000000/trash--v1.png'/></div>"
            : ""
        }
        `;
  place.insertAdjacentElement("beforeend", item);
  item.classList.add("transactions-item");
}
