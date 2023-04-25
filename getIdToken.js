const redirectUrl = ''

function getIdToken(url = '') {
    const startAfter = 'id_token=';
    const endBefore = '&access_token';

    return url.slice(url.indexOf(startAfter) + startAfter.length, url.indexOf(endBefore));
}

console.log(getIdToken(redirectUrl));
