function updateCommission() {
  let amt = document.getElementById('presetAmounts').value;
  document.getElementById('commission').innerText = (amt * 0.15).toFixed(2);
}

function deposit() {
  alert('Deposit clicked. API integration goes here.');
}

function withdraw() {
  alert('Withdraw clicked. API integration goes here.');
}

function logout() {
  alert('Logging out');
}
