document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("categories-filter-data").style.display = 'none'
    document.getElementById("btn-display-categories").addEventListener('click', () => {
        if (document.getElementById("categories-filter-data").style.display === 'none')
            document.getElementById("categories-filter-data").style.display = "grid"
        else
            document.getElementById("categories-filter-data").style.display = "none"
    })

});