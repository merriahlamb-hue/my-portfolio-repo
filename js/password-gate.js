(function () {
  var STORAGE_KEY = 'caseStudyUnlocked';
  var PASSWORD = 'open_sesame';

  var gate = document.getElementById('password-gate');
  var content = document.getElementById('gate-content');
  var form = document.getElementById('password-gate-form');
  var input = document.getElementById('password-gate-input');
  var error = document.getElementById('password-gate-error');

  function unlock() {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    gate.hidden = true;
    content.hidden = false;
  }

  if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
    unlock();
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (input.value === PASSWORD) {
      unlock();
    } else {
      error.hidden = false;
      input.value = '';
      input.focus();
    }
  });
})();
