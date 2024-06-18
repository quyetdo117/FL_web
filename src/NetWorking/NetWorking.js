module.exports.requestGet = (url, callBack) => {
    console.log('logg url', url);
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // "Content-Type": "application/x-www-form-urlencoded",
        }
    })
        .then(response => {
            console.log('logggg response', response);
            return response.json();
        })
        .then(data => {
            console.log('logggg data', data);
            callBack(data)
        })
        .catch(err => {
            console.log('logggg err', err);
            callBack(err)
        })
}

module.exports.requestPost = (url, callBack, body) => {
    console.log('logg url', url);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            console.log('logggg response', response);
            return response.json();
        })
        .then(data => {
            console.log('logggg data', data);
            callBack(data)
        })
        .catch(err => {
            console.log('logggg err', err);
            callBack(err)
        })
}

