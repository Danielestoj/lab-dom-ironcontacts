// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(randomIndex, 3);

// Your code goes here ...

threeContacts.forEach((contact) =>{
    const exampleRow = document.createElement("tr");
    exampleRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    `;
    tableBody.appendChild(exampleRow);


});
  
  // ITERATION 2 - Delete Buttons
 

  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons
  // window.addEventListener('load', () => {
  //   const likeBtn = document.querySelectorAll('.btn-like');  
  //   likeBtn.forEach((btn) => {
  //     btn.addEventListener('click', (event) => {
  //       const target = event.currentTarget;
  //       target.classList.toggle('selected');
  //     }
  //     );
  //   });
  // });

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
    <td>  
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(exampleRow);
});

tableBody.addEventListener('click', (event) => {

  // LIKE
  if (event.target.closest('.btn-like')) {
    const btn = event.target.closest('.btn-like');
    btn.classList.toggle('selected');
  }

  // DELETE
  if (event.target.closest('.btn-delete')) {
    const btn = event.target.closest('.btn-delete');
    const row = btn.closest('tr');
    row.remove();
  }

});
// Your code goes here ...
