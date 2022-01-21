(function() {
  const table = document.querySelector('.my-work')
  const headers = table.querySelectorAll('th')
  const rows = Array.prototype.slice.call(table.querySelectorAll('tbody'), 0)

  function sortTable(column, order) {
    const newRows = Array.prototype.slice.call(rows, 0)

    // Do the actual sort
    newRows.sort(function(rowA, rowB) {
      const columnA = rowA.querySelector('.govuk-table__row:first-child .govuk-table__cell:nth-child(' + (column + 1) + ')')
      const columnB = rowB.querySelector('.govuk-table__row:first-child .govuk-table__cell:nth-child(' + (column + 1) + ')')

      const sortableDataA = columnA.getAttribute('data-sortable')
      const sortableDataB = columnB.getAttribute('data-sortable')

      const sortByA = sortableDataA ? sortableDataA : columnA.textContent
      const sortByB = sortableDataB ? sortableDataB : columnB.textContent

      if (sortByA > sortByB) return 1;
      if (sortByA < sortByB) return -1;
      return 0;
    });

    if (order === 'desc') {
      newRows.reverse()
    }

    // Remove old rows
    [].forEach.call(rows, function(row) {
      row.parentNode.removeChild(row)
    })

    // Reinsert the new ones in the right order
    newRows.forEach(function(row) {
      table.appendChild(row)
    })
  }

  // Bind the click events to each of the headers
  [].forEach.call(headers, function(header, index) {

    // But only the ones we've marked as sortable
    if (header.classList.contains('sortable')) {
      header.addEventListener('click', function(e) {

        // Toggle between asc / desc sort
        if (header.classList.contains('sortable--asc')) {
          sortTable(index, 'desc')
          header.classList.add('sortable--desc')
          header.classList.remove('sortable--asc')
        } else {
          sortTable(index, 'asc')
          header.classList.add('sortable--asc')
          header.classList.remove('sortable--desc')
        }

        // Un-mark the other headers as sorted (i.e. only a single column can be sorted at a time)
        [].forEach.call(headers, function(item) {
          if (item !== header) {
            item.classList.remove('sortable--asc')
            item.classList.remove('sortable--desc')
          }
        })
      })
    }
  })

})()
