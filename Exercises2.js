/*JavaScript Exercises 2

Exercise 1
Now let's add content to an HTML document instead of writing to the console.
Write a function called addBands(myBandList) that will list your favorite bands.
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
and an empty unordered list with ID band-list.
Your function should use the JavaScript DOM to create list items and add them
to the unordered list, with one list item for each string in array myBandList.

For example, if I call:

  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);

The function will add three list items to the unordered list.
*/
function addBands(array) {
    for (var t = 0; t < array.length; t++) {
        var newNode = document.createElement("LI");
        var band = document.createTextNode(array[t]);
        newNode.appendChild(band);
        document.getElementById("band-list").appendChild(newNode);
    }
}
var myBands = ["Red Hot Chilli Peppers", "System od a Down", "Pearl Jam", "Coldplay", "Audioslave"];
addBands(myBands);


/*
Exercise 2
Write a function called addMultTable(rows, cols) that will create a multiplication
table like this. Start with an empty HTML page that only contains a level 1 heading.
Your function should use the JavaScript DOM to insert an HTML table after the heading.

For example, if I call:

	addMultTable(4, 8);

It will create an HTML table with 4 rows
and 8 columns, and append it after the level 1 heading.
*/
function addMultTable(rows,cols) {
    var table = document.createElement("TABLE")[0].createElement("TBODY");
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var p = 0; p < cols; p++) {
            row.insertCell(p);
        }
    }
    //document.getElementsByTagName("body").appendChild(table)
}
addMultTable(4,5);
