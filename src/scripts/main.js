(function () {
    const rootElement = document.getElementById("root");

    const createPopoverCard = () => {
        const popoverCard = document.createElement("div");
        const popoverCardTitle = document.createElement("div");
        const popoverCardBody = document.createElement("div");

        popoverCard.classList.add("popover-card");
        
        // rootElement.appendChild(popoverCard);
        rootElement.insertBefore(popoverCard, rootElement.firstElementChild);
        popoverCard.appendChild(popoverCardTitle)
        popoverCard.appendChild(popoverCardBody)
        
        popoverCardTitle.textContent = "Popover title";
        popoverCardBody.textContent = "And here's some amazing content. It's very engaging. Right?";

        popoverCard.style.transform = "translate3d(631px, 565px)";
        popoverCard.style.marginLeft = "0.5rem";
        popoverCard.style.zIndex = "1060";
        popoverCard.style.display = "block";
        popoverCard.style.maxWidth = "276px";
        popoverCard.style.border = "1px solid #ebebeb";
        popoverCard.style.borderTopLeftRadius = "calc(0.3rem - 1px)";
        popoverCard.style.borderTopRightRadius = "calc(0.3rem - 1px)";
        popoverCard.style.margin = "0px"
        popoverCard.style.position = "fixed";
        popoverCard.style.marginLeft = "680px";
        popoverCard.style.marginTop = "100px";

        popoverCardTitle.style.padding = ".5rem .75rem";
        popoverCardTitle.style.marginBottom = "0";
        popoverCardTitle.style.marginTop = "0";
        popoverCardTitle.style.fontSize = "1rem";
        popoverCardTitle.style.backgroundColor = "#f7f7f7";
        popoverCardTitle.style.borderBottom = "1px solid #ebebeb";
        popoverCardTitle.style.borderTopLeftRadius = "calc(0.3rem - 1px)";
        popoverCardTitle.style.borderTopRightRadius = "calc(0.3rem - 1px)";
        popoverCardTitle.style.fontWeight = "500";
        popoverCardTitle.style.lineHeight = "1.2";

        popoverCardBody.style.padding = ".5rem .75rem";
        popoverCardBody.style.marginBottom = "0";
        popoverCardBody.style.marginTop = "0";
        popoverCardBody.style.fontSize = "1rem";
        popoverCardBody.style.backgroundColor = "#f7f7f";
        popoverCardBody.style.borderBottom = "1px solid #ebebeb";
        popoverCardBody.style.borderTopLeftRadius = "calc(0.3rem - 1px)";
        popoverCardBody.style.borderTopRightRadius = "calc(0.3rem - 1px)";
        popoverCardBody.style.fontWeight = "500";
        popoverCardBody.style.lineHeight = "1.2";
    }

    const createPopoverButton = () => {
        let isCardVisible = false;

        /* Создание элемента */
        const popoverButton = document.createElement("button");
        popoverButton.classList.add("popoverButton");
        popoverButton.textContent = "Click to toggle popover";
        rootElement.appendChild(popoverButton);
        /* Добавление стилей */
        // popoverButton.style.display = "block";
        popoverButton.style.marginLeft = "700px";
        popoverButton.style.marginRight = "auto";
        popoverButton.style.marginTop = "200px";
        popoverButton.style.backgroundColor = "#dc3545";
        popoverButton.style.borderColor = "#dc3545";
        popoverButton.style.color = "#FFFFFF";
        popoverButton.style.cursor = "pointer";
        popoverButton.style.fontSize = "1.25rem";
        popoverButton.style.lineHeight = "1.5";
        popoverButton.style.borderRadius = "0.3rem";
        popoverButton.style.padding = "0.5rem 1rem";

        popoverButton.addEventListener("mouseover", (event) => {
            popoverButton.style.backgroundColor = "#c82333";
            popoverButton.style.textDecoration = "none";
        });

        popoverButton.addEventListener("mouseout", (event) => {
            popoverButton.style.backgroundColor = "#dc3545";
        });

        popoverButton.addEventListener("click", () => {
            isCardVisible = !isCardVisible;
            if (isCardVisible) {
                createPopoverCard()
            } else {
                const elements = document.getElementsByClassName('popover-card');
                if (elements) {
                    elements[0].remove();
                } else {
                    console.error('Element does not exist')
                }
            }
        })
    };

    createPopoverButton();
 }());