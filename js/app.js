document.getElementById('checkInBtn').addEventListener('click', () => {
  document.getElementById('formContainer').style.display = 'block';
  document.getElementById('checkoutContainer').style.display = 'none';
});

// Handle Check-In form submission
document.getElementById('checkInForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const personToVisit = document.getElementById('personToVisit').value;
  const company = document.getElementById('company').value;

  await fetch('http://localhost:3000/checkin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, personToVisit, company })
  });

  alert('Checked in successfully');
  document.getElementById('checkInForm').reset();
});

// Handle Check-Out button
document.getElementById('checkOutBtn').addEventListener('click', async () => {
  document.getElementById('formContainer').style.display = 'none';
  document.getElementById('checkoutContainer').style.display = 'block';
  loadCheckedInVisitors();
});

async function loadCheckedInVisitors() {
  const res = await fetch('http://localhost:3000/checkedin');
  const visitors = await res.json();
  const list = document.getElementById('visitorList');
  list.innerHTML = '';
  visitors.forEach(v => {
    const li = document.createElement('li');
    li.textContent = `${v.name} (Visiting: ${v.personToVisit}, Company: ${v.company})`;
    const btn = document.createElement('button');
    btn.textContent = 'Check-Out';
    btn.onclick = async () => {
      await fetch(`http://localhost:3000/checkout/${v.id}`, { method: 'POST' });
      alert('Checked out successfully');
      loadCheckedInVisitors();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}
