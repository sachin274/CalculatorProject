let store = "";
let store1 = "";

document.querySelectorAll(".row").forEach(row => {
    row.addEventListener("click", function() {
        let sym = this.classList[1]; 
        let elements = document.querySelectorAll("." + CSS.escape(sym));

        elements.forEach(e => e.classList.add("clicked"));
        setTimeout(() => {
            elements.forEach(e => e.classList.remove("clicked"));
        }, 100);

        if (sym === "=") {
            try {
                store = store.replace(/\×/g, "*").replace(/\÷/g, "/");
                let result = eval(store);
                document.querySelector(".show").textContent = result;
                document.querySelector(".answer").textContent = "";
                store = result;
            } catch (error) {
                document.querySelector(".show").textContent = "Error";
                document.querySelector(".answer").textContent = "";
                store = "";
            }
        } 
        
        else if (sym === "D") {
            store = store.toString().slice(0, -1);
            document.querySelector(".show").textContent = store;
            document.querySelector(".answer").textContent = store.length ? eval(store) : "";
        } 
        
        else if (sym === "C") {
            document.querySelector(".show").textContent = "0";
            store = "";
            document.querySelector(".answer").textContent = "";
        } 
        
        else {
            store += this.textContent;
            store1 = store.replace(/\×/g, "*").replace(/\÷/g, "/");
            document.querySelector(".show").textContent = store;
            document.querySelector(".answer").textContent = store.length ? eval(store1) : "";
        }
    });
});

document.querySelector(".image").addEventListener("click", function() {
    store = store.toString().slice(0, -1);
    store1 = store.replace(/\×/g, "*").replace(/\÷/g, "/");
    document.querySelector(".show").textContent = store;
    document.querySelector(".answer").textContent = store.length ? eval(store1) : "";
});
