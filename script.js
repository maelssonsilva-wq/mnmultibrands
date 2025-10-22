
function openWhatsApp(item) {
  const phone = "5582982317656";
  const text = encodeURIComponent(item ? ('Olá! Tenho interesse no produto: ' + item) : 'Olá! Tenho interesse nos seus produtos.');
  window.open('https://wa.me/' + phone + '?text=' + text, '_blank');
}

function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value || '';
  const message = document.getElementById('message').value || '';
  const phone = "5582982317656";
  const full = encodeURIComponent('Olá, meu nome: ' + name + '. ' + message);
  window.open('https://wa.me/' + phone + '?text=' + full, '_blank');
}
