const chooseusContainer = [
    { 
        Image: "assets/payment-pic.png",
        title: "Payment methods",
        description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
    },
    { 
        Image: "assets/search-pic.png",
        title: "Simple search process",
        description: "We checked it out, even the kid did it, <br> but it was my mom's friend's son",
    },
    { 
        Image: "assets/support-pic.png",
        title: "24/7 Support",
        description: "Is there something you don't<br>understand? Feel free to call us. <br> Phone number in the footer",
    },
    { 
        Image: "assets/nice-pic.png",
        title: "We are nice",
        description: "Fantasy is over, there will be something really convincing here",
    },

];

const renderProduct = chooseusContainer => {
    const container = document.getElementById('chooseusContainer');
    chooseusContainer.forEach(chooseusContainer => {
        container.innerHTML += `
           <div>
                    <img src="${chooseusContainer.Image}" alt="">
                    <h3>${chooseusContainer.title}</h3>
                    <p>${chooseusContainer.description}</p>
                </div>
        `;
    });
}

renderProduct(chooseusContainer);

const specialoffersContainer = [
    {
        image1: "assets/1st-bed.png",
        image2: "assets/rating.png",
        image3: "assets/favorite.png",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
    {
        image1: "assets/2nd-bed.png",
        image2: "assets/rating.png",
        image3: "assets/favorite.png",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
    {
        image1: "assets/3rd-bed.png",
        image2: "assets/rating.png",
        image3: "assets/favorite.png",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
   
]

const renderContainer = specialoffersContainer => {
    const container = document.getElementById('specialoffersContainer');
    specialoffersContainer.forEach(specialoffersContainer => {
        container.innerHTML += `
           <div class="first-bed" id="beds">
                    <img src="${specialoffersContainer.image1}" alt="" id="first-bed">
                    <img src="${specialoffersContainer.image2}" alt="" class="rating1">
                    <img src="${specialoffersContainer.image3}" alt="" class="favorite1">
                    <h4>${specialoffersContainer.title}</h4>
                    <p class="october">${specialoffersContainer.description1}</p>
                    <p class="price">${specialoffersContainer.description2}</p>
                </div>
        `
    });
}
renderContainer(specialoffersContainer);