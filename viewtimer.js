// Viewtimer
// Original script by キシカミコウイチ @dribble13（改変済み）
// https://qiita.com/dribble13/items/3eb39726aba33add6c0a

// $(document).ready(function() {
function viewTimer(func1, func2) {
    $("input.view_timer").each(function(index, target) {
        var startDate = $(this).attr("data-start-date");
        var endDate = $(this).attr("data-end-date");
        var nowDate = new Date();
        if (startDate) {
            startDate = new Date(startDate);
        }
        else {
            startDate = nowDate;
        }
        if (endDate) {
            endDate = new Date(endDate);
        }

        if (startDate <= nowDate && (!endDate || nowDate <= endDate)) {
            func1();
        }else{
            func2();
        }
    });
}
