// import coschedule from "../images/coschedule.png";
const Projects = [
  {
    name: "Clone of Gearbest",
    about:
      "The clone of E-Commerce Website gearbest.com which is an innovative online Chinese company providing wholesale electronics, appliances, apparel, and accessories.",
    img: "./gearbest.png",
    gitrepo: "https://github.com/iamphenomenal2822/Gearbest",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML |CSS | JavaScript  ",
    tech_stackicons: [
      `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" width="50px"/>`,
      `<img src="https://png.pngitem.com/pimgs/s/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png" width="50px" height="50px"/>`,
      `<img src="https://w1.pngwing.com/pngs/951/574/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends.png" width="50px"/>`,
    ],
    project_link: "https://gearbestclone.netlify.app/",
    project_type: "Team Project",
  },
  {
    name: "YouTube Clone",
    about:
      "This project is a clone of YouTube application.",
    img: "./youtube.png",
    gitrepo: "https://github.com/iamphenomenal2822/you-tube",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "JavaScript | NodeJS | MongooDB ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      // `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
    ],
    project_link: "https://you-tube-app-clone.netlify.app/",
    project_type: "Team Project",
  },
   {
    name: "Weather Forecast",
    about:
      "It is a weather forecast app with google map. When user want to know the temperature of a particular place it will also show the location of that particular place",
    img: "./weather.png",
    gitrepo: "https://github.com/iamphenomenal2822/Weather-Forecast",
  //   blog: "https://medium.com/@mohanpalleti/our-group-project-connecting-frontend-and-backend-b159a686b3d0",
    tech_stack: "HTML | CSS | JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/redis.png"/>`,
    ],
    project_link: "https://five-days-weatherforecast.netlify.app/",
    project_type: "Individual",
  },
  // {
  //   name: "Trending Movies App",
  //   about:
  //     "This is a mini-app which shows trending movies and movies you search for (Implementing basic search functionality with optimizing the performance using debouncing.) built with HTML , CSS , JS .",
  //   img: "./screenshot.png",
  //   gitrepo: "https://github.com/mohan-palleti/Trending-movies",
  //   blog: "",
  //   tech_stack: "HTML | CSS | JAVASCRIPT | API's",
  //   tech_stackicons: [
  //     `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
  //     `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
  //     `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
  //     `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
  //   ],
  //   project_link: "https://trending-filmy.netlify.app/",
  //   project_type: "Individual Project",
  // },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="photo" class="pro-i">
      <div class="project-desc"> <h1 class="project-name"><b>${
        pro.name
      }</b></h1> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <button> <a href=${
        pro.project_link
      } target="_blank" class="see-project">LIVE</a></button>
      <button> <a href=${
        pro.gitrepo
      } target="_blank" class="github-repo">GitHub💻</a> </button>
      
     
      </div>
    
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span >${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      </span> </div>
     
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
