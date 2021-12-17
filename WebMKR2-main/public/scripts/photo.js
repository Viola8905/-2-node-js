async function Load(author) {
    let res = await fetch(`http://localhost:3000/photo/${author}`);
    if (res.ok) {
        return await res.json();
    }
    return null;
}

async function Show() {
    const author = document.getElementById("author").value;
    const photo = await Load(author);
    if (photo) {
        document.getElementById("photoimg").src = photo.url;
        document.getElementById("phototitle").innerText = photo.title;
        document.getElementById("photolikes").innerText = `Likes:${photo.likes}`;
    } else alert("Not Found");
}