function create(element, klas, location) {


    element = document.createElement(element);
    for (let i of klas) {
        element.classList.add(i);
    }

    if (location == 'body') {
        document.body.appendChild(element);
    }
    else {
        location.appendChild(element);
    }
    return element;
}


//////////////Header//////////////////
let header=create('header',['col-lg-12','d-flex','justify-content-center','align-items-center'],'body');
let divH1=create('div','',header);
let h1=create('h1','',divH1);
h1.innerText='My Website';
let pHeader=create('p',['mt-3'],divH1);
pHeader.innerText='A responsive website created by me.';

//////////////////////////////////////////////////////////
///////////////////DIV LINKS//////////////////////////////////

let divLink=create('div',['d-flex','bd-highlight','link'],'body');
let a1=create('a',['p-2','bd-highlight','home'],divLink);
a1.innerText='Home';
a1.href = "#";
let a2=create('a',['p-2','bd-highlight'],divLink);
a2.innerText='Link';
a2.href = "#";
let a3=create('a',['p-2','bd-highlight'],divLink);
a3.innerText='Link';
a3.href = "#";
let a4=create('a',['ml-auto','p-2','bd-highlight'],divLink);
a4.innerText='Link';
a4.href = "#";
////////////////////////////////////////////////////////////

let divContainerFluid= create('div',['container-fluid'],'body');
let divRow=create('div',['row'],divContainerFluid);

///////////////////////ASIDE////////////////////////////


let aside=create('aside',['col-lg-3','mb-5'],divRow);
let h3Aside=create('h3',['mt-5'],aside);
h3Aside.innerText='About ME';
let pFirst =create('p','',aside);
pFirst.innerText='Photo of me:';
let imgAside=create('img','',aside);
imgAside.src="image/messi.jpg";
let pSecond=create('p','',aside);
pSecond.innerText='Some text about me in culpa qui officia deserunt mollit anim..';
let h4Aside=create('h4','',aside);
h4Aside.innerText='More Text';
let pThirsd=create('p','',aside);
pThirsd.innerText='Lorem ipsum dolor sit ame.';
let divImgs=create('div',['imgs','mb-5'],aside);
let img1=create('img',['mb-4'],divImgs);
img1.src='image/profile-barcelona-2019.jpg';
let img2=create('img',['mb-4'],divImgs);
img2.src='image/comunicat-escut-fc-barcelona-corporativa.jpg';
let img3=create('img','',divImgs);
img3.src='image/5e8173bf39566531ecfe4424fce66d85_XL.jpg';

////////////////////////////////////////////////////////

////////////////////////MAIN/////////////////////////////

let main=create('main',['col-lg-9'],divRow);
let h3Main=create('h3',['mt-5'],main);
h3Main.innerText='TITLE HEADING';
let pMain=create('p','',main);
pMain.innerText='Title description, Dec 7, 2017';
let imgMain=create('img','',main);
imgMain.src="image/cover.jpg";
let pMain1=create('p','',main);
pMain1.innerText='Some text..';
let pMain2=create('p','',main);
pMain2.innerText='Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco.';

let h3MainSecond=create('h3',['mt-5'],main);
h3MainSecond.innerText='TITLE HEADING';
let pMainSecond=create('p','',main);
pMainSecond.innerText='Title description, Dec 7, 2017';
let imgMainSecond=create('img','',main);
imgMainSecond.src="image/images.png";
let pMainSecond1=create('p','',main);
pMainSecond1.innerText='Some text..';
let pMainSecond2=create('p','',main);
pMainSecond2.innerText='Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco.';


/////////////////////////////////////////////////////////


///////////////////FOOTER/////////////////////////////

let footer=create('footer','','body');
let h3Footer=create('h3',['text-center'],footer);
h3Footer.innerText='Footer';

let divFooter=create('div',['d-flex','justify-content-center','mt-5'],footer);
let imgFooter=create('img','',divFooter);
imgFooter.src='image/Webp.net-compress-image (3).png';


//////////////////////////////////////////////////////