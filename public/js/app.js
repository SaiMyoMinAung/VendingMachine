var userMoney = 1000;

var lists = [{
        name: "Coke",
        price: 100,
        no_of_items: 10
    },
    {
        name: "Pepsi",
        price: 200,
        no_of_items: 20
    },
    {
        name: "Mile Tea",
        price: 250,
        no_of_items: 25
    },
    {
        name: "Orange Juice",
        price: 300,
        no_of_items: 30
    },
    {
        name: "Coffee",
        price: 400,
        no_of_items: 2
    }
];

var vendingButton = document.getElementById("vendingButton");

vendingButton.addEventListener("click", function () {
    var vendingSeletbox = document.getElementById("vendingSelectbox");
    var vendingSelectboxValue = vendingSeletbox.value;

    if (vendingSelectboxValue === '') {
        alert('please select item')
        return
    }

    var vendingItems = document.getElementById("vendingItems");
    var vendingItemsValue = vendingItems.value

    if (vendingItemsValue === "" || vendingItemsValue == 0) {
        alert('please put no of item or must be greater than 0')
        return
    }

    for (let a = 0; a < lists.length; a++) {

        if (lists[a].name.toUpperCase() == vendingSelectboxValue.toUpperCase()) {
            console.log('list', lists[a])
            if (vendingItemsValue > lists[a].no_of_items) {
                alert('you cannot buy this number of amount.')
                return
            }

            if ((lists[a].price * vendingItemsValue) > userMoney) {
                alert('your balance is low.');
                return
            }

            userMoney = userMoney - (lists[a].price * vendingItemsValue);
            document.getElementById("money").innerHTML = userMoney

            lists[a].no_of_items = lists[a].no_of_items - vendingItemsValue
            renderTable();
        }

        // 
    }
});

renderTable();

function renderTable() {
    var tableRow = "";
    for (let x = 0; x < lists.length; x++) {
        tableRow += generateTableRow(lists[x]);
    }
    document.getElementById("vendingTable").innerHTML = tableRow
}


document.getElementById("money").innerHTML = userMoney

function generateTableRow(obj) {
    return `<tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  ${obj.name}
                </th>
                <td class="px-6 py-4">${obj.price}</td>
                <td class="px-6 py-4">${obj.no_of_items}</td>
              </tr>`;
}