let houeseCounter = 1;

class House {
    constructor(address, capacity) {
        this.address = address;
        this.capacity = capacity;
        this.residentNow = 0;
        this.id = houeseCounter;
        houeseCounter++;
       /* function summ() {
           let res = 0;
            for(i=0; i<=100; i++){
               try {
                   res +=i;
            if(res>101) throw new Error("Вместимость дома превышена");

            }catch (residentNow) {
                   if (residentNow >101;){
                       WScript.Echo(residentNow.description);
                       break;
                   }
               }
                return res;
               }
        }
        WScript.Echo(summ); */

    }

}


let houses = [new House('Улица')];


document.getElementById("addHouse").addEventListener('click', () =>{
    let address = document.getElementById('Address').value;
    let capacity = document.getElementById('Capacity').value;

    let house = new House(address, capacity);
    houses.push(house);
    restructureTableHouse();
});

function restructureTableHouse() {
    let tableBody = document.getElementById("tableHouse");
    tableBody.innerHTML = "";
    for (let i = 0; i < houses.length; i++) {
        let address = houses[i].address;
        let capacity = houses[i].capacity;
        let residentNow = houses[i].residentNow;

        let tr = document.createElement('tr');

        let thAddress = document.createElement('th');
        thAddress.innerHTML = address;
        let thCapacity = document.createElement('th');
        thCapacity.innerHTML = capacity ? capacity  : "Неограничено";
        let thResidentNow = document.createElement('th');
        thResidentNow.innerHTML = residentNow;

        tr.append(thAddress,thResidentNow, thCapacity);
        tableBody.append(tr)
    }
}

let residentCounter = 1;
class Resident{
    constructor(name, surname, sex, house) {
      this.name = name;
      this.surname = surname;
      this.sex = sex;
      this.house = house;
      this.idResident = residentCounter;
      residentCounter++;
    }
}

let residents = [];

document.getElementById("addResident").addEventListener('click', () =>{
    let name = document.getElementById("Name").value;
    let surname = document.getElementById('Surname').value;
    let sex =  document.querySelector('input[name = "sex"]:checked').value;

    let houseId = document.getElementById('s1').selectedOptions[0].id;
    let house = houses.find((item) => item.id == houseId);
    house.residentNow++;
    let resident = new Resident(name, surname, sex, house);
    residents.push(resident);
    restructureTableResident();
    restructureTableHouse();
});

function restructureTableResident() {
    let tableBody = document.getElementById("tableResident");
    tableBody.innerHTML = "";
    for (let i = 0; i < residents.length; i++) {
        let name= residents[i].name;
        let surname = residents[i].surname;
        let sex = residents[i].sex;
        let house = residents[i].house;

        let residentID = residents[i].idResident;

        let tr = document.createElement('tr');
        tr.id = residentID + "_resident";
        let thName = document.createElement('th');
        thName.innerHTML = name;
        let thSurname = document.createElement('th');
        thSurname.innerHTML = surname;
        let thSex = document.createElement('th');
        thSex.innerHTML = sex;
        let thHouses = document.createElement('th');
        thHouses.innerHTML = house.address;
        let button = document.createElement('button');
        button.innerText = 'Удалить';
        button.addEventListener('click', deleteRow );
        tr.append(thName, thSurname, thSex, thHouses, button);
        tableBody.append(tr)
    }
}

     function deleteRow(event){

        let id = event.currentTarget.parentElement.id;
        id = id.replace("_resident", "");
        let indexRes = residents.findIndex( findIndex => findIndex == id)
        residents.splice(indexRes, 1);
        restructureTableResident ();
     }

document.getElementById('s1').addEventListener('focus', (event)=>{
    let selectElement = event.currentTarget;
    selectElement.innerHTML = "";
    for(let i = 0; i < houses.length; i++){
        let option = document.createElement('option');
        option.innerHTML = houses[i].address;
        option.id = houses[i].id;

        selectElement.append(option)
    }
});


restructureTableHouse();