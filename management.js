// answer_names = ["光るるる","つや","靴磨きハリー","塩那やきとり","川上草魚","赤井さしみ","間宇","翡翠","碓氷さつし","木太郎","わにわにぱにっく","水飴ウナギ","二心アマメ","佐武原みゆき"];
inner_names = "<option value='--'>--</option>";

window.onload = function(){
  prepareTable(changeNames);
  // prepareSelects();
  // changeNames();
}

function changeNames(){
    selected = [];
    if($("input#1kai").prop("checked")){
        $("select").each(function(i,elem){
            selected.push($(elem).val());
        });
    }

  // 選択肢をセット
  $("select#name").each(function(i,elem){
      let choice = "--";
      if($(elem).val()!="--"){
          choice=$(elem).val()
      }
      let unselected = new Array();
      getDiff(choice_names, selected, item => unselected.push(item));
      unselected.push(choice);
      inner = prepareList(unselected);
      $(elem).html(inner);
      if(choice=="--"){
          $(elem).val("--");
      }else{
          $(elem).val(choice);
      }
  });

}

function getDiff(x, y, ope){
    x.forEach(item =>{
        if(!y.includes(item)){
            ope(item);
        }
    })
}

function checkAnswers(){
    viewTimer(
        function(){
            $("p#answerchecker").text("");
            let point=0;
            $("select#name").each(function(i,elem){
                if($(elem).val()==answer_names[i]){
                    $("td#rightwrong").eq(i).html("<b>○ </b>"+answer_names[i]);
                    point++;
                }else{
                    $("td#rightwrong").eq(i).html("<b>× </b>"+answer_names[i]);
                }
            });
            $("p#score").html(point+"/14点 です！ （正答率 "+ Math.round(point*100/14) +"%）");
        }, function(){
            $("p#answerchecker").text("※答え合わせは20:30からですよ！");
        }
    );
}
