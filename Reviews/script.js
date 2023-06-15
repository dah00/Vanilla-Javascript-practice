const profiles = [
    {
        picture: 'images/profile1.jpg',
        name: 'Susan Smith',
        role: 'Web developer',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corpori voluptate. Corrupti nisi, natus beatae accusantium eaque eveniet quis assumenda hic! Cum harum totam, dolorum inventore a eos illo qui perspiciatis",
    },
    {
        picture: 'images/profile2.jpeg',
        name: 'Anna johnson',
        role: 'Web developer',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corpori voluptate. Corrupti nisi, natus beatae accusantium eaque eveniet quis assumenda hic! Cum harum totam, dolorum inventore a eos illo qui perspiciatis",
    },
    {
        picture: 'images/profile3.jpg',
        name: 'Bill Anderson',
        role: 'The boss',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corpori voluptate. Corrupti nisi, natus beatae accusantium eaque eveniet quis assumenda hic! Cum harum totam, dolorum inventore a eos illo qui perspiciatis",
    },
    {
        picture: 'images/profile4.jpg',
        name: 'Peter Jones',
        role: 'Intern',
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corpori voluptate. Corrupti nisi, natus beatae accusantium eaque eveniet quis assumenda hic! Cum harum totam, dolorum inventore a eos illo qui perspiciatis",
    }
]

const prevbtn = document.querySelector('.prevbtn');
const nextbtn = document.querySelector('.nextbtn');

const profileImg = document.querySelector('.profilePicture');
const profileName = document.querySelector('.name');
const profileJob = document.querySelector('.jobTitle');
const profileBio = document.querySelector('.bio');

const surpriseMe = document.querySelector('.surpriseMeBtn');

let count = 0;

prevbtn.onclick = function(){
    if(count > 0 && count < 4){
        count--;
        renderProfile();
    }
    console.log('prev clicked');
}

nextbtn.onclick = function(){
    if(count >= 0 && count < 3){
        count++;
        renderProfile();
    }
    console.log('next clicked');
}

surpriseMe.onclick = function(){
    count = getRandomValue();
    renderProfile();
}

function renderProfile(){
    profileImg.src = profiles[count].picture;
    profileName.innerText = profiles[count].name;
    profileJob.innerText = profiles[count].role;
    profileBio.innerText = profiles[count].bio;
}

function getRandomValue(){
    return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
}