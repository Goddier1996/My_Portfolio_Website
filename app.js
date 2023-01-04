
//menu responsive
menu();

//load pop auto when web site up
popup()

//style cursor in web site
StyleCursor();

//show data web site from json file
ShowDataJsonMyWorksWebSite();

//show data android app from json file
ShowDataJsonMyWorksAppAndroid();

//show data python from json file
ShowDataJsonMyWorksPython();

//show data C# from json file
ShowDataJsonMyWorksArtuino();

//count web
CountProjectsWeb();

//count python
CountProjectsAppPython();

//count Android apps in json file
CountProjectsAppAndroid();

//count artuino apps in json file
CountProjectsAppArtuino();


//show my skils from josn file
// ShowDataJsonMySkils();
// ShowDataJsonMySkils2();
// ShowDataJsonMySkils3();
// ShowDataJsonMySkils4();
// ShowDataJsonMySkils5();
// ShowDataJsonMySkils6();
autoShopCarusel();


//taps protfolio
TapsPortfolio();

//seleact language
changeLanguage();

showDataDime();


//pop up auto when load page
function popup() {

    // Swal.fire({
    //     background: 'none',
    //     showConfirmButton: false,
    //     timer: 1000,
    //     html: '<img class="popUp" src="https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif"></img>'
    // })


};


function showDataDime() {

    const data = new Date();
    let showDate = `${data.getDay() + 1} / ${data.getMonth() + 1} / ${data.getFullYear()}`
    document.querySelector("#dayMonthYear").innerHTML = showDate;
}



function autoShopCarusel() {
    let root = document.documentElement; //לקחת מ css
    let marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    let marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
}



//show popUp info Apps site in my portfolio , info and video
function showInfoPortfolio(info, videoInfo) {

    Swal.fire({
        html: `<div>
                  <div class="infoApp"><video controls autoplay loop muted playsinline src="${videoInfo}"></video></div>
                  <br/><p>${info}</p>
               </div>`,
        confirmButtonText: 'Cool :)',
        confirmButtonColor: 'green'
    })
}




//show my web works from json file
function ShowDataJsonMyWorksWebSite() {

    fetch("/json/WebSites.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let placeholder = document.querySelector("#myPortfolioWeb");
            let out = "";

            for (let product of products) {
                out += `

             <div class="box">
                <img src="${product.image}">

                <h3> ${product.NameProject} <br/> <p class="skilsPortfolio">Skils : ${product.Skils}</p></h3>
                
                <div class="icons">
                   <a href="${product.Link}" class="fas fa-link"></a>
                   <a href="${product.Git}" class="fab fa-github"></a>
                   <a OnClick="showInfoPortfolio('${product.About}','${product.video}')" class="fa fa-info-circle"></a>
                </div>
            </div>

          `;
            }


            placeholder.innerHTML = out;
        });
}




//show my app android works from json file
function ShowDataJsonMyWorksAppAndroid() {

    fetch("/json/AppAndroid.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let placeholder = document.querySelector("#myPortfolioAndroidApp");
            let out = "";

            for (let product of products) {
                out += `

                <div class="box">
                    <img src="${product.image}">

                    <h3> ${product.NameProject} <br/> <p class="skilsPortfolio">Skils : ${product.Skils}</p></h3>

                   <div class="icons">
                      <a href="${product.Link}" class="fab fa-github"></a>
                      <a OnClick="showInfoPortfolio('${product.About}','${product.video}')" class="fa fa-info-circle"></a>
                    </div>
                </div> 
          `;
            }

            placeholder.innerHTML = out;
        });
}



//show my python works from json file
function ShowDataJsonMyWorksPython() {

    fetch("/json/Python.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let placeholder = document.querySelector("#myPortfolioPythonApp");
            let out = "";

            for (let product of products) {
                out += `

                <div class="box">
                    <img src="${product.image}">

                    <h3> ${product.NameProject} <br/> <p class="skilsPortfolio">Skils : ${product.Skils}</p></h3>

                   <div class="icons">
                      <a href="${product.Link}" class="fab fa-github"></a>
                      <a OnClick="showInfoPortfolio('${product.About}','${product.video}')" class="fa fa-info-circle"></a>
                    </div>
                </div> 
          `;
            }

            placeholder.innerHTML = out;
        });
}




//show my artuino works from json file
function ShowDataJsonMyWorksArtuino() {

    fetch("/json/Artuino.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let placeholder = document.querySelector("#myPortfolioArtuinoApp");
            let out = "";

            for (let product of products) {
                out += `

            <div class="box">
                <img src="${product.image}">

                <h3> ${product.NameProject} <br/> <p class="skilsPortfolio">Skils : ${product.Skils}</p></h3>

               <div class="icons">
                  <a href="${product.Link}" class="fa fa-code"></a>
                  <a OnClick="showInfoPortfolio('${product.About}','${product.video}')" class="fa fa-info-circle"></a>
                </div>
            </div> 
      `;
            }

            placeholder.innerHTML = out;
        });
}




//show my skils from json file
// function ShowDataJsonMySkils() {

//     fetch("/json/skilsFront.json")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (products) {

//             let placeholder = document.querySelector("#box");
//             let out = "";

//             for (let product of products) {
//                 out += `
//                 <div class="box">
//                     <img src="${product.image}"  width="auto" height="70">
//                 </div>
//           `;
//             }

//             placeholder.innerHTML = out;
//         });
// }



// function ShowDataJsonMySkils2() {

//     fetch("/json/backend.json")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (products) {

//             let placeholder = document.querySelector("#box2");
//             let out = "";

//             for (let product of products) {
//                 out += `


//                 <div class="box">
//                     <img src="${product.image}"  width="auto" height="70">
//                 </div>
//           `;
//             }

//             placeholder.innerHTML = out;
//         });
// }


// function ShowDataJsonMySkils3() {

//     fetch("/json/dataBase.json")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (products) {

//             let placeholder = document.querySelector("#box3");
//             let out = "";

//             for (let product of products) {
//                 out += `


//                 <div class="box">
//                     <img src="${product.image}"  width="auto" height="70">
//                 </div>
//           `;
//             }

//             placeholder.innerHTML = out;
//         });
// }


// function ShowDataJsonMySkils4() {

//     fetch("/json/Algorithm .json")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (products) {

//             let placeholder = document.querySelector("#box4");
//             let out = "";

//             for (let product of products) {
//                 out += `


//                 <div class="box">
//                     <img src="${product.image}"  width="auto" height="70">
//                 </div>
//           `;
//             }

//             placeholder.innerHTML = out;
//         });
// }


// function ShowDataJsonMySkils5() {

//     fetch("/json/adobe.json")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (products) {

//             let placeholder = document.querySelector("#box5");
//             let out = "";

//             for (let product of products) {
//                 out += `


//                 <div class="box">
//                     <img src="${product.image}"  width="auto" height="70">
//                 </div>
//           `;
//             }

//             placeholder.innerHTML = out;
//         });
// }


// function ShowDataJsonMySkils6() {

//     fetch("/json/Other.json")

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (products) {

//             let placeholder = document.querySelector("#box6");
//             let out = "";

//             for (let product of products) {
//                 out += `


//                 <div class="box">
//                     <img src="${product.image}"  width="auto" height="70">
//                 </div>
//           `;
//             }

//             placeholder.innerHTML = out;
//         });
// }




//count web
function CountProjectsWeb() {

    fetch("/json/WebSites.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            let out = "";
            let placeholder = document.querySelector("#countWeb");

            let count = Object.keys(products).length;

            out += `
                <h1 class="titleWebSits"><span> web </span> Site &<span> App </span>  - ${count} </h1>
          `;

            placeholder.innerHTML = out;
        });
}



//count app android
function CountProjectsAppAndroid() {

    fetch("/json/AppAndroid.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let out = "";
            let placeholder = document.querySelector("#countAndroidApp");

            let count = Object.keys(products).length;

            out += `
                <h1 class="titleWebSits"><span>Android </span> App  - ${count}</h1>
          `;

            placeholder.innerHTML = out;
        });
}



//count python app
function CountProjectsAppPython() {

    fetch("/json/Python.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let out = "";
            let placeholder = document.querySelector("#countPythonApp");

            let count = Object.keys(products).length;

            out += `
                <h1 class="titleWebSits"><span>Python</span>  App  - ${count}</h1>
          `;

            placeholder.innerHTML = out;
        });
}



//count app artuino
function CountProjectsAppArtuino() {

    fetch("/json/Artuino.json")

        .then(function (response) {
            return response.json();
        })
        .then(function (products) {

            let out = "";
            let placeholder = document.querySelector("#countArtuino");

            let count = Object.keys(products).length;

            out += `
                <h1 class="titleWebSits"><span>Arduino </span> - ${count}</h1>
          `;

            placeholder.innerHTML = out;
        });
}



//taps in my portfolio
function TapsPortfolio() {

    const tabs = document.querySelector('.tabs');
    const tabButtons = tabs.querySelectorAll('[role="tab"]');
    const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

    function handleTabClick(event) {
        // hide all tab panels
        tabPanels.forEach(panel => {
            panel.hidden = true;
        });

        // mark all tab buttons as unselected
        tabButtons.forEach(tab => {
            tab.setAttribute('aria-selected', false);
        });

        // mark the clicked tab as selected
        event.currentTarget.setAttribute('aria-selected', true);

        // find the associated tab panel and show it - associated by "aria-labelledby"
        const { id } = event.currentTarget;

        const tabPanel = tabPanels.find(
            panel => panel.getAttribute('aria-labelledby') === id
        );
        tabPanel.hidden = false;
    }

    tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
}



//menu
function menu() {

    let menu = document.querySelector('#menu-bars');
    let header = document.querySelector('header');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }
}



//style cursor
function StyleCursor() {

    let cursor1 = document.querySelector('.cursor-1');
    let cursor2 = document.querySelector('.cursor-2');

    window.onmousemove = (e) => {
        cursor1.style.top = e.pageY + 'px';
        cursor1.style.left = e.pageX + 'px';
        cursor2.style.top = e.pageY + 'px';
        cursor2.style.left = e.pageX + 'px';
    }

    //where was 'a' we active cursor
    document.querySelectorAll('a').forEach(links => {

        links.onmouseenter = () => {
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        }

        links.onmouseleave = () => {
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        }

    });
}




//change Language
function changeLanguage() {

    //start page
    const langEl = document.querySelector('.langWrap');
    const link = document.querySelectorAll('a');
    const titleEl = document.querySelector('.hi');
    const descrEl = document.querySelector('.info');


    //menu
    const homeMenu = document.querySelector('.homeMenu');
    const homeAbout = document.querySelector('.homeAbout');
    const homeExperience = document.querySelector('.homeExperience');
    const homePortfolio = document.querySelector('.homePortfolio');
    const homeContact = document.querySelector('.homeContact');

    const select = document.querySelector('.select');

    const name = document.querySelector('.name');
    const TextTitle = document.querySelector('.text');
    const AboutBtn = document.querySelector('.btn');

    //about me text
    const aboutMe = document.querySelector('.aboutMe');
    const aboutMeAge = document.querySelector('.age');
    const aboutMeGender = document.querySelector('.gender');
    const aboutMeLanguage = document.querySelector('.language');
    const aboutMeCountry = document.querySelector('.country');
    const aboutMeImmigrated = document.querySelector('.immigrated');
    const downloadCVen = document.querySelector('.CVen');

    //Experience text
    const titleMyExperienc1 = document.querySelector('.titleMyExperience1');
    const titleMyExperienc2 = document.querySelector('.titleMyExperience2');
    const titleMyExperienc3 = document.querySelector('.titleMyExperience3');
    const titleMyExperienc4 = document.querySelector('.titleMyExperience4');

    const aboutMyExperience1 = document.querySelector('.aboutMyExperience1');
    const aboutMyExperience2 = document.querySelector('.aboutMyExperience2');
    const aboutMyExperience3 = document.querySelector('.aboutMyExperience3');
    const aboutMyExperience4 = document.querySelector('.aboutMyExperience4');

    //Contact text
    const contactEmail = document.querySelector('.contactEmail');
    const contactPhone = document.querySelector('.contactPhone');
    const contactAddress = document.querySelector('.contactAddress');
    const contactAddressWhere = document.querySelector('.contactAddressWhere');


    //send email
    const Name = document.querySelector('.Name');
    const Email = document.querySelector('.Email');
    const PhoneNumber = document.querySelector('.PhoneNumber');
    const Msg = document.querySelector('.Msg');
    const Btn = document.querySelector('.Btn');



    link.forEach(el => {

        el.addEventListener('click', () => {
            langEl.querySelector('.active').classList.remove('active');
            el.classList.add('active');

            const attr = el.getAttribute('language');

            //menu
            homeMenu.textContent = data[attr].homeMenu;
            homeAbout.textContent = data[attr].homeAbout;
            homeExperience.textContent = data[attr].homeExperience;
            homePortfolio.textContent = data[attr].homePortfolio;
            homeContact.textContent = data[attr].homeContact;
            select.textContent = data[attr].select;

            //start page
            titleEl.textContent = data[attr].hi;
            descrEl.textContent = data[attr].info;
            TextTitle.textContent = data[attr].text;
            AboutBtn.textContent = data[attr].btn1;
            name.textContent = data[attr].titleName;

            //about me text
            aboutMe.textContent = data[attr].aboutMe;
            aboutMeAge.textContent = data[attr].aboutMeAge;
            aboutMeGender.textContent = data[attr].aboutMeGender;
            aboutMeLanguage.textContent = data[attr].aboutMeLanguage;
            aboutMeCountry.textContent = data[attr].aboutMeCountry;
            aboutMeImmigrated.textContent = data[attr].aboutMeImmigrated;
            downloadCVen.textContent = data[attr].downloadCVen;

            //Experience text
            titleMyExperienc1.textContent = data[attr].titleMyExperience1;
            titleMyExperienc2.textContent = data[attr].titleMyExperience2;
            titleMyExperienc3.textContent = data[attr].titleMyExperience3;
            titleMyExperienc4.textContent = data[attr].titleMyExperience4;

            aboutMyExperience1.textContent = data[attr].aboutMyExperience1;
            aboutMyExperience2.textContent = data[attr].aboutMyExperience2;
            aboutMyExperience3.textContent = data[attr].aboutMyExperience3;
            aboutMyExperience4.textContent = data[attr].aboutMyExperience4;

            //Contact text
            contactEmail.textContent = data[attr].contactEmail;
            contactPhone.textContent = data[attr].contactPhone;
            contactAddress.textContent = data[attr].contactAddress;
            contactAddressWhere.textContent = data[attr].contactAddressWhere;

            //send email
            Name.placeholder = data[attr].Name;
            Email.placeholder = data[attr].Email;
            PhoneNumber.placeholder = data[attr].PhoneNumber;
            Msg.placeholder = data[attr].Msg;
            Btn.value = data[attr].Btn;
        });
    });


    let data = {
        "hebrew": {

            //menu
            "homeMenu": " בית ",
            "homeAbout": " קצת עליי ",
            "homeExperience": " ניסיון ",
            "homePortfolio": " תיק עבודות ",
            "homeContact": " יצירת קשר ",
            "select": ": בחר שפה ",

            //start page
            "titleName": " ---------- ---------- ----------",
            "hi": "---------- ----------",
            "info": " --------------------- ---------- & ---------- 👨🏻‍💻 ---------- ---------- ----------",
            "text": ".י--------------------",
            "btn1": "---------- ----------",

            //about me text
            "aboutMe": "----------. ----------.",
            "aboutMeAge": "גיל : ----------",
            "aboutMeGender": "מין : ----------",
            "aboutMeLanguage": "שפות : ---------- , ---------- , ----------",
            "aboutMeCountry": "מדינה : ----------",
            "aboutMeImmigrated": "עליתי ארצה מ : ---------- ----------",
            "downloadCVen": " (English)להורדה קורות חיים ",

            //Experience text
            "titleMyExperience1": "---------- ---------- ----------",
            "titleMyExperience2": "---------- ---------- , ----------.----------.----------",
            "titleMyExperience3": "---------------------",
            "titleMyExperience4": "---------- ---------- ----------",

            "aboutMyExperience1": "-----------------------------",
            "aboutMyExperience2": " ---------- ---------- ---------- ---------- , ---------- ------------------------------ , --------------------/----------",
            "aboutMyExperience3": "---------- ----------",
            "aboutMyExperience4": "-------------------- ----------.",

            //Contact text
            "contactEmail": "דואר אלקטרוני",
            "contactPhone": "מספר טלפון שלי",
            "contactAddress": "כתובת",
            "contactAddressWhere": "---------- - ---------- ----------",

            //send email
            "Name": " שם פרטי שלך ",
            "Email": " דואר אלקטרוני שלך ",
            "PhoneNumber": " מספר טלפון שלך ",
            "Msg": "כתוב הודעה",
            "Btn": " שלח הודעה ",

        }
    }
}




//send email
function sendMail() {

    let tempParams = {

        from_name: document.getElementById("fromName").value,
        from_email: document.getElementById("fromEmail").value,
        from_number: document.getElementById("fromPhoneNumber").value,
        message: document.getElementById("msg").value
    };


    if (tempParams.from_name === '' || tempParams.from_email === '' || tempParams.from_number === '' || tempParams.message === '') {

        Swal.fire({
            html: '<h4>Check with all the data complete !</h4>',
            icon: 'warning',
            confirmButtonColor: 'red'
        })
        return;
    }


    else {

        emailjs.send('privateData', 'privateData', tempParams)

            .then(function (res) {
                Swal.fire({
                    html: '<h4>success send your messsage</h4>',
                    icon: 'success',
                    confirmButtonColor: 'green'
                }).then((result) => {

                    if (result.isConfirmed) {
                        window.location.reload(false);
                    }
                })
            })
    }
}