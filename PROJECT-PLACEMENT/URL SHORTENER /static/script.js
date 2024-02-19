function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;

    fetch('/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'url=' + encodeURIComponent(originalUrl)
    })
    .then(response => response.text())
    .then(shortenedUrl => {
        document.getElementById("shortenedUrl").innerHTML = "Shortened URL: <a href='" + window.location.href + shortenedUrl + "'>" + window.location.href + shortenedUrl + "</a>";
    })
    .catch(error => console.error('Error:', error));
}
