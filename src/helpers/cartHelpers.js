export function addItemToArray (array, item) {
    let newArray = array;
    newArray.push(item);
    return newArray;
}

export function removeItemFromArray (array, item) {
    let newArray = array;
    const itemPos = newArray.indexOf(item);
    newArray.splice(itemPos, 1);
    return newArray;
}

export function changeItemQuantity (array, item, quantity) {
    let newArray = array;
    const oldQuantity = calcQuantity(array, item);
    const newQuantity = quantity;

    function calcQuantity(array, item) {
        let quantity = 0;

        array.forEach(function(element) {
            if (element.id === item.id) {
                quantity += 1
            }
        }, this);

        return quantity;
    };

    if (newQuantity > oldQuantity) {
        let count = newQuantity - oldQuantity

        while (count > 0) {
            newArray.push(item);
            count--;
        }
    } else if (oldQuantity > newQuantity) {
        let count = oldQuantity - newQuantity;

        while (count > 0) {
            const itemPosition = newArray.indexOf(item);
            newArray.splice(itemPosition, 1);
            count--;
        }
    }

    return newArray;
}