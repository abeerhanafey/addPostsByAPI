
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
    myRequest.responseType = "json";
    myRequest.send();
    myRequest.onload = function () {
        // console.log(myRequest.response);
        let response = myRequest.response;
        let myTitle = [];
        let myDesc = [];
        response.forEach(el => {
            el.title = `user ${el.userId}`;
            switch (el.userId) {
                case 1:
                    el.desc = "Web Developer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 2:
                    el.desc = "FrontEnd Developer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 3:
                    el.desc = "BackEnd Developer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 4:
                    el.desc = "Full Stack Developer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 5:
                        el.desc = "Flutter Developer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 6:
                    el.desc = "JS Developer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 7:
                    el.desc = "AI Engineer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 8:
                    el.desc = "Data Scientist";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                case 9:
                    el.desc = "UI/UX Designer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
                default:
                    el.desc = "not programmer";
                    myDesc.push(el.desc);
                    myTitle.push(el.title);
                    break;
            }
            console.log(el);
        });

        let myDescList = Array.from(new Set(myDesc));
        let myTitleList = Array.from(new Set(myTitle));

        // console.log(imgDiv);
        console.log(myTitleList);
        console.log(myDescList);

            let left = document.getElementById("left");

        for (i = 1; i <= 10; i++) {
            let imgDiv = document.createElement("div");
            imgDiv.setAttribute("class", `imgDiv`);
            imgDiv.setAttribute("id", `${i}`);
            let img = document.createElement("img");
            img.setAttribute("src", `images/img${i}.jpg`);
            imgDiv.appendChild(img);
            let titleDiv = document.createElement("div");
            titleDiv.setAttribute("class", "title");
            let title = `<h2>${myTitleList[i-1]}</h2>
            <p>${myDescList[i - 1]}</p>`;
            titleDiv.innerHTML = title;
            imgDiv.appendChild(titleDiv);
            left.appendChild(imgDiv);
        }
        // console.log(imgDiv);
        let users = document.querySelectorAll("#left .imgDiv");
        console.log(users);
        users.forEach(function (el) {
            el.onclick = function () {
                console.log(el.id);
                let rightDiv = document.querySelector("#right");
                rightDiv.innerHTML = "";
                myQueryRequest = new XMLHttpRequest();
                myQueryRequest.open("Get", `https://jsonplaceholder.typicode.com/posts?userId=${parseInt(el.id)}`);
                myQueryRequest.responseType = "json";
                myQueryRequest.send();
                myQueryRequest.onload = function () {
                    let posts = myQueryRequest.response;
                    posts.forEach(function (ele) {
                        let rightPost = document.createElement("div");
                        rightPost.setAttribute("class", "post");
                        let postContent = `<h2>user ${el.id} :- ${ele.title}</h2>
                        <hr>
                        <p>${ele.body}</p>`;
                        rightPost.innerHTML = postContent;
                        rightDiv.appendChild(rightPost);
                    });
                    
                }
            }
        });
        
}
// ---------------------------------------------------------

// adding posts

