(function () {
  var table = document.querySelector('.my-work')
  var rows = table.querySelectorAll('tbody');
  var page = 0;
  var rpp = 10;
  var pagination = document.getElementById('pagination')




  function filterTable(value, columns, classesToHide) {
    [].forEach.call(rows, function(row, index) {
      var hideRow = true
      var cells = row.querySelectorAll('td')

      columns.forEach(function(columnIndex) {
        // value might be an array of values...
        if( Array.isArray(value)) {
          value.forEach(function(item) {
            if ( cells[columnIndex].textContent.toLowerCase().indexOf(item.toLowerCase()) !== -1 ) {
              hideRow = false
            }
          })
        } else {
          if ( cells[columnIndex].textContent.toLowerCase().indexOf(value.toLowerCase()) !== -1 ) {
            hideRow = false
          }
        }

      })

      if (hideRow) {
        row.classList.add('govuk-visually-hidden')
      }
    })
  }

  function resetTable() {
    [].forEach.call(rows, function(row, index) {
      row.classList.remove('govuk-visually-hidden')
    })
  }

  // function hideViewedRows() {
  //   [].forEach.call(rows, function(row, index) {
  //     if (row.classList.contains('viewed')) {
  //       row.classList.add('govuk-visually-hidden')
  //     }
  //   })
  // }

  // Bind filtering functionality to search box
  var searchBox = document.getElementById('search-input')
  var applicationType = document.getElementById('application-type2')
  var applicationProgress = document.getElementById('application-progress2')
  var searchForm = document.getElementById('search')
  var searchButton = document.getElementById('search-button')
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    updateSearch()
  })




  // Change handler on the checkboxes
  applicationProgressCheckboxes = Array.prototype.slice.call(document.querySelectorAll('[name="application-progress2"]'));
  applicationTypeCheckboxes = Array.prototype.slice.call(document.querySelectorAll('[name="application-type2"]'));
  applicationProgressCheckboxes.concat(applicationTypeCheckboxes).forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function(e) {
      updateSearch()
    })
  })

  function getSelectedCheckboxValues(checkboxes) {
    return checkboxes.reduce(function(accumulator, currentCheckbox, currentIndex, array) {
      if(currentCheckbox.checked) {
          return accumulator.concat(currentCheckbox.value)
      } else {
          return accumulator
      }
    }, [])
  }

  function updateSearch() {
    resetTable()

    if(searchBox.value.length >= 1) {
      filterTable(searchBox.value, [1, 2])
    }

    const applicationTypeChoices = getSelectedCheckboxValues(applicationTypeCheckboxes)
    if (applicationTypeChoices.length >=1) {
        filterTable(applicationTypeChoices, [3])}


    const applicationProgressChoices = getSelectedCheckboxValues(applicationProgressCheckboxes)
    if (applicationProgressChoices.length >=1) {
        filterTable(applicationProgressChoices, [3])}



// //     // paginate
//     resultSet = Array.prototype.slice.call(rows).filter(function(row) {
//       return !row.classList.contains('govuk-visually-hidden')
//     })
//
//     // Only paginate if we've got enough
//     if(resultSet.length > rpp) {
//       // Find the rows that are not on the current page, and hide them
//       previousPageRows = resultSet.slice(0, page * rpp)
//       subsequentPageRows = resultSet.slice((page + 1) * rpp)
//
//
//       previousPageRows.concat(subsequentPageRows).forEach(function(row) {
//         row.classList.add('govuk-visually-hidden')
//       })
//     }
//
//     renderPagination(resultSet)

    // if (hideViewed.checked) {
    //     hideViewedRows()
    // }
  }

  // Do an initial search on page load
  updateSearch()

  // Reset link
  document.getElementById('reset')
  reset.addEventListener('click', function(e) {
    e.preventDefault()
    resetTable()

    searchBox.value = ''
    applicationTypeCheckboxes.concat(applicationProgressCheckboxes).forEach(function(checkbox) {
      checkbox.checked = false
    })
    // hideViewed.checked = false
  })

  // // Pagination control
  // function renderPagination(resultSet) {
  //
  //   var totalPages = Math.ceil(resultSet.length / rpp)
  //   pagination.innerHTML = ''
  //   if(totalPages > 1) {
  //     var link
  //     for(i=0; i<totalPages; i++) {
  //         link = document.createElement('a')
  //         link.textContent = i + 1
  //         link.href = '#'
  //         link.style.marginRight = '10px'
  //         link.setAttribute('data-page', i)
  //         link.addEventListener('click', function(e) {
  //           e.preventDefault()
  //           page = parseInt(this.getAttribute('data-page'))
  //           updateSearch()
  //         })
  //         pagination.appendChild(link)
  //     }
  //   }
  // }



  // select all session C//
  $('#select-all').click(function(event) {
      if(this.checked) {
          // Iterate each checkbox
          $('.checkbox-progress2 input[type="checkbox"]').each(function() {
              this.checked = true;
          });
      } else {
          $('.checkbox-progress2 input[type="checkbox"]').each(function() {
              this.checked = false;
          });
        }

      updateSearch();

  });

})()



// var coll = document.getElementsByClassName("filter");
// var i;
//
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// table filter icons //
