function prepareTable(){
  let i = 2;
  while(true) {
    black_name = getRowFromSheet(i, 2);
    console.log(black_name);
    break;
  }
}

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
