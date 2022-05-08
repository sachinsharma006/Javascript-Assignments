//* global variables for table structure
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
table.appendChild(thead);
table.append(tbody);

function appendDataToTable(name, age, dob, email, company) {
  let row = document.createElement("tr");

  //? creating a reference of td and creating a text node, appending it to the parent(td) element
  let row_data_Name = document.createElement("td");
  let name_textNode = document.createTextNode(name);
  row_data_Name.appendChild(name_textNode);

  //? creating a reference of td and creating a text node, appending it to the parent(td) element
  let row_data_Age = document.createElement("td");
  let age_textNode = document.createTextNode(age);
  row_data_Age.appendChild(age_textNode);

  //? creating a reference of td and creating a text node, appending it to the parent(td) element
  let row_data_DOB = document.createElement("td");
  let dob_textNode = document.createTextNode(dob);
  row_data_DOB.appendChild(dob_textNode);

  //? creating a reference of td and creating a text node, appending it to the parent(td) element
  let row_data_Email = document.createElement("td");
  let email_textNode = document.createTextNode(email);
  row_data_Email.appendChild(email_textNode);

  //? creating a reference of td and creating a text node, appending it to the parent(td) element
  let row_data_Company = document.createElement("td");
  let company_textNode = document.createTextNode(company);
  row_data_Company.appendChild(company_textNode);

  //! appending all the tds to the single row
  row.appendChild(row_data_Name);
  row.appendChild(row_data_Age);
  row.appendChild(row_data_DOB);
  row.appendChild(row_data_Email);
  row.appendChild(row_data_Company);

  //! the row is being added to the tbody
  tbody.appendChild(row);
}

function addHeadingIntoTheTable() {
  //   adding heading data

  let heading_row = document.createElement("tr");

  let heading_data_column1 = document.createElement("th");
  heading_data_column1.innerText = "Name";

  let heading_data_column2 = document.createElement("th");
  heading_data_column2.innerText = "Age";

  let heading_data_column3 = document.createElement("th");
  head3.innerText = "DOB";

  let heading_data_column4 = document.createElement("th");
  heading_data_column4.innerText = "Email";

  let heading_data_column5 = document.createElement("th");
  heading_data_column5.innerText = "Company";

  heading_row.appendChild(heading_data_column1);
  heading_row.appendChild(heading_data_column2);
  heading_row.appendChild(heading_data_column3);
  heading_row.appendChild(heading_data_column4);
  heading_row.appendChild(heading_data_column5);

  thead.appendChild(heading_row);
}

// self invoking function
(function createTable() {
  console.log(document.getElementsByTagName("body"));
  var body = document.getElementsByTagName("body")[0];

  body.appendChild(table);

  addHeadingIntoTheTable();

  appendDataToTable(
    "Sachin Sharma",
    20,
    "15-dec-2001",
    "sachin@sachin.com",
    "Gemini Solutions"
  );
  appendDataToTable(
    "Dev",
    22,
    "09-feb-2000",
    "dev@dev.com",
    "Gemini Solutions"
  );
  appendDataToTable(
    "Anand Godara",
    22,
    "10-apr-2000",
    "anand@anand.com",
    "Gemini Solution"
  );
  appendDataToTable(
    "Anmol Bhandari",
    20,
    "15-jun-2001",
    "anmol@bhandari.com",
    "Gemini Solution"
  );
  appendDataToTable(
    "Raj Anand",
    22,
    "15-dec-200",
    "raj@anand.com",
    "Gemini Solution"
  );

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

  //applying border style to every th
  for (let i of th) {
    i.style.border = "1px solid black";
    i.style.padding = "10px";
  }
  //applying border style to every td
  for (let i of td) {
    i.style.border = "1px solid black";
    i.style.padding = "10px";
  }
}

// createTable();
