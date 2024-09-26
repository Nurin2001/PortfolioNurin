//#region variables
let menulist = document.getElementById('menulist');
//#endregion

//#region (Load external HTML content)
fetch('home2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('top-page').innerHTML = data;
        const downloadResumeBtn = document.getElementById('dw-resume-btn');
        downloadResumeBtn.addEventListener('click', function(e) {
            rippleAnimate(e, downloadResumeBtn);
            // Delay the download to allow the ripple to animate
            setTimeout(() => {
                downloadResume();
            }, 990); // Adjust this timeout as needed (100 ms is usually sufficient)
        });
    })
.catch(error => console.error('Error loading file:', error));

fetch('gallery.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('gallery-page').innerHTML = data;
    })
.catch(error => console.error('Error loading file:', error));
//#endregion

//#region functions
window.addEventListener('resize', function() {
    if((window.innerWidth > 1024) && (menulist.style.maxHeight == "0px" || menulist.style.display == "")) {
        console.log('The window width is 1240px.');
        menulist.style.maxHeight = "100%"
    }
});

function toggleMenu() {
    if(menulist.style.maxHeight == "0px" || menulist.style.display == 'none') {
        menulist.style.maxHeight = "300px";
        menulist.style.display = 'block';
    }
    else menulist.style.maxHeight = "0px";
    const navEdu = document.getElementById('edu_page');
    const navWork = document.getElementById('work_page');
    const navProj = document.getElementById('project_page');
    const navAct = document.getElementById('activity_page');
    
    navEdu.addEventListener('click', () => menulist.style.maxHeight = "0px");
    navWork.addEventListener('click', () => menulist.style.maxHeight = "0px");
    navProj.addEventListener('click', () => menulist.style.maxHeight = "0px");
    navAct.addEventListener('click', () => menulist.style.maxHeight = "0px");
    const menuIcon = document.getElementById('menu-icon');

    if(menuIcon.style.display = 'block') {
    }
}

// Copy email to clipboard
function copyEmail() {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = "maisarahnurin38@gmail.com";
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);

    alert("My email is copied to your clipboard");
}

// Download resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'downloads/nurin-maisarah-resume.pdf';
    link.download = 'nurin-maisarah-resume.pdf';
    document.body.appendChild(link);
    link.click();
    alert("My resume is downloaded");
    document.body.removeChild(link);
}
//#endregion
//ripple animation
const rippleAnimate = (e, btn) => {
    const ripples = document.createElement('span');

    // Set the position of the span element at the click coordinates within the button
    const buttonRect = btn.getBoundingClientRect();
    ripples.style.left = (e.clientX - buttonRect.left) + 'px';
    ripples.style.top = (e.clientY - buttonRect.top) + 'px';

    // Append the span to the button
    btn.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 950);
};

//view hanyang cert
const viewTranscriptBtn = document.getElementById('hanyang-transcript');
viewTranscriptBtn.addEventListener('click', function(e) {
    rippleAnimate(e, viewTranscriptBtn);
    setTimeout(() => {
        window.open('transcriptHanyang.html', '_blank');
    }, 950);
});