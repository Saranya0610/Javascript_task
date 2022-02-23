var arr=[10, 20, 30, 40, 50];
function move(arr, from_index, to_index) {
    while (from_index < 0) {
        from_index += arr.length;
    }
    while (to_index < 0) {
        to_index += arr.length;
    }
    if (to_index >= arr.length) {
        var x = to_index - arr.length;
        while ((x--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(to_index, 0, arr.splice(from_index, 1)[0]);  
   return arr;
}
document.write(move(arr, 3, 0));
document.write("</br>");
document.write(move(arr, -3, -1));
