(function () {
  // Número do WhatsApp do ResolvAÍ (formato internacional, só dígitos). Trocar só aqui.
  var NUMERO = '554699032922';
  function zap(texto) { return 'https://wa.me/' + NUMERO + '?text=' + encodeURIComponent(texto); }
  document.querySelectorAll('[data-zap]').forEach(function (a) { a.href = zap('Olá! Quero pedir um orçamento.'); a.target = '_blank'; a.rel = 'noopener'; });
  var ano = document.getElementById('ano'); if (ano) ano.textContent = new Date().getFullYear();

  var form = document.getElementById('form-pedido');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = document.getElementById('f-nome').value.trim(), erro = document.getElementById('f-erro');
    if (nome.length < 2) { erro.classList.remove('hidden'); document.getElementById('f-nome').focus(); return; }
    erro.classList.add('hidden');
    var desc = document.getElementById('f-desc').value.trim();
    var msg = 'Olá! Quero pedir um orçamento.\nServiço: ' + document.getElementById('f-serv').value +
      '\nCidade: ' + document.getElementById('f-cid').value + '\nNome: ' + nome + (desc ? '\nDetalhes: ' + desc : '');
    window.open(zap(msg), '_blank', 'noopener');
  });

  // Avaliações reais: aparecem só se avaliacoes.json tiver itens [{ "nome":"Ana", "cidade":"Francisco Beltrão", "nota":5, "texto":"..." }]
  fetch('avaliacoes.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (l) {
    var sec = document.getElementById('avaliacoes'), ul = document.getElementById('lista-avaliacoes');
    if (!sec || !ul || !Array.isArray(l) || !l.length) return;
    l.slice(0, 6).forEach(function (a) {
      var li = document.createElement('li'), st = document.createElement('div'), bq = document.createElement('blockquote'), ft = document.createElement('footer');
      li.className = 'bg-white rounded-2xl p-6 shadow-card border border-olive/10';
      st.className = 'text-accent'; st.setAttribute('aria-label', 'Nota ' + a.nota + ' de 5'); st.textContent = '★'.repeat(Math.max(1, Math.min(5, a.nota | 0)));
      bq.className = 'mt-3 text-sm leading-relaxed'; bq.textContent = '“' + a.texto + '”';
      ft.className = 'mt-3 text-sm font-semibold text-olive'; ft.textContent = a.nome + (a.cidade ? ', ' + a.cidade : '');
      li.appendChild(st); li.appendChild(bq); li.appendChild(ft); ul.appendChild(li);
    });
    sec.hidden = false;
  }).catch(function () {});
})();
