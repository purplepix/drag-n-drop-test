window.onload = () => {
  const parentCardsContainer = document.querySelector('#card-container');

  let indexCard;
  parentCardsContainer.addEventListener('dragstart', e => {
    indexCard = e.target;
    //para funcionar no firefox;
    e.dataTransfer.setData('text/html', indexCard);
  });

  parentCardsContainer.addEventListener('dragenter', function(e) {
    if (e.target.classList.contains('empty')) e.target.classList.add('hover');
  }); 

  parentCardsContainer.addEventListener('dragleave', function(e) {
    if (e.target.classList.contains('empty')) e.target.classList.remove('hover');
  })

  parentCardsContainer.addEventListener('dragover', function(e) {
    e.preventDefault();
    // e.dataTransfer.dropEffect = 'move';
  })

  parentCardsContainer.addEventListener('drop', function(e) {
    e.target.appendChild(indexCard);
    e.target.classList.remove('hover');
  })
}