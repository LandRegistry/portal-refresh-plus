(function() {
  var expandyRowTriggers = document.querySelectorAll('.expandy-row-trigger2');

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
    row.querySelector('.expandy-row-trigger2').innerHTML = '<img class="chevronsize" src="/public/images/icon_govuk_chevrondown.svg">'
  }

  function openRow(row) {
    row.nextElementSibling.classList.remove('hide-row')
    row.classList.add('open')
    row.querySelector('.expandy-row-trigger2').innerHTML = '<img class="chevronsize" src="/public/images/icon_govuk_chevronupWhite.svg">'
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

  var allRowsOpen = false
  var expandyAllLink = document.querySelector('.expandyAll')
  expandyAllLink.addEventListener('click', function(e) {
    e.preventDefault();

    [].forEach.call(document.querySelectorAll('.expandy-row'), function(row) {
      if (allRowsOpen) {
          closeRow(row.previousElementSibling)
          expandyAllLink.textContent = 'View details'
      } else {
          openRow(row.previousElementSibling)
          expandyAllLink.textContent = 'Close all'
      }
    })

    allRowsOpen = !allRowsOpen
  })
})()
