const errorAlert = document.querySelector('#errorAlert');

const firstName = document.querySelector('#firstName');
const middleName = document.querySelector('#middleName');
const lastName = document.querySelector('#lastName');
const extName = document.querySelector('#extName');
const userAge = document.querySelector('#userAge');
const userGender = document.querySelector('#userGender');
const userBirthday = document.querySelector('#userBirthday');
const currentAddress = document.querySelector('#currentAddress');
const permanentAddress = document.querySelector('#permanentAddress');

const phaseOne = document.querySelector('#phaseOne');
const phaseTwo = document.querySelector('#phaseTwo');
const phaseThree = document.querySelector('#phaseThree');

const previewName = document.querySelector('#previewName');
const previewAge = document.querySelector('#previewAge');
const previewGender = document.querySelector('#previewGender');
const previewBirthDate = document.querySelector('#previewBirthDate');
const previewCurrent = document.querySelector('#previewCurrent');
const previewPermanent = document.querySelector('#previewPermanent');

document.querySelector('#btnGoToTwo').addEventListener('click', () => {
    errorAlert.classList.add('d-none');

   if (firstName.value.trim() === "") {
        errorAlert.textContent = "VALIDATION ERROR: Please enter a complete First Name to continue.";
        errorAlert.classList.remove('d-none');
        return;
    }

    else if (lastName.value.trim() === "") {
        errorAlert.textContent = "VALIDATION ERROR: Please enter a complete Last Name to continue.";
        errorAlert.classList.remove('d-none');
        return;
    }

    else if (userAge.value.trim() === "") {
        errorAlert.textContent = "VALIDATION ERROR: Please enter your age to continue.";
        errorAlert.classList.remove('d-none');
        return;
    }
   
    else if (userAge.value.trim() < 18 ) {
        errorAlert.textContent = "VALIDATION ERROR: Age required must be 18 to 100";
        errorAlert.classList.remove('d-none');
        return;
    }
   
    else if (userAge.value.trim() > 100 ) {
        errorAlert.textContent = "VALIDATION ERROR: Age required must be 18 to 100";
        errorAlert.classList.remove('d-none');
        return;
    }


    else if (userGender.value.trim() === "") {
        errorAlert.textContent = "VALIDATION ERROR: Please select your gender to continue.";
        errorAlert.classList.remove('d-none');
        return;
    }

    else if (userBirthday.value.trim() === "") {
        errorAlert.textContent = "VALIDATION ERROR: Please select your date of birth to continue.";
        errorAlert.classList.remove('d-none');
        return;
    }


    phaseOne.classList.add('d-none');
    phaseTwo.classList.remove('d-none');
});

document.querySelector('#btnGoToThree').addEventListener('click', () => {
    errorAlert.classList.add('d-none');

    if (currentAddress.value.trim() === "" || permanentAddress.value.trim() === "") {
        errorAlert.textContent = " VALIDATION ERROR: Please enter a complete address, including house number and street.";
        errorAlert.classList.remove('d-none');
        return;
    }

    const fNameClean = firstName.value.trim().toUpperCase();
    const mNameClean = middleName.value.trim().toUpperCase();
    const lNameClean = lastName.value.trim().toUpperCase();
    const eNameClean = extName.value.trim().toUpperCase();

    let formattedNameString = `${lNameClean}, ${fNameClean}`;
    if (mNameClean !== "") {
        formattedNameString += ` ${mNameClean}`;
    }
    if (eNameClean !== "") {
        formattedNameString += `, ${eNameClean}`;
    }

    previewName.textContent = formattedNameString;
    previewAge.textContent = userAge.value;
    previewGender.textContent = userGender.value.toUpperCase();
    previewBirthDate.textContent = userBirthday.value;
   
    previewCurrent.textContent = currentAddress.value.trim().toUpperCase();
    previewPermanent.textContent = permanentAddress.value.trim().toUpperCase();

    phaseTwo.classList.add('d-none');
    phaseThree.classList.remove('d-none');
});

document.querySelector('#btnReset').addEventListener('click', () => {
    errorAlert.classList.add('d-none');

    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    extName.value = "";
    userAge.value = "";
    userGender.value = "";
    userBirthday.value = "";
    currentAddress.value = "";
    permanentAddress.value = "";

    previewName.textContent = "--";
    previewAge.textContent = "--";
    previewGender.textContent = "--";
    previewBirthDate.textContent = "--";
    previewCurrent.textContent = "--";
    previewPermanent.textContent = "--";

    phaseThree.classList.add('d-none');
    phaseOne.classList.remove('d-none');
});
