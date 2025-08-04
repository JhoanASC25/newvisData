/*
let DOB = document.getElementById('dob');
let gender = document.getElementById('gen');
let location = document.getElementById('location');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
*/
let currentInfo = peopleInfo[2];
console.log(peopleInfo);
displayInfo();

function displayInfo(){
let nameParts = ['title', 'first', 'last'];
let locationParts = ['city' , 'state' , 'country' , 'postcode' ]
let dobParts = ['date', "age"]
let fullName = '';
let location = '';
let DateofBirth = ''
let listOfPhotos = ''


    for(let i = 0; i < nameParts.length; i++){
    fullName = fullName + " " + currentInfo.name[nameParts[i]];
    console.log(fullName);
    }
    
    let newNameHeader = document.getElementById('actualName');
    console.log(newNameHeader)
    newNameHeader.innerHTML = fullName;
    
    let header = document.getElementById('actualName');
    header.innerHTML = fullName;

    //

    for(let i = 0; i < locationParts.length; i++){
    location = location + " " + currentInfo.location[locationParts[i]];
    }
    
    let newLocation = document.getElementById('location');
    newLocation.innerHTML = location;
    
    let finalLocation = document.getElementById('location');
    finalLocation.innerHTML = location;

//
        for(let i = 0; i < dobParts.length; i++){
    DateofBirth = DateofBirth + " " + currentInfo.dob[dobParts[i]];
    }
    
    let newDOB = document.getElementById('dob');
    newDOB.innerHTML = DateofBirth;
    
    let finalDOB = document.getElementById('dob');
    finalDOB.innerHTML = DateofBirth;
//
    let gender = document.getElementById('gen')
    gender.innerHTML = currentInfo.gender

//
    let email = document.getElementById('email')
    email.innerHTML = currentInfo.email

//
    let phone = document.getElementById('phone')
    phone.innerHTML = currentInfo.phone

    let photoArray = ['large' , 'medium', 'thumbnail' ]

    for(let i = 0; i < photoArray.length; i++){
        listOfPhotos =  listOfPhotos + " " + currentInfo.picture[photoArray[i]]
    }

    let photo = document.getElementById('photo')
    photo.src = currentInfo.picture

}

