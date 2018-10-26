var PATE0672 = {


    init: function () {

        let newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.textContent = "PATE0672";

        let newSolid = document.getElementById("boxes");

        newSolid.appendChild(newDiv);

        newSolid.addEventListener("click", function () {
            newDiv.style.borderColor = "lightgreen";
            newDiv.style.backgroundColor = "orange";

        });


        newSolid.addEventListener("mouseover", function () {

            newDiv.classList.toggle("hightlight");
        });


        newSolid.addEventListener("mouseout", function () {

            newDiv.classList.toggle("hightlight");
            newDiv.removeAttribute("style");

        });

    }
};
