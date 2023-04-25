// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function getSpacePeople() {
    return fetch('http://api.open-notify.org/astros.json')
        .then((res) => res.json());
}

// using then chain
getSpacePeople()
    .then(data => console.log(data));

// using async / await
(async () => {
    console.log( await getSpacePeople());
}) ();
