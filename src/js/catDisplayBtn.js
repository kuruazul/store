document.addEventListener("DOMContentLoaded", function(event) {
    //document.getElementById("categories-filter-data").style.display = 'none'
    if (document.getElementById("btn-display-categories")) {
        document.getElementById("categories-filter-data").style.display = "none"
        document.getElementById("categories-filter-data").style.opacity = 0
        document.getElementById("btn-display-categories").addEventListener('click', () => {

            if (document.getElementById("categories-filter-data").style.display === 'none') {
                document.getElementById("categories-filter-data").style.display = "grid"
                document.getElementById("categories-filter-data").style.opacity = 1
                document.getElementById("btn-display-categories").style.rotate = "90deg"
            } else {
                document.getElementById("categories-filter-data").style.display = "none"
                document.getElementById("categories-filter-data").style.opacity = 0
                document.getElementById("btn-display-categories").style.rotate = "0deg"
            }
        })
    }
    if (document.getElementById("btn-display-brands")) {
        document.getElementById("brands-filter-data").style.display = "none"
        document.getElementById("brands-filter-data").style.opacity = 0
        document.getElementById("btn-display-brands").addEventListener('click', () => {

            if (document.getElementById("brands-filter-data").style.display === 'none') {
                document.getElementById("brands-filter-data").style.display = "grid"
                document.getElementById("brands-filter-data").style.opacity = 1
                document.getElementById("btn-display-brands").style.rotate = "90deg"
            } else {
                document.getElementById("brands-filter-data").style.display = "none"
                document.getElementById("brands-filter-data").style.opacity = 0
                document.getElementById("btn-display-brands").style.rotate = "0deg"
            }
        })
    }
});