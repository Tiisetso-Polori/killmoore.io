const Resume = {

    projects: [
        {
            "key": 1,
            "title": "Learner Management System (Reporting Tool)",
            "stack": ["C#", ".Net", "MSSQL", "JavaScript"],
            "link": "Link Unavailable, merSETA private application",
            "description": `Application for the merSETA used for capturing learner records. Developed with Code OnTime Code Generator, which generated C# ASP.Net code, as well as some XML and CSS. Wrote Business Rules in C#, JavaScript and SQL to facilitate control of user inputs according to SETMIS standards.
 I was also partly involved in the administration of the database of this system: writing views for reports, writing stored procedures, adding / altering constraints such as indices, keys, default values, identity columns from incrementing primary key values, creating history tables as well as triggers.`
        },
        {
            "key": 2,
            "title": "DG Evaluation Platform",
            "stack": ["C#", ".Net", "MSSQL", "JavaScript"],
            "link": "Link Unavailable, merSETA private application",
            "description": `An application I developed to aid in generating Memorandum of Agreement documents with multiple skills development learning programme types that companies would have applied for under the merSETA Discretionary Grant for implementation of training under the Skills Development Act: 
Designed and Created a MS SQL Server database on one of the local servers to accommodate the data from the main database; implemented ETL jobs in SSIS to migrate relevant entity information (Company, User, Company Address, Region, Grant, Grant Intervention); used Code OnTime Code generator to generate the front-end application; implemented the MoA template as well as information that can be prepopulated using SSRS to allow extraction of pdf documents for each Company's Grant Application.`
        },
        {
            "key": 3,
            "title": "Cafe Management System",
            "stack": ["ReactJs", "NodeJs", "MSSQL", "JavaScript", "CSS"],
            "link": "Link Unavailable",
            "description": `An application aimed at extending my skills in Full Stack Development: Implemented a MS SQL Server database to store the different information one would have in a Cafe (Orders, Stock, Menu Items, Reservations, etc.); added a NodeJs + ExpressJs back-end with APIs to do facilitate interaction with the database, such as CRUD operations on the various tables, etc.; Added a React front-end to allow users to see the UI for capturing of data in a way that they would find easy, as well as having pages for dashboards to see the performance of the restaurant / cafe.`
        },
        {
            "key": 4,
            "title": "React Calculator",
            "stack": ["React", "TypeScript", "CSS"],
            "link": "Link Unavailable",
            "description": `A basic react calculator that was the first project in me learning TypeScript and adding to my knowledge of JavaScript.`
        }

    ],

    loadProjects: () => {
        const container = document.getElementById("projects");
        container.innerHTML = Resume.projects.map(project => `
            <article class="project-item" key=${project.key}>
                <h4 class="project-title">${project.title}</h4>
                <ul class="project-stack-list">
                    ${project.stack.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <div class="project-description">${project.description}</div>
                <div class="project-link">
                    ${project.link.startsWith('http') ?
                `<a href="${project.link}" target="_blank">${project.title} Source Code</a>` :
                `<span class="disabled-link">${project.link}</span>`
            }
                </div> 
            </article>
        `).join('');
    },
};

const Photo = {

    path: "./assets/images/",
    //path2: "../",

    shoots: [
        {
            id: 1,
            header: 'Blooming',
            //cover:blooming,
            //dir: '../Profile/react-gallery/src/resrc/blooming/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'] //,'7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','13.jpg','14.jpg','15.jpg']
        },
        {
            id: 2,
            header: 'Bhosso',
            //cover:bhosso,
            //dir: '../Profile/react-gallery/src/resrc/bhosso/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
        },
        {
            id: 3,
            header: 'Brown',
            //cover:brown,
            //dir: '../Profile/react-gallery/src/resrc/brown/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '11.jpg', '12.jpg', '13.jpg', '13.jpg', '14.jpg', '15.jpg']
        },
        {
            id: 4,
            header: 'eJozi',
            //cover:ejozi,
            //dir: '../Profile/react-gallery/src/resrc/ejozi/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg','13.jpg', '14.jpg', '15.jpg']
        },
        {
            id: 5,
            header: 'Primrose',
            //cover:primrose,
            //dir: '../Profile/react-gallery/src/resrc/primrose/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
        },
        {
            id: 6,
            header: 'eGumbini',
            //cover:egumbini, 
            //dir: '../Profile/react-gallery/src/resrc/egumbini/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
        },
        {
            id: 7,
            header: 'Melanin',
            //cover:melanin,
            //dir: '../Profile/react-gallery/src/resrc/melanin/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
        },
        {
            id: 8,
            header: 'Afrobeaut',
            //cover:afrobeaut,
            //dir: '../Profile/react-gallery/src/resrc/afrobeaut/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
        },
        {
            id: 9,
            header: 'Goldie',
            //cover:goldie,
            //dir: '../Profile/react-gallery/src/resrc/goldie/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
        },
        {
            id: 11,
            header: 'Serene',
            //cover:serene,
            //dir: '../Profile/react-gallery/src/resrc/serene/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
        }
        ,
        {
            id: 12,
            header: 'Anti',
            //cover:anti,
            //dir: '../Profile/react-gallery/src/resrc/anti/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg']
        }
        ,
        {
            id: 13,
            header: 'Dangerous',
            //cover:dangerous,
            //dir: '../Profile/react-gallery/src/resrc/dangerous/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
        }
        ,
        {
            id: 14,
            header: 'Shoot 3',
            //cover:shoot3,
            //dir: '../Profile/react-gallery/src/resrc/shoot 3/',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']
        },
        {
            id: 15,
            header: 'Muse',
            photos: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg']
        }
    ],

    loadShoots: () => {

        /*
                `<figure id="photo-item" onclick="GalleryRunner.viewImages('eJozi')" style="background-image: url('../Profile/react-gallery/src/resrc/ejozi/0.jpg');">
                            <img src="../Profile/react-gallery/src/resrc/ejozi.jpg" alt="">
                            <h3>eJozi</h3>
                        </figure>`
        
                 `<figure id="photo-item" style="background-image: url(${shoot.//dir}+${shoot.photos[0]});" key="${shoot.id}">
                            <img src="../Profile/react-gallery/src/resrc/ejozi.jpg" alt="">
                            <h3>${shoot.title}</h3>
                        </figure>`
        
        
                            `<figure class="photo-item" 
                    style="background-image: url(${Photo.path}${shoot.header.toLowerCase()}/${shoot.photos[0]});" 
                    key="${shoot.id}"
                    onclick="Photo.viewShoot('${shoot.header}')"
                    >
                            <h3>${shoot.header}</h3>
                        </figure>`).join('');
        
        */
        // console.log("I am entering");
        const container2 = document.getElementById("photoshoots");

        //console.log("got the element");
        container2.innerHTML = Photo.shoots.map(shoot =>
            `<figure class="photo-item" 
            style="background-image: url(${Photo.path}${shoot.header.toLowerCase()}/${shoot.photos[0]});" 
            key="${shoot.id}"
            onclick="Photo.viewShoot('${shoot.header}')"
            >
                    <h3>${shoot.header}</h3>
                </figure>`).join('');       // console.log("I am leaving")
    },

    viewShoot: (shootHeader) => {
        const shootIndex = Photo.shoots.findIndex(shoot => shoot.header === shootHeader);
        if (shootIndex !== -1) {
            Photo.currentShootIndex = shootIndex;
            Photo.currentIndex = 0;
            Photo.updateImage();
            Photo.updateButtons();
            var box = document.getElementById("photo-view")
            box.style.display = 'flex';
            document.getElementById("middle").style.display = "none";

        }
    },

    hideShoot() {

        var box = document.getElementById("photo-view")
        box.style.display = 'none';
        document.getElementById("middle").style.display = "flex";

    },

    currentIndex: 0,
    currentShootIndex: 0, // Track which shoot is being viewed
    elements: {
        currentImage: null,
        prevBtn: null,
        nextBtn: null,
        middle: null,
        imageCaption: null,
        imageIndex: null

    },

    initViewer: () => {
        // Initialize elements after DOM is ready
        Photo.elements.currentImage = document.getElementById("current-image");
        Photo.elements.prevBtn = document.querySelector('.prev-btn');
        Photo.elements.nextBtn = document.querySelector('.next-btn');
        Photo.elements.middle = document.getElementById("middle");
        Photo.elements.imageCaption = document.getElementById("image-caption");
        Photo.elements.imageIndex = document.getElementById("image-index");

        // Set up event listeners
        Photo.elements.prevBtn.addEventListener('click', Photo.prevImage);
        Photo.elements.nextBtn.addEventListener('click', Photo.nextImage);

        // Initialize keyboard navigation
        document.addEventListener('keydown', Photo.handleKeyboardNavigation);

        Photo.updateImage();
        Photo.updateButtons();
    },

    handleKeyboardNavigation: (e) => {
        if (e.key === 'ArrowLeft') {
            Photo.prevImage();
        } else if (e.key === 'ArrowRight') {
            Photo.nextImage();
        }
    },

    updateImage: () => {
        const currentShoot = Photo.shoots[Photo.currentShootIndex];
        Photo.elements.currentImage.src = `${Photo.path}${currentShoot.header}/${currentShoot.photos[Photo.currentIndex]}`;
        Photo.elements.currentImage.alt = currentShoot.header;
        Photo.elements.imageCaption.textContent = `Shoot : ${currentShoot.header}`;
        Photo.elements.imageIndex.textContent = `${Photo.currentIndex + 1}/${currentShoot.photos.length}`;
    },

    updateButtons: () => {
        const currentShoot = Photo.shoots[Photo.currentShootIndex];
        Photo.elements.prevBtn.disabled = Photo.currentIndex === 0;
        Photo.elements.nextBtn.disabled = Photo.currentIndex === currentShoot.photos.length - 1;
    },

    nextImage: () => {
        const currentShoot = Photo.shoots[Photo.currentShootIndex];
        if (Photo.currentIndex < currentShoot.photos.length - 1) {
            Photo.currentIndex++;
            Photo.updateImage();
            Photo.updateButtons();
        }
    },

    prevImage: () => {
        if (Photo.currentIndex > 0) {
            Photo.currentIndex--;
            Photo.updateImage();
            Photo.updateButtons();
        }
    },


};


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        Photo.prevImage();
    } else if (e.key === 'ArrowRight') {
        Photo.nextImage();
    }
})

window.addEventListener('DOMContentLoaded', () => {
    Photo.loadShoots();
    Resume.loadProjects();
    Photo.initViewer();
});

// LOADS CONTENT AFTER EVERYTHING HAS LOADED;
//window.onload = loadContent;
// FOR STATIC LOADING - MIOGHT MISS STYLING
//document.addEventListener('DOMContentLoaded',Resume.loadProjects());
