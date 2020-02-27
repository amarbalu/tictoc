https://jsfiddle.net/c3n7v8a6/15/ ---url


/* notice the hole where cell "B1" would be */
var data = [
	["Merged", "", "C", "D"],
  [1,2,3,4],
  [2,3,4,5],
  ["a","b","c","d"],
  ["","","",""],
    ["","","",""],
      ["","","",""]
];

/* merge cells A1:B1 */
/* var merge = { s: {r:0, c:0}, e: {r:0, c:1} }; */
//var merge = XLSX.utils.decode_range("A1:B1"); // this is equivalent

/* generate worksheet */
var ws = XLSX.utils.aoa_to_sheet(data);

/* add merges */
/* if(!ws['!merges']) ws['!merges'] = [];
ws['!merges'].push(merge); */

/* new format */
/* change cell format of range B2:D4 */
var range = { s: {r:0, c:0}, e: {r:6, c:3} };
for(var R = range.s.r; R <= range.e.r; ++R) {
	for(var C = range.s.c; C <= range.e.c; ++C) {
  	var cell = ws[XLSX.utils.encode_cell({r:R,c:C})];
   /*  if(!cell || cell.t != 'n') continue; */ // only format numeric cells
    cell.z = '@';
  }
}

/* generate workbook */
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "sheet1");

/* generate file and download */
const wbout = XLSX.write(wb, { type: "array", bookType: "xlsx" });
saveAs(new Blob([wbout], { type: "application/octet-stream" }), "issue966.xlsx");
