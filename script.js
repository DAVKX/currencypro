let rates={};

async function loadRates(){
 const r=await fetch('https://open.er-api.com/v6/latest/USD');
 const d=await r.json();
 rates=d.rates;
 document.getElementById('rates').innerHTML=
 `USD/BRL: ${rates.BRL}<br>USD/EUR: ${rates.EUR}`;
}
loadRates();

function convert(){
 let amount=Number(document.getElementById('amount').value);
 let from=document.getElementById('from').value;
 let to=document.getElementById('to').value;

 let usd = from==='USD'?amount:amount/rates[from];
 let result = to==='USD'?usd:usd*rates[to];

 document.getElementById('result').innerText=result.toFixed(2)+' '+to;
}

function chat(){
 const q=document.getElementById('chatInput').value.toLowerCase();
 let r='Mercado está estável.';
 if(q.includes('dolar')) r='O dólar é a moeda mais negociada do mundo.';
 if(q.includes('euro')) r='O euro é uma das principais moedas globais.';
 document.getElementById('chatResponse').innerText=r;
}

new Chart(document.getElementById('chart'),{
type:'line',
data:{
labels:['Seg','Ter','Qua','Qui','Sex'],
datasets:[{label:'USD',data:[5.4,5.5,5.45,5.48,5.52]}]
}
});
