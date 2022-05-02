var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
table.appendChild(thead);
table.append(tbody);

function appendData(name, age, dob, email, company) {
  let row = document.createElement("tr");

  let row_data_Name = document.createElement("td");
  row_data_Name.innerText = name;

  let row_data_Age = document.createElement("td");
  row_data_Age.innerText = age;

  let row_data_DOB = document.createElement("td");
  row_data_DOB.innerText = dob;

  let row_data_Email = document.createElement("td");
  row_data_Email.innerText = email;

  let row_data_Company = document.createElement("td");
  row_data_Company.innerText = company;

  row.appendChild(row_data_Name);
  row.appendChild(row_data_Age);
  row.appendChild(row_data_DOB);
  row.appendChild(row_data_Email);
  row.appendChild(row_data_Company);

  tbody.appendChild(row);
}

function addHeading() {
  //   adding heading data

  let row1 = document.createElement("tr");

  let head1 = document.createElement("th");
  head1.innerText = "Name";

  let head2 = document.createElement("th");
  head2.innerText = "Age";

  let head3 = document.createElement("th");
  head3.innerText = "DOB";

  let head4 = document.createElement("th");
  head4.innerText = "Email";

  let head5 = document.createElement("th");
  head5.innerText = "Company";

  row1.appendChild(head1);
  row1.appendChild(head2);
  row1.appendChild(head3);
  row1.appendChild(head4);
  row1.appendChild(head5);

  thead.appendChild(row1);
}

// self invoking function
(function createTable() {
  console.log(document.getElementsByTagName("body"));
  var body = document.getElementsByTagName("body")[0];

  body.appendChild(table);

  addHeading();

  appendData(
    "Sachin Sharma",
    20,
    "15-dec-2001",
    "sachin@sachin.com",
    "Gemini Solutions"
  );
  appendData("Dev", 22, "09-feb-2000", "dev@dev.com", "Gemini Solutions");
  appendData(
    "Anand Godara",
    22,
    "10-apr-2000",
    "anand@anand.com",
    "Gemini Solution"
  );
  appendData(
    "Anmol Bhandari",
    20,
    "15-jun-2001",
    "anmol@bhandari.com",
    "Gemini Solution"
  );
  appendData("Raj Anand", 22, "15-dec-200", "raj@anand.com", "Gemini Solution");

  // apply styles
  styles();
})();

function styles() {
  // style on body
  var body = document.getElementsByTagName("body")[0];
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";

  //style on table
  table.style.marginTop = "100px";
  table.style.borderCollapse = "collapse";

  let th = document.getElementsByTagName("th");
  let td = document.getElementsByTagName("td");

  for (let i of th) {
    i.style.border = "1px solid black";
    i.style.padding = "10px";
  }
  for (let i of td) {
    i.style.border = "1px solid black";
    i.style.padding = "10px";
  }
}

// createTable();
