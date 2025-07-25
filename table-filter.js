function tableFilter() {
  let input, filter, table, tbody, tr, i, td, txtValue;
  input = document.getElementById("table-filter-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("filtered-table");
  tbody = table.getElementsByTagName("tbody")[0];
  tr = tbody.getElementsByTagName("tr");

  // Loop through all table rows, then through all row cells,
  // and hide the rows where none of the cells match the filter
  //
  // has "header" designation, a class on th elements
  for (i = 0; i < tr.length; i++) {
    if (!tr[i].classList.contains("header")) {
      tr[i].style.display = "none";
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j]) {
          txtValue = td[j].textContent || td[j].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          }
        }
      }
    }
  }

  // without "header" designation, works fine

  // for (i = 0; i < tr.length; i++) {
  //   tr[i].style.display = "none";
  //   td = tr[i].getElementsByTagName("td");
  //   for (j = 0; j < td.length; j++) {
  //     if (td[j]) {
  //       txtValue = td[j].textContent || td[j].innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       }
  //     }
  //   }
  // }
}

function clearFilterInput() {
  let input = document.getElementById("table-filter-input");
  input.value = "";
  tableFilter(); // force the table to reset
}
