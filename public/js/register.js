const { registerForm } = document.forms;
const userStatus = document.querySelector('.userStatus');

registerForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(registerForm);
  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    if (result.msg === 'User successfully created!') {
      setTimeout(() => {
        window.location = '/login';
      }, 1000);
      userStatus.style.visibility = 'visible';
      userStatus.innerText = result.msg;
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
    } else {
      userStatus.style.visibility = 'visible';
      userStatus.innerText = result.msg;
      setTimeout(() => {
        userStatus.style.visibility = 'hidden';
      }, 2000);
      document.querySelectorAll('input').forEach((el) => (el.value = ''));
    }
  } catch (error) {
    console.log('error: -------->', error);
  }
});
