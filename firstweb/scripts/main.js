//监听事件：
let count = 0;
document.querySelector('body').addEventListener('click', function () {
    console.log(`/body标签被点击了${count++}次。`);
    let myStrong = document.querySelector('strong');
    myStrong.textContent = count;
});

//图像切换：
let myImg = document.querySelector('img');

myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/1.jpg') {
        myImg.setAttribute('src', 'images/2.jpg');
    } else {
        myImg.setAttribute('src', 'images/1.jpg');
    }
}

//个性欢迎信息：
function setName() {
    let myName = prompt('请输入昵称：');
    console.log(myName);
    if (myName) {
        myHeading.textContent = "hello, " + myName;
    }else {
        setName();
    }
}

let myHeading = document.querySelector('h1');

let myButtom = document.querySelector('button');
myButtom.onclick = function () {
    setName();
}



// let myImage = document.querySelector("img");

// myImage.onclick = () => {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === "images/1.jpg") {
//         myImage.setAttribute("src", "images/2.jpg");
//     } else {
//         myImage.setAttribute("src", "images/1.jpg");
//     }
// }
// let myButtom = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setName() {
//     let myName = prompt('请输入你的名字：');
//     if(!myName){
//         setName();
//     }else{
//         localStorage.setItem('name', myName);
//         myHeading.textContent = "hello, " + myName;
//     }
// }

// if (!localStorage.getItem('name')) {
//     setName();
// } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = "hello, " + storedName;
// }

// myButtom.onclick = () => {
//     setName();
// }
