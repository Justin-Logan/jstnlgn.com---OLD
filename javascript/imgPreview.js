

function openImg(x){

    const img = document.getElementById("img");
    const container = document.getElementById("imgContainer");
    img.src = x;
    img.style.display = "block";
    container.style.display = "block";

    if (img.style.display === "block"){

        img.addEventListener("click", function (e){

        e.stopPropagation();

        img.style.display = "none";
        container.style.display = "none";
            
    })

}}
