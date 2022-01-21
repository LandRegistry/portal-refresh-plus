(function() {
  var expandyRowTriggers = document.querySelectorAll('.expandy-row-trigger4');

  function toggleRow(row) {
    if (!row.nextElementSibling.classList.contains('hide-row')) {
        closeRow(row)
    } else {
        openRow(row)
    }
  }

  function closeRow(row) {
    row.nextElementSibling.classList.add('hide-row')
    row.classList.remove('open')
    row.querySelector('.expandy-row-trigger4').textContent = 'o'
  }

  function openRow(row) {
    row.nextElementSibling.classList.remove('hide-row')
    row.classList.add('open')
    row.querySelector('.expandy-row-trigger4').textContent = 'c'
  }

  [].forEach.call(expandyRowTriggers, function(item) {
    var currentRow = item.parentNode.parentNode

    item.addEventListener('click', function(e) {
      e.preventDefault()
      e.stopPropagation()

      toggleRow(currentRow)
    })

    currentRow.addEventListener('click', function() {
      toggleRow(item.parentNode.parentNode)
    })
  })
})
