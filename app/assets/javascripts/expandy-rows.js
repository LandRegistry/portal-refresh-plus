(function() {
  var expandyRowTriggers = document.querySelectorAll('.expandy-row-trigger');

  [].forEach.call(expandyRowTriggers, function(item) {
    var currentRow = item.parentNode.parentNode
    var targetRow = currentRow.nextElementSibling

    function openRow() {
      if (!targetRow.classList.contains('hide-row')) {
          targetRow.classList.add('hide-row')
          currentRow.classList.remove('open')
          item.textContent = ''
      } else {
          targetRow.classList.remove('hide-row')
          currentRow.classList.add('open')
          item.textContent = ''
      }
    }

    item.addEventListener('click', function(e) {
      e.preventDefault()
      e.stopPropagation()

      openRow()
    })

    currentRow.addEventListener('click', function() {
      openRow()
    })
  })

})()
