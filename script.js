const facts = [
  'A agricultura regenerativa ajuda a capturar carbono no solo e aumenta a resistência das safras.',
  'Reduzir o desperdício de alimentos diminui a pressão sobre recursos naturais e emissões.',
  'O uso de irrigação inteligente pode economizar até 50% da água sem reduzir a produção.',
  'Solo saudável é mais produtivo e protege contra erosão e eventos climáticos extremos.',
  'Promover cadeias curtas de consumo fortalece comunidades locais e diminui emissões de transporte.'
];

const factElement = document.getElementById('climate-fact');
const nextFactButton = document.getElementById('next-fact');

let currentFactIndex = 0;

function showFact(index) {
  factElement.textContent = facts[index];
}

function nextFact() {
  currentFactIndex = (currentFactIndex + 1) % facts.length;
  showFact(currentFactIndex);
}

nextFactButton.addEventListener('click', nextFact);
