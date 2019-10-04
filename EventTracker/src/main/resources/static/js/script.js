let createEvent = (e) => {
  e.preventDefault();
  createCatch();
}

let updateEvent = (e) => {
  e.preventDefault();
  updateCatch(e.target.getAttribute('fishId'));
}

window.addEventListener('load', e => {
  document.fishForm.addFish.addEventListener('click', createEvent); 
  getAll();
});

function getAll() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/catches/');
  let fields = ['length', 'weight', 'lat', 'longitude', 'technique'];

  xhr.onreadystatechange = () => {
    let catchesDiv = document.getElementById('catchesData');

    if (xhr.readyState === 4 && xhr.status < 400) {
      let data = JSON.parse(xhr.responseText);

      for (let fish of data) {
        let fishDiv = document.createElement('div');
        fishDiv.className = 'fish';
        fishDiv.id = 'fish' + fish.id;

        let title = document.createElement('h2');
        title.textContent = fish.date;
        fishDiv.appendChild(title);

        let ul = document.createElement('ul');
        for (let field of fields) {
          let li = document.createElement('li');
          li.textContent = field.toUpperCase() + ': ' + fish[field];
          ul.appendChild(li);
        }

        fishDiv.appendChild(ul);

        let updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.setAttribute('data', JSON.stringify(fish));
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('data', fish.id);

        updateBtn.addEventListener('click', e => {
          document.fishForm.addFish.removeEventListener('click', createEvent);
          document.fishForm.addFish.textContent = 'Update Fish'
          document.fishForm.addFish.setAttribute('fishId', fish.id);
          document.fishForm.addFish.addEventListener('click', updateEvent);
          window.scrollTo(0,0);
          populateForm(e.target.getAttribute('data'));
        });

        deleteBtn.addEventListener('click', e => {
          deleteCatch(e.target.getAttribute('data'));
        });

        fishDiv.appendChild(updateBtn);
        fishDiv.appendChild(deleteBtn);
        catchesDiv.appendChild(fishDiv);
      }

    }

    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error(xhr.status + ': ' + xhr.responseText);
      catchesDiv.textContent = 'No catches found';
    }
  };

  xhr.send(null);
}

function updateCatch(id) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', '/api/catches/' + id);
  xhr.setRequestHeader('Content-type', 'application/json');

  let form = document.fishForm;

  let fish = {
    'length': form.length.value,
    'weight': form.weight.value,
    'date': form.date.value,
    'technique': form.technique.value,
    'longitude': form.longitude.value,
    'lat': form.latitude.value
  };

  xhr.onreadystatechange = () => {
    let message = document.getElementById('message');

    if (xhr.readyState === 4 && xhr.status < 400) {
      message.textContent = 'Catch updated';
      document.fishForm.addFish.removeEventListener('click', updateEvent);
      document.fishForm.addFish.addEventListener('click', createEvent);
      document.fishForm.addFish.textContent = 'Add Fish';
      clearCatches();
      getAll();
    }

    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error(xhr.status + ': ' + xhr.responseText);
      message.textContent = 'Could not process update request';
    }
  };
  xhr.send(JSON.stringify(fish));
}

function deleteCatch(id) {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', '/api/catches/' + id);

  xhr.onreadystatechange = () => {
    let message = document.getElementById('message');

    if (xhr.readyState === 4 && xhr.status < 400) {
      message.textContent = 'Fish deleted';
      let fish = document.getElementById('fish' + id);
      document.getElementById('catchesData').removeChild(fish);
    }

    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error(xhr.status + ': ' + xhr.responseText);
      message.textContent = 'Could not process delete request';
    }
  };

  xhr.send(null);
}

function createCatch() {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/catches/');
  xhr.setRequestHeader('Content-type', 'application/json');

  let form = document.fishForm;

  let fish = {
    'length': form.length.value,
    'weight': form.weight.value,
    'date': form.date.value,
    'technique': form.technique.value,
    'longitude': form.longitude.value,
    'lat': form.latitude.value
  };

  xhr.onreadystatechange = () => {
    let message = document.getElementById('message');

    console.log(JSON.stringify(fish));

    if (xhr.readyState === 4 && xhr.status < 400) {
      message.textContent = 'Fish created';
      clearCatches();
      getAll();
    }

    if (xhr.readyState === 4 && xhr.status >= 400) {
      console.error(xhr.status + ': ' + xhr.responseText);
      message.textContent = 'Could not process create request';
    }
  };
  xhr.send(JSON.stringify(fish));
}

function clearCatches() {
  clearForm();
  let catchesDiv = document.getElementById('catchesData');
  while (catchesDiv.firstElementChild) {
    catchesDiv.removeChild(catchesDiv.firstElementChild);
  }
}

function clearForm(){
  let form = document.fishForm;
  form.length.value = '';
  form.weight.value = '';
  form.latitude.value = '';
  form.longitude.value = '';
  form.date.value = '';
  form.technique.value = '';
}

function populateForm(fish){
  fish = JSON.parse(fish);
  let form = document.fishForm;
  form.length.value = fish.length;
  form.weight.value = fish.weight;
  form.latitude.value = fish.lat;
  form.longitude.value = fish.longitude;
  form.date.value = fish.date;
  form.technique.value = fish.technique; 
}
