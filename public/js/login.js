const { logForm } = document.forms;
const userStatus = document.querySelector('.userStatus');

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(logForm);
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    if (result.userName) {
      setTimeout(() => {
        window.location = '/';
      }, 1000);
      userStatus.style.visibility = 'visible';
      userStatus.innerText = result.msg;
    } else {
      userStatus.style.visibility = 'visible';
      userStatus.innerText = result.msg;
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
    }
  } catch (error) {
    console.log('error: -------->', error);
  }
});
