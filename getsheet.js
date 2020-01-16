
const endpoint = "https://script.google.com/macros/s/AKfycbzVBMP7cflynnJMlFSisutBKkMPjCxGabXapHMNefYTqHTo_YA/exec";

function getRowFromSheet(row, numcol){

  getAjax(row, numcol).done(function(out){
      $("div#response").text(out.message);
      // let names = $("div#response").text().split(",");
      let names = $("div#response").text();
      return names;
    }).fail(function(out){
      return "";
    });
}

function getAjax(row, numcol){
  return $.ajax({
    type: 'GET',
    url: endpoint,
    dataType: 'jsonp',
    data: {
      row: row,
      numcol: numcol
    }
  });
}
