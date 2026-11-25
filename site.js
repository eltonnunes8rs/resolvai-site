(function () {
  // Número do WhatsApp do ResolvAÍ (formato internacional, só dígitos). Trocar só aqui.
  var NUMERO = '554699032922';
  var link = 'https://wa.me/' + NUMERO + '?text=' + encodeURIComponent('Olá! Quero pedir um orçamento.');
  document.querySelectorAll('[data-zap]').forEach(function (a) { a.href = link; a.target = '_blank'; a.rel = 'noopener'; });
  var ano = document.getElementById('ano'); if (ano) ano.textContent = new Date().getFullYear();
  // Avaliações reais: aparecem só se avaliacoes.json tiver itens [{ "nome":"Ana", "cidade":"Francisco Beltrão", "nota":5, "texto":"..." }]
  fetch('avaliacoes.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (l) {
    var sec = document.getElementById('avaliacoes'), ul = document.getElementById('lista-avaliacoes');
    if (!sec || !ul || !Array.isArray(l) || !l.length) return;
    l.slice(0, 6).forEach(function (a) {
      var li = document.createElement('li'), bq = document.createElement('blockquote'), ft = document.createElement('footer'), st = document.createElement('div');
      st.className = 'estrelas'; st.setAttribute('aria-label', 'Nota ' + a.nota + ' de 5'); st.textContent = '★'.repeat(Math.max(1, Math.min(5, a.nota | 0)));
      bq.textContent = '“' + a.texto + '”'; ft.textContent = a.nome + (a.cidade ? ', ' + a.cidade : '');
      li.appendChild(st); li.appendChild(bq); li.appendChild(ft); ul.appendChild(li);
    });
    sec.hidden = false;
  }).catch(function () {});
})();
