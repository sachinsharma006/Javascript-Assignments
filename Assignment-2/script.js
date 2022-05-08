var data = { name: "", email: "", mobile: "" };

function validateName() {
  var Ename = document.querySelector('input[id="name"]');
  let name = Ename.value.trim();
  let regex = /^[A-Za-z ]+$/;
  let result = false;
  let regex_result = regex.test(name);

  //? Checking whether the name is only the spaces or not using trim function
  if (name.length == 0) {
    alert("Name Cannot be Empty!!");
    Ename.focus();
    Ename.style.border = "1px solid salmon";
    return false;
  }

  /*
   * testing the regular expression to validate name whether the name consisting numeric and
   * special characters or not!!
   */
  if (!regex_result) {
    alert("Name cannot have special or number values!!");
    Ename.focus();
    Ename.style.border = "1px solid salmon";
    return false;
  } else {
    console.log("Valid");
    data.name = name;
    result = true;
  }
  return result;
}

function validateEmail() {
  var Email = document.querySelector('input[id="email"]');
  let email = Email.value.trim();
  let regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
  let result = false;

  /*
   * testing the regular expression to validate email whether the email is valid in terms of the
   * email structure ot not
   */
  let regex_result = regex.test(email);
  console.log(regex_result);
  if (!regex_result) {
    alert("Email is invalid!!");
    Email.focus();
    Email.style.border = "1px solid salmon";
  } else {
    result = true;
    data.email = email;
  }
  return result;
}

function validateMobile() {
  var mobile = document.querySelector('input[id="mobile"]');
  var mobileVlaue = mobile.value;

  /*
   * if length of the mobile number is 0 which means the user haven't entered the mobile number
   * hence user form can be submitted
   */
  if (mobileVlaue.length === 0) return true;
  var regex = /^[6-9]\d{9}$/;
  let result = false;

  let regex_result = regex.test(mobileVlaue);
  console.log(regex_result);
  if (!regex_result) {
    alert("Mobile Number is invalid!!");
    mobile.focus();
    mobile.style.border = "1px solid salmon";
  } else {
    result = true;
    data.mobile = mobileVlaue;
  }
  return result;
}

function showDataIntoTable(event) {
  event.preventDefault();
  const validation_result =
    validateName() && validateMobile() && validateEmail();

  //! after getting the successfull result pushing the data to the local storage 
  if (validation_result) {
    localStorage.setItem("details", JSON.stringify(data));
    addDataToTable();
  }
}

const addDataToTable = () => {
  data = localStorage.getItem("details");
  data = JSON.parse(data);


  var tbody = document.querySelector("tbody");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = data.name;
  var td2 = document.createElement("td");
  td2.innerText = data.email;
  var td3 = document.createElement("td");
  td3.innerText = data.mobile;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);
};
// showData()

form.addEventListener("submit", showDataIntoTable);
