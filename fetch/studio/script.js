//TODO: Add Your Code Below
window.addEventListener("load", function(event) {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const div = document.getElementById("container");
            json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);
            div.innerHTML += `<h2>Total astronauts: ${json.length}</h2> `
            for (let i = 0; i < 8; i++) {
                let placeHolder = "";
                if (json[i].active === true) {
                    placeHolder = "style=color:green";
                }
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li ${placeHolder} >Active: ${json[i].active} </li>
                        <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `
                
                
            }
        });
    });
});