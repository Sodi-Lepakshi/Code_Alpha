document.getElementById('calculate-btn').addEventListener('click', calculateAge);

function calculateAge() {
  const day = parseInt(document.getElementById('dob-day').value);
  const month = parseInt(document.getElementById('dob-month').value);
  const year = parseInt(document.getElementById('dob-year').value);
  
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementById('result').innerText = 'Please enter a valid date.';
    return;
  }
  
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById('result').innerText = `You are ${age} years old.`;
}
