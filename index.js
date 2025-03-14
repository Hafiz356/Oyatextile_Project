document.getElementById("playButton").addEventListener("click", function() {
    document.getElementById("thumbnail").style.display = "none";
    this.style.display = "none"; // Hide play button
    document.getElementById("video").style.display = "block";
    document.getElementById("video").src += "&autoplay=1"; // Autoplay video
});
