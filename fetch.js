fetch('./json/data.json')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response)
        return response;
    })
    .catch((error) => {
        console.log(error)
    });
