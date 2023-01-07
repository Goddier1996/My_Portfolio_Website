function init() {

    PopUpSayShabbatShalom();
    Menu();

    ShowDataDime();
    StyleCursor();

    AutoShopCarusel();

    TapsPortfolio();

    ShowDataJsonMyWorksWebSite();
    ShowDataJsonMyWorksAppAndroid();
    ShowDataJsonMyWorksPython();
    ShowDataJsonMyWorksArtuino();

    CountProjectsWeb();
    CountProjectsAppPython();
    CountProjectsAppAndroid();
    CountProjectsAppArtuino();

    ChangeLanguage();
}

init();



function PopUpSayShabbatShalom() {

    let day = new Date();

    if (day.getDay() + 1 == 6 || day.getDay() + 1 == 7 && day.getHours() < 18) {

        Swal.fire({
            title: '<img class="popUpShabbatShalom" src="https://i.postimg.cc/L59Hbp5m/image-processing20191022-9183-1x6u2a4.gif"></img>',
            background: 'none',
            showConfirmButton: false,
            timer: 4000,
        })
    }
}




function ShowDataDime() {

    const dateCheckHourAndDay = new Date();
    const showDateDayMonthYear = new Date().toLocaleDateString("de-DE");;

    let timeData = dateCheckHourAndDay.getHours();
    let showDate = ``;
    let showResult = ``;

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = weekday[dateCheckHourAndDay.getDay()];

    if (timeData >= 5 && timeData <= 11) {

        showResult = `<div class="styleModelDate">Good morning
        <b class="hightImage">🌤️</b></div>`;
    }

    if (timeData >= 12 && timeData <= 16) {

        showResult = `<div class="styleModelDate">Good afternoon
        <b class="hightImage">☀️</b></div>`;
    }

    if (timeData >= 17 && timeData <= 19) {

        showResult = `<div class="styleModelDate">Good evening
        <b class="hightImage">✨</b></div>`;
    }

    if (timeData >= 20 || timeData <= 4) {

        showResult = `<div class="styleModelDate">Good night
        <b class="hightImage">🌕</b></div>`;
    }


    showDate = ` ${showResult} <p class="showDate"> ${day}<br/>${showDateDayMonthYear}</p> `;
    document.querySelector("#dayMonthYear").innerHTML = showDate;
}



function AutoShopCarusel() {

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



function Menu() {

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



function ChangeLanguage() {

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
            "titleName": " אני ארטיום קוט",
            "hi": "שלום לכולם",
            "info": " Front-End Developer & Mobile אני הנדסאי תוכנה",
            "text": ".יצירת פיתוח של אתרי אינטרנט וגם אפליקציות למובייל.ובנוסף יוצר תוכנת אלגוריתמים ומסד נתונים",
            "btn1": "קצת עליי",

            //about me text
            "aboutMe": "היי אני מומחה צעיר הנדסאי תוכנה.יוצר מגוון של פרוייקטים אתרי אינטרנט ואפליקציות ובנוסף יוצר אלגוריתם ותוכנות מסד נתונים.אני אוהב את העבודה שלי בתכנות ולאתגר את עצמי בדברים חדשים , אפשר לראות מגוון של פרוייקטים שונים שביצעתי בתיק העבודות שלי.יכולת עבודה בקבוצה/עצמאית .לומד כל יום דברים חדשים בתכנות ובנוסף לומד להתמודד עם בעיות שקיימות במהלך יצירת פרוייקטים. התחבבים שלי : (גיימר , לעקוב אחרי טכנולוגיות חדשות , רכבים , וטיול במגוון מקומות יפים שיש בעולם).",
            "aboutMeAge": "גיל : 26",
            "aboutMeGender": "מין : זכר",
            "aboutMeLanguage": "שפות : עברית , אנגלית , רוסית",
            "aboutMeCountry": "מדינה : ישראל",
            "aboutMeImmigrated": "עליתי ארצה מ : אוקראינה 2001",
            "downloadCVen": " (English)להורדה קורות חיים ",

            //Experience text
            "titleMyExperience1": "צבא הגנה ישראל",
            "titleMyExperience2": "שנקר הנדסאים , הנדסה.עיצוב.אמנות",
            "titleMyExperience3": "High-Q",
            "titleMyExperience4": "יצירת תיק עבודות",

            "aboutMyExperience1": "שירות בתפקיד תומך לחימה , בחיל טכנולוגיה ואחזקה 3 שנים",
            "aboutMyExperience2": " למדתי תואר הנדסאי תוכנה , בשנה הראשונה קיבלתי תעודת הצטיינות. מתמחה במבני נתונים ומונחה עצמאים,בנוסף למדתי C# , Python , JavaScript , ReactJs , React Native , NodeJs , Microsoft SQL Server , Java Android Development , Git , Arduino (C) , Ux/Ui",
            "aboutMyExperience3": "ביצעתי השלמת תעודת בגרות , כדאי לקבל תעודת בגרות מלאה , עבור לימודי הנדסאי תוכנה",
            "aboutMyExperience4": "יצירת אתרי אינטרנט , מסד נתונים , אלגוריתם . כל הפרוייקטים נשמרים בגיט . יוצר תיק עבודות להרחבת ידע ומגוון פרויקטים, לראיונות עבודה.",

            //Contact text
            "contactEmail": "דואר אלקטרוני",
            "contactPhone": "מספר טלפון שלי",
            "contactAddress": "כתובת",
            "contactAddressWhere": "ישראל - כפר יונה",

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
function SendMail() {

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