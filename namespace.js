var PATE0672 = {


    init: function () {

        let newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.textContent = "PATE0672";

        let newSolid = document.getElementById("boxes");

        newSolid.appendChild(newDiv);

        newDiv.addEventListener("click", function () {
            newDiv.style.borderColor = "lightgreen";
            newDiv.style.backgroundColor = "orange";

        });


        newDiv.addEventListener("mouseover", function () {

            newDiv.classList.toggle("highlight");
        });


        newDiv.addEventListener("mouseout", function () {

            newDiv.removeAttribute("style");
            newDiv.classList.toggle("highlight");
            newDiv.textContent="PATE0672";

        });

    }
};
