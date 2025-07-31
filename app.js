document.addEventListener("DOMContentLoaded", (event) => {

    const formElem = document.getElementById('raidForm');
    const submitBtn = document.getElementById('formSubmit');
    const outputElem = document.querySelector('.decrypted-code-output');

    formElem.addEventListener("submit", function(event) {

    event.preventDefault();

    let formData = new FormData(formElem, submitBtn);
    const raidCode = formData.get('code');
    const cryptKey = formData.get('key');

    let splitCode = raidCode.split('');
    let splitKey = cryptKey.split('');
    let entriesMap = [
        [splitKey[0],splitCode[0]],
        [splitKey[1],splitCode[1]],
        [splitKey[2],splitCode[2]],
        [splitKey[3],splitCode[3]],
        [splitKey[4],splitCode[4]],
        [splitKey[5],splitCode[5]],
    ];

    let sorted = Object.fromEntries(entriesMap);

    let decrypted = [
        sorted["1"],
        sorted["2"],
        sorted["3"],
        sorted["4"],
        sorted["5"],
        sorted["6"],
    ].join("");

    outputElem.textContent = decrypted;

    });

});