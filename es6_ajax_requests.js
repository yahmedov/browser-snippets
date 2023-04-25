// https://www.w3schools.com/js/js_ajax_http.asp

function getSpacePeople() {
    return new Promise((resolve, reject) => {
        const apiURL = 'http://api.open-notify.org/astros.json';

        const request = new XMLHttpRequest();
        request.open('GET', apiURL);
        request.onload = () => resolve(JSON.parse(request.response));
        request.onerror = (err) => reject(err);
        request.send();
    });
};

// using then chain
getSpacePeople().then((spaceData) => {
    console.log(spaceData);
});

// using async / await
(async () => {
    console.log(await getSpacePeople());
}) ();

