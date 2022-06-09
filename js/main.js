class ItemGenerator {
    constructor(playground) {
        this.pg = document.querySelector(playground);
    }

    createItem(number) {
        const element = document.createElement("div");
        element.classList.add("item-wrapper");
        element.innerHTML = `<div class="item">
                    <span class="item-text">${number}</span>
                    <div class="item-cover"></div>
                </div>`;

        element.addEventListener("click", () => {
            element.querySelector(".item-cover").style.height = "0";
        });

        this.pg.appendChild(element);
    }
}

const generator = new ItemGenerator(".playground");

for (let i = 0; i < 30; i++) {
    generator.createItem(i);
}
