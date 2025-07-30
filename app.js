const formElem = document.getElementById('raidForm');
const submitBtn = document.getElementById('codeSubmit');
const outputElem = document.querySelector('.decrypted-code-output');

formElem.addEventListener("submit", function(event) {
  
  event.preventDefault();
  
  let formData = new FormData(formElem, submitBtn);
  const raidCode = formData.get('code');
  
  let splitCode = raidCode.split('');
  let newCode = [];
  newCode.push(splitCode.shift());
  newCode.push(splitCode.pop());
  newCode.push(splitCode.shift());
  newCode.push(splitCode.pop());
  newCode.push(splitCode.shift());
  newCode.push(splitCode.pop());
  
  let decrypted = newCode.join('');
  
  outputElem.textContent = decrypted;
  
});