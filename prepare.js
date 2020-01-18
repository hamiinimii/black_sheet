var answer_names = [];
var choice_names = [];
var inner_names = "<option value='--'>--</option>";
var len = 0;
const endpoint = "https://script.google.com/macros/s/AKfycbwF8nFnH99gkt5E6ArAXW0sH9mzWYMaxQLRqdb43kISd5rZ7bsN/exec";

function prepareSelects(){
  let selement = "<select id='name' onchange='changeNames()'><option value=''></option><option value='--'>--</option></select>";
  $("td#selection").each(function(i,elem){
    $(elem).html(selement);
  });
}

function prepareList(arr){
  inner_names = "<option value='--'>--</option>";
  for(let i=0; i<arr.length; i++){
    inner_names = inner_names + "<option value='" + arr[i] + "'>" + arr[i] + "</option>";
  }
  return inner_names;
}

function prepareTable(func){
  getSheet().done(function(out){
      $("div#response").text(out.data);
      let names = $("div#response").text().split(",");
      let filled_row = "";
      for(let i=0; i<names.length/3; i++){
        filled_row = "<tr><td id='blacker'>" + names[3*i] + "</td><td id='whiter'>" + names[3*i+1] + "</td><td id='selection'></td><td id='rightwrong'></td></tr>";
        $("table#ans_table").append(filled_row);
        answer_names.push(names[3*i+2]);
        choice_names = Array.from(answer_names).sort();
        len++;
      }
      
      prepareSelects();
      func();
    }).fail(function(out){
      return "";
    });
}

function getSheet(){
  return $.ajax({
    type: 'GET',
    url: endpoint,
    dataType: 'jsonp',
    data: {
      proc: "get",
      // numcol: numcol
    }
  });
}
