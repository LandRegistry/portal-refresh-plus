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
  var applicationGroup = document.getElementById('application-group')
  var applicationType = document.getElementById('application-type2')
  var applicationProgress = document.getElementById('application-progress2')
  var searchForm = document.getElementById('search')
  var searchButton = document.getElementById('search-button')
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    updateSearch()
  })




  // Change handler on the checkboxes
  applicationGroupCheckboxes = Array.prototype.slice.call(document.querySelectorAll('[name="application-group"]'));
  applicationProgressCheckboxes = Array.prototype.slice.call(document.querySelectorAll('[name="application-progress2"]'));
  applicationTypeCheckboxes = Array.prototype.slice.call(document.querySelectorAll('[name="application-type2"]'));
  applicationProgressCheckboxes.concat(applicationTypeCheckboxes, applicationGroupCheckboxes).forEach(function(checkbox, index) {
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
      filterTable(searchBox.value, [0,1,2,3,4,5,6,7])
    }

    const applicationGroupChoices = getSelectedCheckboxValues(applicationGroupCheckboxes)
    if (applicationGroupChoices.length >=1) {
        filterTable(applicationGroupChoices, [3])}

    const applicationTypeChoices = getSelectedCheckboxValues(applicationTypeCheckboxes)
    if (applicationTypeChoices.length >=1) {
        filterTable(applicationTypeChoices, [3])}

    const applicationProgressChoices = getSelectedCheckboxValues(applicationProgressCheckboxes)
    if (applicationProgressChoices.length >=1) {
        filterTable(applicationProgressChoices, [3])}



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

