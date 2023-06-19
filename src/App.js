// import "./App.css"
// import ListItems from "./Components/ListItems"


// const frontendLanguages = [
//   {
//     name: 'HTML',
//     description: 'HTML (Hypertext Markup Language) is the standard markup language for creating the structure of web pages. It uses tags to define elements such as headings, paragraphs, images, links, and more.'
//   },
//   {
//     name: 'CSS',
//     description: 'CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML. It defines how HTML elements should be displayed on the screen, paper, or other media.'
//   },
//   {
//     name: 'JavaScript',
//     description: 'JavaScript is a high-level programming language primarily used for adding interactivity and behavior to web pages. It allows you to dynamically manipulate website content, respond to user actions, and interact with servers.'
//   },
//   {
//     name: 'TypeScript',
//     description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, which enhances the development experience by catching errors early and enabling better code organization and tooling support.'
//   },
//   {
//     name: 'React',
//     description: 'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them when the underlying data changes. React follows a declarative approach to build interactive UIs.'
//   },
//   {
//     name: 'Vue.js',
//     description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It provides a flexible architecture that focuses on the view layer and can be easily integrated into existing projects. Vue.js emphasizes simplicity and ease of use.'
//   },
//   {
//     name: 'Angular',
//     description: 'Angular is a comprehensive JavaScript framework for building web applications. It provides a full-featured development platform with features like two-way data binding, dependency injection, and a component-based architecture.'
//   },
//   {
//     name: 'Sass',
//     description: 'Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends the capabilities of CSS. It adds features like variables, nesting, mixins, and functions, allowing you to write more maintainable and reusable stylesheets.'
//   },
//   {
//     name: 'Less',
//     description: 'Less is another CSS preprocessor that simplifies and enhances the process of writing CSS. It introduces variables, mixins, nesting, and other features, making it easier to manage and organize CSS code.'
//   }
// ];
// const App = () => {
//   return (
//     <>
//       <ul>
//         {frontendLanguages.map((item) => {
//           return(
//             <ListItems key={item.name} item={item} />
//           )
//         })}
         
//       </ul>
//     </>
//   );
// };

// export default App;



// import { Component } from "react";
// class App extends Component{

//   state = { inputValue: ""};

//   inputChanged = (event) => {
//     this.setState({ inputValue: event.target.value });
//   }
//   render() {
//     const { inputValue } = this.state;
//     return (
//       <>
//         <h1>Your Name:{inputValue}</h1>
//         <input type="text" onChange={this.inputChanged}/>
//       </>
//     )
//   }
// }

// export default App;



// import MangoesAndBananas from "./Components/MangoesAndBananas"

// const App = () => {
  

//   return(
//     <MangoesAndBananas />
//   )
// }

// export default App;


///Table program
// import Table from "./Components/Table"
// const array = [
//   { num: 1 },
//   { num: 2 },
//   { num: 3 },
//   { num: 4 },
//   { num: 5 },
//   { num: 6 },
//   { num: 7 },
//   { num: 8 },
//   { num: 9 },
//   { num: 10 }
//  ]
    
// const App = () => {
      
    
//   return (
//     <>
//       <div>
//         <h1>12 Table</h1>
//         <ul>
//           {array.map((item) => {
//             return (
//               <Table key={item.num} data={item} />
//             )
//           })}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default App;


// import { Component } from "react";
// class App extends Component{
//   state = { value: false };

//   btnClicked = () => {
//     const { value } = this.state;
//     this.setState({ value: !value});
//   }
//   render() {
//     const { value } = this.state;
//     return (
//       <>
//         <h1>Welcome!</h1>
//         <h1>Thank you! Happy Learning!</h1>
//         <button onClick={this.btnClicked}>{value === false ? "Subscribe" :"Subscribed"}</button>
//       </>
//     )
//   }
// }
// export default App;


// import { Component } from "react";
// import "./App.css";

// class App extends Component{
//   state = { value: false, mode:""};

//   mode = () => {
//     const { value } = this.state;
//     this.setState({ value: !value });
//   }

//   render() {
//     const { value } = this.state;
//     return (
//       <>
//         <div className={value === false? "bg-color" : "dark-mode"}>
//           <h1>Click to ChangeMode</h1>
//           <button onClick={this.mode}>{value===false? "Light Mode" : "Dark Mode" }</button>
//         </div>
//       </>
//     )
//   }
// }
// export default App;


// import { Component } from "react";
// import Table from "./Components/Table"
// import "./App.css"
// const teams = [
//     {
//       name: "Royal Challengers Bangalore",
//       id: "RCB",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
//     },
//     {
//       name: "Kolkata Knight Riders",
//       id: "KKR",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png",
//     },
//     {
//       name: "Kings XI Punjab",
//       id: "KXP",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png",
//     },
//     {
//       name: "Chennai Super Kings",
//       id: "CSK",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/csk-logo-img.png",
//     },
//     {
//       name: "Rajasthan Royals",
//       id: "RR",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
//     },
//     {
//       name: "Mumbai Indians",
//       id: "MI",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/mi-logo-img.png",
//     },
//     {
//       name: "Sunrisers Hyderabad",
//       id: "SH",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/srh-logo-img.png",
//     },
//     {
//       name: "Delhi Capitals",
//       id: "DC",
//       image:
//         "https://assets.ccbp.in/frontend/react-js/dc-logo-img.png",
//     },
// ]
  

// class App extends Component{
//   state = {inputValue:""}


//   inputChanged = (event) => {
//     this.setState({ inputValue: event.target.value });

//   };
//   searchTeam = (event) => {
//     const { inputValue } = this.state;
//     const lower = inputValue.toLowerCase();
    
//     const result = teams.filter((each) => each.name.toLowerCase().includes(lower))
//     return result
//   }
//   render() {
//     const {inputValue} = this.state
//     const data = this.searchTeam()
//     return (
//       <>
//         <input type="text" value={inputValue} onChange={this.inputChanged}  />
//         <ul>
//           {data.map((item) => {
//             return (
              
//               <Table key={item.id } data={item} />
//             )
//           })}
//         </ul>
//       </>
//     )
//   }
// }
// export default App;


import { Component } from "react";
import MoviesList from "./Components/ListItems"

const database = [{
                 name: "Agent Sai Srinivasa Athreya",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/61/Agent_Sai_Srinivasa_Athreya_poster.jpg",
                 date: "21",
                 year: "2019",
                 month: "June",
                 cast: "Naveen polishetty,Shruthi sharama,Swaroop RSJ",
                 OTT: "Amazon prime video",
                 ratings: "8.4/10",
             },

             {
                 name: "Sarileru Neekevvaru",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/4/42/Sarileru_Neekevvaru.jpg",
                 date: "10",
                 year: "2020",
                 month: "January",
                 cast: "Mahesh babu,Rashmika Mandanna,Anil Ravipudi",
                 OTT: "Amazon prime video",
                 ratings: "5.8/10",

             },

             {
                 name: "Oopiri",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/4/49/Oopiri_Telugu_film_Poster.jpg",
                 date: "25",
                 year: "2016",
                 month: "March",
                 cast: "Nagarjuna,Tamannah,Vamshi paidipally",
                 OTT: "Amazon prime video",
                 ratings: "8/10",

             },

             {
                 name: "Mishan Impossible",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/mishanimpossible-20220316093131-20179.jpg",
                 date: "29",
                 year: "2022",
                 month: "April",
                 cast: "Taapsee,Roshandj,Swaroop RSJ",
                 OTT: "Netflix",
                 ratings: "6.8/10",

             },

             {
                 name: "Oh Baby",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Samantha_Oh_Baby.jpg/220px-Samantha_Oh_Baby.jpg",
                 date: "05",
                 year: "2019",
                 month: "July",
                 cast: "Samantha ,Naga shaurya,B.V.Nandini Reddy",
                 OTT: "Netflix",
                 ratings: "7.4/10",

             },

             {
                 name: "Adhugo",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/e/e9/Adhugo_%282018%29.jpg",
                 date: "09",
                 year: "2018",
                 month: "August",
                 cast: "Nabha Natesh,Ravi Babu,Ravi babu",
                 OTT: "Netflix",
                 ratings: "5.9/10",

             },

             {
                 name: "Cinema Bandi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/3/36/Cinema_Bandi_poster.jpg",
                 date: "14",
                 year: "2021",
                 month: "May",
                 cast: "Ram charan,Sindhu sreenivas,Praveen kandregula",
                 OTT: "Netflix",
                 ratings: "7.9/10",

             },

             {
                 name: "Meeku Matrame Cheputha",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Meeku_Maathrame_Cheptha.jpg",
                 date: "01",
                 year: "2019",
                 month: "November",
                 cast: "Avantika mishra,Tharun Bhasakar,Shammer sultan",
                 OTT: "Hotstar",
                 ratings: "6.1/10",

             },

             {
                 name: "Ninnila Ninnila",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/1/1a/Ninnila_Ninnila_poster.jpg",
                 date: "26",
                 year: "2021",
                 month: "February",
                 cast: "Ashok selvan,Rithu varama,Anil V sasi",
                 OTT: "Zee5",
                 ratings: "7.5/10",

             },

             {
                 name: "Dj Tillu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/3/3c/DJ_Tillu_poster.jpg",
                 date: "12",
                 year: "2022",
                 month: "February",
                 cast: "Siddhu,Neha shetty,Vimal Krishna",
                 OTT: "Aha",
                 ratings: "7.4/10",

             },

             {
                 name: "Pushpaka Vimanam",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/1/13/Pushpaka_Vimanam_poster.jpg",
                 date: "12",
                 year: "2021",
                 month: "November",
                 cast: "Anand deverakonda,Geetha Saini,Damodara",
                 OTT: "Aha",
                 ratings: "6.3/10",

             },

             {
                 name: "Sr Kalyanamandapam",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/2/22/SR_Kalyanamandapam.jpg",
                 date: "06",
                 year: "2021",
                 month: "August",
                 cast: "Kiran abbavaram,Priyanka Jawalkar,Sridhar gade",
                 OTT: "Aha",
                 ratings: "5.7/10",

             },

             {
                 name: "Anubhavinchu Raja",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/anubhavinchuraja-20210923103549-20410.jpg",
                 date: "26",
                 year: "2021",
                 month: "November",
                 cast: "Raj tarun,Kasish khan,Srinivas gavireddy",
                 OTT: "Aha",
                 ratings: "5.5/10",

             },

             {
                 name: "Orey Bujjiga",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/2/20/Orey_Bujjiga_poster.jpg",
                 date: "02",
                 year: "2020",
                 month: "October",
                 cast: "Raj tarun,Malvika Nair,Vijay kumar konda",
                 OTT: "Aha",
                 ratings: "6.5/10",

             },
             {
                 name: "Aranmani 3",
                 type: "Movies",
                 languages: "'Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/5/51/Aranmanai_3.jpg",
                 date: "14",
                 year: "2021",
                 month: "October",
                 cast: "Rashi Khanna,Arya,Sundar C.",
                 OTT: "Zee5",
                 ratings: "4/10",
             },

             {
                 name: "Cinderella",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/4/48/Cinderella_2021_Indian_poster.jpg",
                 date: "24",
                 year: "2021",
                 month: "September",
                 cast: "B.Abhilash,Abhinaya,Vinod Venkatesh",
                 OTT: "Amazon prime video",
                 ratings: "6.4/10",
             },

             {
                 name: "The rose villa",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/therosevilla-20201112113933-19661.jpg",
                 date: "01",
                 year: "2021",
                 month: "October",
                 cast: "Dheekshith Shetty,Swetha Varma,Hemanth",
                 OTT: "Amazon prime video",
                 ratings: "5.9/10",
             },

             {
                 name: "Maa oori polimera",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/maaooripolimera-20211221114931-20618.jpg",
                 date: "10",
                 year: "2021",
                 month: "December",
                 cast: "Bala Aditya,Kamakshi Bhaskarla,Anil Viswanath",
                 OTT: "Hotstar",
                 ratings: "7.3/10",
             },

             {
                 name: "Avnu 1",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/75/First_look_of_Avunu.jpg",
                 date: "21",
                 year: "2012",
                 month: "September",
                 cast: "Harshavardhan Rane,Poorna,Ravi babu",
                 OTT: "Hotstar",
                 ratings: "6.2/10",
             },

             {
                 name: "Avnu 2",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/61/Avunu_2_poster.jpg",
                 date: "03",
                 year: "2015",
                 month: "April",
                 cast: "Chakravarthi,Shamna Kasim,Ravi Babu",
                 OTT: "Hotstar",
                 ratings: "4.8/10",
             },

             {
                 name: "Deyyam",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/rgvdeyyam-20210409125900-13563.jpg",
                 date: "16",
                 year: "2021",
                 month: "April",
                 cast: "Dr.Rajasekhar,Swati dixit,Ram gopal varma",
                 OTT: "Amazon prime video",
                 ratings: "8.6/10",
             },

             {
                 name: "Boomika",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://www.galatta.com/assets/review/1629603736hss__15_.jpg",
                 date: "22",
                 year: "2021",
                 month: "August",
                 cast: "Madhuri jain,Aishawarya Rajesh,R.Rathindran Prasad",
                 OTT: "Netflix",
                 ratings: "5.5/10",
             },

             {
                 name: "Aaviri",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/e/e2/Aaviri.jpg",
                 date: "01",
                 year: "2019",
                 month: "November",
                 cast: "Neha chauhan,Ravi babu",
                 OTT: "Netflix",
                 ratings: "4.1/10",
             },

             {
                 name: "Game over",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/8/84/Game_Over_2019_poster.jpg",
                 date: "14",
                 year: "2019",
                 month: "June",
                 cast: "Taapsee pannu,Sanchana natarajan,Ashiwin saravanan",
                 OTT: "Netflix",
                 ratings: "7/10",
             },

             {
                 name: "Andhakaram",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Andhaghaaram_poster.jpg",
                 date: "24",
                 year: "2020",
                 month: "November",
                 cast: "Arjun Das,Pooja Ramachandran,V.Vignarajan",
                 OTT: "Netflix",
                 ratings: "7.6/10",
             },

             {
                 name: "Shivalinga",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/60/Shivalinga_2016_poster.jpg",
                 date: "14",
                 year: "2017",
                 month: "April",
                 cast: "Shivarajkumar,Ritika singh,P.vasu",
                 OTT: "Zee5",
                 ratings: "4.7/10",
             },

             {
                 name: "Chandramukhi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/7c/Chandramukhi_poster.jpg",
                 date: "14",
                 year: "2005",
                 month: "April",
                 cast: "Rajinikanth,Jyothika,P.vasu",
                 OTT: "Hotstar",
                 ratings: "7.2/10",
             },

             {
                 name: "Petromax",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/c/c3/Petromax_Film_Poster.jpg",
                 date: "11",
                 year: "2019",
                 month: "October",
                 cast: "Tamannah,Prem,Rohin Venkatesan",
                 OTT: "Amazon prime video",
                 ratings: "5.3/10",
             },

             {
                 name: "AWE!",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/8/81/Awe_film_poster.jpg",
                 date: "16",
                 year: "2018",
                 month: "February",
                 cast: "Kajal Aggarwal,Nithya Menen,Srinivas Avasarala",
                 OTT: "Netflix,Hotstar",
                 ratings: "7.7/10",
             },


             {
                 name: "Raa Raa",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/3/33/Raa_Raa_%282018_film%29.jpg",
                 date: "16",
                 year: "2018",
                 month: "February",
                 cast: "Srikanth,Naziya,Shankar",
                 OTT: "Amazon prime video",
                 ratings: "6.6/10",
             },



             {
                 name: "Dharamakeshetram",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/d/da/Dharma_Kshetram_%281992_film%29.jpg",
                 date: "14",
                 year: "1992",
                 month: "February",
                 cast: "Nandamuri Balakrishana,Divya Bharathi,A. Kondandarami Reddy",
                 OTT: "Amazon prime video",
                 ratings: "6.8/10",
             },
             {
                 name: "Sundarangudu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/c/c5/Perazhagan_poster.jpg",
                 date: "07",
                 year: "2004",
                 month: "May",
                 cast: "Surya,Jyothika,Sasi Shanker",
                 OTT: "Amazon prime video",
                 ratings: "6.7/10",
             },
             {
                 name: "Okkadunndu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/5/58/Okkadunnadu_poster.jpg",
                 date: "03",
                 year: "2007",
                 month: "March",
                 cast: "Gopichand,Neha Julka",
                 OTT: "Amazon prime video",
                 ratings: "7.4/10",
             },
             {
                 name: "Deshamo lo dongalu paddaru",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "dn.123telugu.com/content/wp-content/uploads/2018/10/Desham-Lo-Dongalu-Paddaru-r.jpg",
                 date: "04",
                 year: "2018",
                 month: "October",
                 cast: "Tanishq Rajan,Khayyum,Goutham rajkumar",
                 OTT: "Amazon prime video",
                 ratings: "4.2/10",
             },
             {
                 name: "Antham",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/c/c7/Antham_poster.jpg",
                 date: "11",
                 year: "1992",
                 month: "September",
                 cast: "Nagarjuna,Urmila matondkar,Ram gopalvarma",
                 OTT: "Amazon prime video",
                 ratings: "6/10",
             },
             {
                 name: "Killer",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/2/25/Kolaigaran_Poster.jpg",
                 date: "07",
                 year: "2019",
                 month: "June",
                 cast: "Arjun sarja,Ashima narwal,Andrew louis",
                 OTT: "hotstar",
                 ratings: "7.1/10",
             },
             {
                 name: "Gulabi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Gulabi_telugu.jpg",
                 date: "03",
                 year: "1995",
                 month: "November",
                 cast: "J.d.chakravathy,Maheswari,Krishna vamsi",
                 OTT: "Amazon prime video",
                 ratings: "7.2/10",
             },
             {
                 name: "Athanokkade",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Athanokkade_poster.jpg/330px-Athanokkade_poster.jpg",
                 date: "12",
                 year: "2005",
                 month: "May",
                 cast: "Nandamuri kalyan ram,Sindhu tolani,Surender Reddy",
                 OTT: "Amazon prime video",
                 ratings: "6.7/10",
             },
             {
                 name: "Bhairava geetha",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://www.filmibeat.com/ph-big/2018/11/bhairava-geetha_154116205060.jpg",
                 date: "14",
                 year: "2018",
                 month: "December",
                 cast: "Dhanajay,Irra mor,Siddarath Thatholu",
                 OTT: "Amazon prime video",
                 ratings: "5.1/10",
             },
             {
                 name: "Rakhi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Rakhi_2006_poster.jpg",
                 date: "22",
                 year: "2006",
                 month: "December",
                 cast: "JR.NTR, IIeana d'cruz, Krishna vasmi",
                 OTT: "Amazon prime video",
                 ratings: "6.3/10",
             },
             {
                 name: "Annavaram",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Annavaram_poster.jpg",
                 date: "29",
                 year: "2006",
                 month: "December",
                 cast: "Pawan kalyan,Asin,Bhimaneni srinivasa rao,Sippy",
                 OTT: "Amazon prime video",
                 ratings: "4.9/10",
             },
             {
                 name: "Gatham",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/b/bb/Gatham.jpg",
                 date: "06",
                 year: "2020",
                 month: "November",
                 cast: "Poojitha kuraparthi,Arjun,Krian Kondamadugula",
                 OTT: "Amazon prime video",
                 ratings: "6.2/10",
             },
             {
                 name: "Gharshana",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/8/80/Gharshana.jpg",
                 date: "30",
                 year: "2004",
                 month: "July",
                 cast: "Venkatesh,Asin,Gautham Vasudev Menon",
                 OTT: "Amazon prime video",
                 ratings: "7.4/10",
             },
             {
                 name: "Appatlo okadundevadu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Appatlo_Okadundevadu_poster.jpg",
                 date: "30",
                 year: "2016",
                 month: "December",
                 cast: "Sree vishnu,Tanya hope,Saagar k chandra",
                 OTT: "Amazon prime video",
                 ratings: "7.6/10",
             },
             {
                 name: "Vijayadashami",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Vijayadasami_Poster.jpg",
                 date: "21",
                 year: "2007",
                 month: "september",
                 cast: "Nandamuri kalyan ram,VedhikaSamudra v.",
                 OTT: "Amazon prime video",
                 ratings: "5/10",
             },
             {
                 name: "Bunny",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/3/36/Bunny_Telugu_poster.jpg",
                 date: "06",
                 year: "2005",
                 month: "April",
                 cast: "Allu arjun,Gowri Munjal,V.V.Vinayak",
                 OTT: "Amazon prime video",
                 ratings: "5.7/10",
             },
             {
                 name: "Chinni",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://cdn.123telugu.com/content/wp-content/uploads/2022/05/Chinni-review.jpg",
                 date: "06",
                 year: "2022",
                 month: "May",
                 cast: "Keerthy Suresh, Selvaraghavan,Arun matheswaran",
                 OTT: "Amazon prime video",
                 ratings: "7.6/10",
             },
             {
                 name: "KGF chapter 2",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg",
                 date: "14",
                 year: "2022",
                 month: "April",
                 cast: "Yash,Srinidhu shetty,Prashanth neel",
                 OTT: "Amazon prime video",
                 ratings: "8.7/10",
             },
             {
                 name: "Whistel",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/whistle-20191008154637-18831.jpg",
                 date: "25",
                 year: "2019",
                 month: "October",
                 cast: "Vijay,Nayanthara,Atlee kumar",
                 OTT: "Amazon prime video",
                 ratings: "2/10",
             },
             {
                 name: "Rangasthalam",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg",
                 date: "30",
                 year: "2018",
                 month: "March",
                 cast: "Ram charan,Samantha,Sukumar",
                 OTT: "Amazon prime video",
                 ratings: "8.2/10",
             },
             {
                 name: "Pushpa",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
                 date: "17",
                 year: "2021",
                 month: "December",
                 cast: "AlluArjun,Rashmika mandanna,Sukumar",
                 OTT: "Netflix",
                 ratings: "7.6/10",
             },
             {
                 name: "Bheemla Nayak",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/b/bb/Bheemla_Nayak.jpg",
                 date: "25",
                 year: "2022",
                 month: "February",
                 cast: "Pawan kalyan,Nithya menen,Saagar K chandra",
                 OTT: "Netflix",
                 ratings: "6.6/10",
             },
             {
                 name: "Syee raa Narasimha reddy",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/a/ac/Sye_Raa_Narasimha_Reddy_film_poster.jpg",
                 date: "02",
                 year: "2019",
                 month: "October",
                 cast: "Chiranjeevi,Nayathara,Surender reddy",
                 OTT: "Netflix",
                 ratings: "7.3/10",
             },
             {
                 name: "Baahubali 2",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg",
                 date: "28",
                 year: "2017",
                 month: "April",
                 cast: "Prabhas,Anushka shetty,Rajamouli",
                 OTT: "Netflix",
                 ratings: "8.2/10",
             },
             {
                 name: "RRR",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
                 date: "24",
                 year: "2022",
                 month: "March",
                 cast: "Ram charan,JR NTR,Alia Bhatt,Olivia Morris",
                 OTT: "Netflix",
                 ratings: "8.2/10",
             },
             {
                 name: "Akhanda",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/c/c0/Akhanda_Poster.jpg",
                 date: "01",
                 year: "2021",
                 month: "December",
                 cast: "Bala krishana,Praya jaiswal,Boyapati srinu",
                 OTT: "Hotstar",
                 ratings: "6.8/10",
             },
             {
                 name: "Chhatrapati",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Chhatrapati_movie_poster.jpg",
                 date: "30",
                 year: "2005",
                 month: "September",
                 cast: "Prabhas,Shriya saran,Rajamouli",
                 OTT: "Hotstar",
                 ratings: "7.6/10",
             },
             {
                 name: "Khiladi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/1/13/Khiladi_2022_poster.jpg",
                 date: "11",
                 year: "2022",
                 month: "February",
                 cast: "Ravi teja,Dimple Hayathi,Ramesh varma",
                 OTT: "Netflix",
                 ratings: "5.4/10",
             },
             {
                 name: "Pokiri",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/b/b2/Pokiri_movie_poster.jpg",
                 date: "28",
                 year: "2006",
                 month: "April",
                 cast: "Mahesh babu,IIeana dcruz,Puri jagannadh",
                 OTT: "Hotstar",
                 ratings: "7.9/10",
             },
             {
                 name: "Saaho",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/6b/Saaho_poster.jpg",
                 date: "30",
                 year: "2019",
                 month: "August",
                 cast: "Prabhas,shradha kapoor",
                 OTT: "Netflix",
                 ratings: "5/10",
             },
             {
                 name: "Spyder",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/d/de/Spyder_film_poster.jpg",
                 date: "27",
                 year: "2017",
                 month: "September",
                 cast: "Mahesh babu,Rakul preet singh,A.R.Murugadoss ",
                 OTT: "Netflix",
                 ratings: "6.3/10",
             },
             {
                 name: "Beast",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/3/3d/Beast_2022_Indian_poster.jpg",
                 date: "13",
                 year: "2022",
                 month: "April",
                 cast: "Vijay,Pooja Hegde,Nelson dilipkumar ",
                 OTT: "Netflix",
                 ratings: "5.3/10",
             },
             {
                 name: "Business Man",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/67/Businessman_poster.jpg",
                 date: "13",
                 year: "2012",
                 month: "January",
                 cast: "Mahesh babu,Kajal Aggarwal,Puri Jagannadh",
                 OTT: "Amazon prime video",
                 ratings: "7.1/10",
             },
             {
                 name: "Enemy",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/60/Enemy_%282021_film%29.jpg",
                 date: "04",
                 year: "2021",
                 month: "November",
                 cast: "Vishal,Mirnalini,Anand shankar",
                 OTT: "Netflix ",
                 ratings: "6.6/10",
             },
             {
                 name: "Shoot out at alair",
                 type: " series",
                 languages: "Telugu",
                 category: "Action",
                 img: "https://upload.wikimedia.org/wikipedia/en/1/17/Shootout_at_Alair.jpg",
                 date: "25",
                 year: "2020",
                 month: "December",
                 cast: "Nandini Raiv,Srikanth meka,Anand ranga",
                 OTT: "ZEE5",
                 ratings: "6.3/10",
             },

             {
                 name: "Kushi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://wallpapercave.com/dwp1x/wp7793020.jpg",
                 date: "26",
                 year: "2001",
                 month: " April",
                 cast: "Pawan kalyan,Bhumika Chawla,S.J. Suryah",
                 OTT: "Amazon prime video",
                 ratings: "8.1/10"

             },

             {
                 name: "yuvakudu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/en/e/ef/Yuvakudu_telugu.jpg",
                 date: "01",
                 year: "2000",
                 month: "January",
                 cast: "Sumanth, Bhoomika chawla , A.Karunakaran",
                 OTT: "Zee5, Sonyliv",
                 ratings: "6.9/10"

             },

             {
                 name: "Ninne premistha",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/en/9/9d/Ninne_Premistha.jpg",
                 date: "14",
                 year: "2000",
                 month: "September",
                 cast: "Nagarjuna akkineni,Soundarya,R.R.shinde",
                 OTT: "Voot",
                 ratings: "5.8/10",

             },

             {
                 name: "Manasantha nuvve",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/te/thumb/f/fa/Manasanta_nuvve.jpeg/330px-Manasanta_nuvve.jpeg",
                 date: "19",
                 year: "2001",
                 month: "October",
                 cast: "Uday kiran, Reema sen,V.N.Aditya",
                 OTT: "hotstar",
                 ratings: "7.3/10",
             },

             {
                 name: " Varsham",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: " https://wallpapercave.com/wp/wp8284301.jpg",
                 date: "14",
                 year: "2004",
                 month: "January",
                 cast: "Prabhas,Trisha krishnan,Sobhan",
                 OTT: "Amazon prime video",
                 ratings: "7.1/10",

             },

             {
                 name: "Nuvvu leka nenu lenu",
                 type: " Movies",
                 languages: "Telugu",
                 category: " Romance",
                 img: "https://www.filmibeat.com/img/136x100x170/popcorn/movie_posters/nuvvu-leka-nenu-lenu-4923.jpg",
                 date: "14",
                 year: "2002",
                 month: "January",
                 cast: "Tharun,Aarthi agarwal,Kasi vishwanath",
                 OTT: "Youtube",
                 ratings: "6.2/10",

             },

             {
                 name: "Nuvve nuvve",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/img/136x100x170/popcorn/movie_posters/nuvve-nuvve-5035.jpg",
                 date: "10",
                 year: "2002",
                 month: "October",
                 cast: "Tarun,Shriya saran,Trivikram srinivas",
                 OTT: "Youtube, sunnxt",
                 ratings: "7.4/10",

             },

             {
                 name: "Janaki weds sriram",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/en/a/ab/Janaki_Weds_Sriram_poster.jpeg",
                 date: "12",
                 year: "2003",
                 month: "September",
                 cast: "Rohit,Gajala,Maddineni ramesh babu",
                 OTT: "Youtube",
                 ratings: "7.2/10",

             },

             {

                 name: "Bhadra",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Bhadra_poster.jpg/330px-Bhadra_poster.jpg",
                 date: "12",
                 year: "2005",
                 month: "May",
                 cast: "Ravi teja,Meera jasmine,Boyapati srinu",
                 OTT: "Hotstar",
                 ratings: "6.7/10",

             },

             {

                 name: "Ashok",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/img/136x100x170/popcorn/movie_posters/ashok-2302.jpg",
                 date: "13",
                 year: "2006",
                 month: "July",
                 cast: " N.T.Rama Rao Jr,Sameera reddy,Surender reddy",
                 OTT: "Hotstar",
                 ratings: "5.5/10",

             },

             {
                 name: "Ready",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/75/Ready_telugu_2008_film_1.jpg",
                 date: "19",
                 year: "2008",
                 month: "June",
                 cast: "Ram pothineni,Genelia dsouza,Sreenu vaitla",
                 OTT: "Amazon prime video",
                 ratings: "7.2/10",

             },

             {
                 name: " Kotha bangaru lokam",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/img/136x100x170/popcorn/movie_posters/kotha-bangaru-lokam-529.jpg",
                 date: "09",
                 year: "2008",
                 month: "October",
                 cast: "Varun sandesh,shweta basu prasad,srikanth addala",
                 OTT: "Amazon prime video",
                 ratings: "6.8/10",
             },

             {
                 name: "Ye maaya chesavae",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2011/12/1323341228631871.jpg",
                 date: "26",
                 year: "2010",
                 month: "February",
                 cast: "Naga chaitanya,samantha, gautham vasudev",
                 OTT: "Amazon prime video",
                 ratings: "7.7/10",

             },

             {
                 name: "Aawara",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2011/12/1323253665633906.jpg",
                 date: "22",
                 year: "2010",
                 month: "may",
                 cast: "Karthi,tamannaah,N.Linguswamy",
                 OTT: "Hotstar",
                 ratings: "6.5/10",

             },

             {
                 name: "Julayi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/fanimg/4838_20120409_72419800_julayi.JPG",
                 date: "09",
                 year: "2012",
                 month: "august",
                 cast: "Allu arjun,ileana dcruz,trivikram srinivas",
                 OTT: "Hotstar",
                 ratings: "7.2/10",
             },

             {

                 name: "Kumari 21f",
                 type: "Movies",
                 languages: "Telugu",
                 category: " Romance",
                 img: "https://www.filmibeat.com/ph-big/2015/11/kumari-21f_144861386910.jpg",
                 date: " 20",
                 year: "2015",
                 month: "April",
                 cast: "Raj tarun,hebah patel,palnati surya pratap",
                 OTT: "you tube",
                 ratings: "7.7/10",

             },

             {
                 name: " Nenu sailaja",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/fanimg/nenu-sailaja-photos-images-36316.jpg",
                 date: "13",
                 year: "2016",
                 month: "January",
                 cast: "Ram pothineni,keerthy suresh,thirumala kishore",
                 OTT: "Hotstar",
                 ratings: "6.9/10",

             },

             {
                 name: "Dwaraka",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2016/11/dwaraka-movie-poster_147815167020.jpg",
                 date: "03",
                 year: "2017",
                 month: "March",
                 cast: " Vijay deverakonda,pooja jhaveri,srinivasa ravindra",
                 OTT: "Amazon prime video",
                 ratings: "4.6/10",
             },

             {
                 name: "Ninu kori",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2017/02/ninnu-kori-movie-poster_148791272210.jpg",
                 date: "03",
                 year: "2017",
                 month: "July",
                 cast: " Nani,nivetha thomas,shiva nirvana",
                 OTT: "Amazon prime video",
                 ratings: "7.5/10",

             },

             {
                 name: " Fidaa",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2017/07/fidaa_150002506810.jpg",
                 date: "21",
                 year: "2017",
                 month: "July",
                 cast: "Sai pallavi, varun tej,sekhar kammula",
                 OTT: "Amazon prime video",
                 ratings: "7.4/10",
             },

             {
                 name: "Arjun reddy",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/img/136x100x170/popcorn/movie_posters/arjun-reddy-20170102165302-15628.jpg",
                 date: "25",
                 year: "2017",
                 month: "July",
                 cast: " Vijay deverakonda ,shalini pandey, sandeep reddy vanga",
                 OTT: "Amazon prime video, hotstar",
                 ratings: "8.0/10",
             },

             {

                 name: "Vellipomakey",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/img/136x100x170/popcorn/movie_posters/vellipomakey-20170306154659-15820.jpg",
                 date: "02",
                 year: "2017",
                 month: "September",
                 cast: " Vishwak sen, supraja,mohammed ali",
                 OTT: "Amazon prime video",
                 ratings: "7.1/10",
             },

             {

                 name: "Tholiprema",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2018/02/tholi-prema_15185899382.jpg",
                 date: "10",
                 year: "2018",
                 month: "February",
                 cast: "Varun tej,raashi khanna,venky atluri",
                 OTT: "Hotstar",
                 ratings: "7.2/10",
             },

             {
                 name: "RX100",
                 type: " Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://cutewallpaper.org/22/rx-100-movie-wallpapers/147527944.jpg",
                 date: "10",
                 year: "2018",
                 month: "July",
                 cast: "Kartikeya,payal rajput,ajay bhupathi",
                 OTT: "Amazon prime video",
                 ratings: "6.9/10",
             },

             {
                 name: "Geetha govindam",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/wimgm/1366x70/desktop/2018/08/geetha-govindam_1534226012160.jpg",
                 date: "15",
                 year: "2018",
                 month: "August ",
                 cast: "Vijay deverakonda,rashimka mandanna,parasuram",
                 OTT: "Zee5",
                 ratings: "7.7/10",

             },

             {
                 name: "Mr.Majnu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2019/01/mr-majnu_154778412700.jpg",
                 date: "25",
                 year: "2019",
                 month: "January",
                 cast: "Akhil akkineni,nidhi agerwal,venty atluri",
                 OTT: "Sonyliv",
                 ratings: "6.1/10",
             },

             {
                 name: "Majili",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://wallpapercave.com/wp/wp4362478.jpg",
                 date: "05",
                 year: "2019",
                 month: "April",
                 cast: "Naga chaitanya,samantha,shiva nirvana",
                 OTT: "Amazon prime video",
                 ratings: "7.2/10",
             },

             {
                 name: "Evvarikee cheppaoddu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/ph-big/2019/09/evvarikee-cheppoddu_156837425790.jpg",
                 date: "08",
                 year: "2019",
                 month: "October",
                 cast: " Rakesh varre,gargeyi yellapragada,basava shankar eeday",
                 OTT: "Netflix",
                 ratings: "7.2/10",
             },

             {
                 name: "Bheeshma",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://wallpaperaccess.com/full/4383899.jpg",
                 date: "21",
                 year: "2020",
                 month: "February",
                 cast: "Nithin,rashmika mandanna,venky kudumula",
                 OTT: "Netflix",
                 ratings: "6.6/10",
             },

             {
                 name: "Ala vaikunthapurramuloo",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://wallpaperaccess.com/full/2349594.jpg",
                 date: "12",
                 year: "2020",
                 month: "January",
                 cast: "allu arjun,pooja hedge,trivikaram",
                 OTT: "Netflix",
                 ratings: "7.3/10",
             },

             {
                 name: "Radhe shyam",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Radhe_Shyam.jpg",
                 date: "11",
                 year: "2022",
                 month: "March",
                 cast: "prabhas,pooja hegde,k.k.radhakrishna kumar",
                 OTT: "Amazon prime video",
                 ratings: "5.4/10",
             },

             {
                 name: "Paagal",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://upload.wikimedia.org/wikipedia/en/c/c2/Paagal_poster.jpg",
                 date: "03",
                 year: "2021",
                 month: "September",
                 cast: "Vishwak sen,nivetha pethuraj,naresh kuppili",
                 OTT: "Amazon prime video",
                 ratings: "5.6/10",
             },

             {
                 name: "Dear comrade",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Romance",
                 img: "https://www.filmibeat.com/fanimg/movie/17130/dear-comrade-photos-images-61379.jpg",
                 date: "06",
                 year: "2019",
                 month: "September",
                 cast: "Vijay devarakonda,rashmika madanna,bharat kamma",
                 OTT: " Amazon prime video",
                 ratings: "7.3/10",
             },

             {
                 name: "Most eligible bachelor",
                 type: "Movies",
                 languages: "Telugu",
                 category: " Romance",
                 img: "https://www.filmibeat.com/ph-big/2020/10/most-eligible-bachelor_160380635860.jpg",
                 year: "2021",
                 month: "October",
                 date: "15",
                 cast: "Akhil akkineni,pooja hegde,bommarillu baskar",
                 OTT: "Netflix",
                 ratings: "6.1/10",
             },

             {
                 name: "F2: Fun and Frustration",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/c/c6/F2_Fun_and_Frustration.jpg",
                 date: "12",
                 year: "2019",
                 month: "January",
                 cast: "Varn tej,Venkatesh,Tamannah,Mehreen,Anil Ravipudi",
                 OTT: "Amazon prime video",
                 ratings: "6.1/10",

             },

             {
                 name: "Jathi Rathnalu",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/7e/Jathi_Ratnalu_poster.jpg",
                 date: "11",
                 year: "2021",
                 month: "March",
                 cast: "Navven polishetty,Faria Abdullah,Anudeep Kv",
                 OTT: "Amazon prime video",
                 ratings: "7.3/10",

             },

             {
                 name: "Ee Nagaraniki Emaindi",
                 type: "Movies",
                 languages: "Telugu",
                 category: "Comedy",
                 img: "https://upload.wikimedia.org/wikipedia/en/d/d2/Ee_Nagaraniki_Emaindi.jpg",
                 date: "29",
                 year: "2018",
                 month: "June",
                 cast: "Vijay Devarakonda, Anisha Ambrose, Tharun bhasakar dhaassyam",
                 OTT: "Amazon prime video, Netflix",
                 ratings: "7.9/10",

             },

             {
                 name: "The Notebook",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https: //res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/the_noteb_elhqjp.jpg",
                 date: "25",
                 year: "2004",
                 month: "June",
                 cast: "Rayn Gosling,  Rachel McAdams, James Garner",
                 OTT: "Disney+ Hotstar",
                 ratings: "7.8/10"

             },
             {
                 name: "Love Story",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/love_story_mlnwnc.jpg",
                 date: "16",
                 year: "1970",
                 month: "December",
                 cast: "Ali MacGraw , Ryan O’Neal , Tommy Lee Jones",
                 OTT: "Amazon Prime Video",
                 ratings: "6.9/10"

             },
             {
                 name: "Titanic",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/titanic_vyugbv.jpg",
                 date: "17",
                 year: "1997",
                 month: "December",
                 cast: "Kate Winslet, Leonardo DiCaprio,Billy Zane",
                 OTT: "Disney+ Hotstar",
                 ratings: "7.9/10"

             },
             {
                 name: "The Fault in Our Stars",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/the_fault_in_our_mhyhro.jpg",
                 date: "04",
                 year: "2014",
                 month: "July",
                 cast: "Ansel Elgort , Shailene Woodley , Nat Wolff",
                 OTT: "Disney+ Hotstar",
                 ratings: "7.7/10"

             },
             {
                 name: "The Vow",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/the_vow_rsgs0b.jpg",
                 date: "09",
                 year: "2012",
                 month: "March",
                 cast: "Rachel McAdams , Channing Tatum , Jessica Lange",
                 OTT: "Amazon Prime Video",
                 ratings: "6.8/10"

             },
             {
                 name: "To All the Boys I’ve Loved Before",
                 type: "series",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660540/to_all_the_boys_md4wta.jpg",
                 date: "12",
                 year: "2020",
                 month: "February",
                 cast: "Momona Tamada , Maddie Ziegler , Noah Centineo",
                 OTT: "Netflix",
                 ratings: "6.0/10"

             },
             {
                 name: "Midnight Sun",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/midnight_sun_kerxj2.jpg",
                 date: "22",
                 year: "2018",
                 month: "March",
                 cast: "Bella Thorne , Patrick Schwarzenegg , Quinn Shephard",
                 OTT: "Amazon Prime Video",
                 ratings: "6.6/10"

             },
             {
                 name: "All the Bright places",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/all_the_bright_xatk7t.jpg",
                 date: "28",
                 year: "2020",
                 month: "February",
                 cast: "Justice Smith , Elle Fanning , Felix Mallard",
                 OTT: "Netflix",
                 ratings: "6.5/10"

             },
             {
                 name: "NOTTing Hill",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "  https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/nothing_hil_oxhpz7.jpg",
                 date: "13",
                 year: "1999",
                 month: "May",
                 cast: "Hugh Grant , Julia Roberts , Rhys Ifans",
                 OTT: "Amazon Prime Video",
                 ratings: "7.2/10"

             },
             {
                 name: "Marriage Story",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/marriage_tjq1hq.jpg",
                 date: "15",
                 year: "2019",
                 month: "November",
                 cast: "Adam Driver , Scarlett Johansson , Laura Dern",
                 OTT: "Netflix",
                 ratings: "7.9/10"

             },
             {
                 name: "After We Collided",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/after_we_coll_lv9lt4.jpg",
                 date: "23",
                 year: "2020",
                 month: "October",
                 cast: "Josephine Langford , Hero Fiennes , Dylan Sprouse",
                 OTT: "Netflix",
                 ratings: "5.0/10"

             },
             {
                 name: "The Shape Of Water",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/the_shape_of_q7eysr.jpg",
                 date: "01",
                 year: "2017",
                 month: "December",
                 cast: "Sally Hawkins , Doug Jones , Richard Jenkins",
                 OTT: "Disney+ Hotstar",
                 ratings: "7.3/10"

             },
             {
                 name: "Love Simon",
                 type: "Movies",
                 languages: "English",
                 category: "Romance",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653660539/love_simon_vphfan.jpg",
                 date: "27",
                 year: "2018",
                 month: "February",
                 cast: "Nick Robinson , Keiynan Lonsdale , Katherine Langford",
                 OTT: "Disney+ Hotstar",
                 ratings: "7.5/10"

             },

             {
                 name: "The Unholy",
                 type: "Movies",
                 languages: "English",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Unholy_2021_Film_Poster.png",
                 date: "2 ",
                 year: "2021",
                 month: "April",
                 cast: "Jefferey Dean Morgan, Cricket Brown, Marina",
                 OTT: "Netfix",
                 ratings: "5.1/10"
             },

             {
                 name: "Umma",
                 type: "Movies",
                 languages: "English",
                 category: "Horror",
                 img: "https://i0.wp.com/socialmedius.net/wp-content/uploads/2022/05/Umma.jpg?resize=678%2C381&ssl=1",
                 date: "18 ",
                 year: "2022",
                 month: "March",
                 cast: "Sandra Oh, Fivel Stewart, Odeya Rush",
                 OTT: "Amazon Prime Video ",
                 ratings: "4.6/10"
             },
             {
                 name: "Chhorii",
                 type: "Movies",
                 languages: "English",
                 category: "Horror",
                 img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Chhorii_poster.jpg",
                 date: "26 ",
                 year: "2021",
                 month: "November",
                 cast: "Nushrratt Bharuccha, Yaaneea Bharadwaj, Pallavi Ajay",
                 OTT: "Amazon Prime Video",
                 ratings: "6.8/10"

             },
             {
                 name: "Wrong Turn",
                 type: "series",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse4.mm.bing.net/th?id=OIP.mlalaNdep5_UMjTfx2hAMQHaI8&pid=Api&P=0&w=127&h=154",
                 date: "25 ",
                 year: "2021",
                 month: "February",
                 cast: "CharlOTTe Vega,Emma Dumont,Matthew Modine",
                 OTT: "Amazon Prime Video",
                 ratings: "5.5/10"

             },
             {
                 name: "The Call",
                 type: "Movie",
                 languages: "English",
                 category: "Horror and Thriller",
                 img: " https://tse2.mm.bing.net/th?id=OIP.wNivqBLtQGhatj60Q8Ii7wAAAA&pid=Api&P=0&w=122&h=183",
                 date: "27 ",
                 year: "2020",
                 month: "November",
                 cast: "Lee Chung-hyeon,Sergio Casci",
                 OTT: "Netflix",
                 ratings: "7.1/10"

             },
             {
                 name: "Lift",
                 type: "Movie",
                 languages: "Tamil",
                 category: "Horror",
                 img: " https://tse1.mm.bing.net/th?id=OIP.S4jd0laDCAnouWqmXy_m9wHaLk&pid=Api&P=0&w=97&h=153",
                 date: "1 ",
                 year: "2021",
                 month: "October",
                 cast: "Amritha Aiyer, Kavin, Gayathri Reddy",
                 OTT: "Disney+ Hotstar",
                 ratings: "6.7/10"

             },
             {
                 name: "Run",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: " https://tse4.mm.bing.net/th?id=OIP.ArYQiGqczfh2zt1LJ9p1OgHaK-&pid=Api&P=0&w=104&h=155",
                 date: "8 ",
                 year: "2020",
                 month: "October",
                 cast: "Aneesh Chaganty, Sev Ohanian",
                 OTT: "Netflix",
                 ratings: "6.7/10"

             },
             {
                 name: "Malignant",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: " https://www.themoviedb.org/t/p/original/675FOfG5e4eNGBIuwEplvVTYvTr.jpg",
                 date: "10 ",
                 year: "2021",
                 month: "September",
                 cast: "Annabelle wallis, Mckenna Grace, Maddie Hasson",
                 OTT: "Amazon Prime Video",
                 ratings: "6.2/10"

             },
             {
                 name: "The House Next Door",
                 type: "Movie",
                 languages: "Telugu, Hindi, Tamil",
                 category: "Horror",
                 img: " https://s3-us-west-2.amazonaws.com/tabs.web.media/c/p/cpld/cpld-square-1536.jpg  ",
                 date: "3",
                 year: "2017",
                 month: "November",
                 cast: "Siddharth, Suresh,Anisha",
                 OTT: "Amazon prime",
                 ratings: "6.7/10"

             },
             {
                 name: "The invisible man",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: " https://i0.wp.com/wearecult.rocks/wp-content/uploads/2017/02/BFCL009_theinvisibleman_1417-e1486587073771.jpg?resize=1000%2C1000 ",
                 date: "24 ",
                 year: "2020",
                 month: "February",
                 cast: "Elisabeth Moss, Oliver Jackson, HG wells",
                 OTT: "Netflix",
                 ratings: "7.1/10"

             },
             {
                 name: "Don’t Breathe 2",
                 type: " series",
                 languages: "English",
                 category: "Horror",
                 img: "https://image.tmdb.org/t/p/w1280/2whxXw8Np0ffmxCdsdpp8yBK1XS.jpg  ",
                 date: "12",
                 year: "2021",
                 month: "August",
                 cast: "Stephen Lang, Madelyn Grace, Fede ",
                 OTT: "Netflix",
                 ratings: "6.0/10"

             },
             {
                 name: "The Conjuring",
                 type: "series",
                 languages: "English",
                 category: "Horror",
                 img: " https://image.tmdb.org/t/p/w1280/inBZ5Lm0tUNSgMGZZ7f9vfHNKI2.jpg  ",
                 date: "13",
                 year: "2021",
                 month: "August",
                 cast: "Vera Farmiga, Patrick Wilson,John",
                 OTT: "Amazon prime",
                 ratings: "6.3/10"

             }, {
                 name: "Death of me",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse2.mm.bing.net/th?id=OIP.Jvyyiv38v7QurBXl_S7Z_gHaK9&pid=Api&P=0&w=114&h=169 ",
                 date: "2",
                 year: "2020",
                 month: "October",
                 cast: "Maggie Q, Luke Hemsworth, Alex Essoe ",
                 OTT: "Amazon prime",
                 ratings: "4.4/10"

             }, {
                 name: "It",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse2.mm.bing.net/th?id=OIP.Jvyyiv38v7QurBXl_S7Z_gHaK9&pid=Api&P=0&w=114&h=169 ",
                 date: "8",
                 year: "2017",
                 month: "September",
                 cast: "Bill Skarsgard, Sophia lills, Finn ",
                 OTT: "Amazon prime",
                 ratings: "7.3/10"

             }, {
                 name: "A Quiet Place",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse2.mm.bing.net/th?id=OIP.ZN3aAQ60PS8ZRk4dN4DpuAHaK1&pid=Api&P=0&w=106&h=155",
                 date: "6",
                 year: "2018",
                 month: "April",
                 cast: "John Krasinski, Emily Blunt ,Millicent Simmonds ",
                 OTT: "Netflix",
                 ratings: "7.5/10"

             }, {
                 name: "The Exorcist",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse2.mm.bing.net/th?id=OIP.ZN3aAQ60PS8ZRk4dN4DpuAHaK1&pid=Api&P=0&w=106&h=155",
                 date: "26",
                 year: "1973",
                 month: "December",
                 cast: "Linda Blair , Ellen Burstyn , Jason Miller",
                 OTT: "Disney+ Hotstar",
                 ratings: "8.1/10"

             }, {
                 name: "Signs",
                 type: "Movie",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse2.mm.bing.net/th?id=OIP.TfxW72t4YtZU2h6NKg-EjQHaKj&pid=Api&P=0&w=123&h=175 ",
                 date: "29",
                 year: "2002",
                 month: "July",
                 cast: "Abigail Breslin, Rory Culkin , Mel Gibson",
                 OTT: "Disney+ Hotstar",
                 ratings: "6.8/10"

             }, {
                 name: "Insidious: The Last key",
                 type: "series",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse3.mm.bing.net/th?id=OIP.ZPX_P2YG46GtACnTA4NcKQHaLo&pid=Api&P=0&w=117&h=184",
                 date: "05",
                 year: "2018",
                 month: "january",
                 cast: "Lin shaye , Leigh Whannnell , Spencer Locke",
                 OTT: "Disney+ Hotstar",
                 ratings: "5.7/10"

             }, {
                 name: "The sixth Sense",
                 type: "Movies",
                 languages: "English",
                 category: "Horror",
                 img: "https://tse2.mm.bing.net/th?id=OIP.AOZMq7idJbfIVEUi9d-jxQHaKj&pid=Api&P=0&w=116&h=166 ",
                 date: "06",
                 year: "1999",
                 month: "August",
                 cast: "Haley Joel Osment, Bruce Wills, Toni Collente",
                 OTT: "Disney+ Hotstar",
                 ratings: "8.2/10"

             },

             {
                 name: "Misery",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632985/misery_vguj2a.jpg ",
                 date: "30",
                 year: "1990",
                 month: "November",
                 cast: "Kathy Bates, James Caan, Rob Reiner ",
                 OTT: "",
                 ratings: "7.8/10"

             }, {
                 name: "Existenz",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632985/existe_vcyf6c.jpg ",
                 date: "14",
                 year: "1999",
                 month: "April",
                 cast: "Jude Law, Jennifer Jason leigh, David Cronenberg",
                 OTT: "",
                 ratings: "6.8/10"

             },

             {
                 name: "A Simple Plan",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/a_simpl_e_plan_f1prvy.jpg ",
                 date: "11",
                 year: "1998",
                 month: "December",
                 cast: "Billy Bob Thornton, Bridget Fonda, Sam Raimi",
                 OTT: "",
                 ratings: "7.5/10"

             }, {
                 name: "Open Your Eyes",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/open_your_eyes_ohvman.jpg ",
                 date: "19",
                 year: "1997",
                 month: "December",
                 cast: "Maria Wawreniuk , Sara Cellular, Alejandro Amenabar",
                 OTT: "",
                 ratings: "7.7/10"

             },

             {
                 name: "Basic Instinct",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/basic_stl88v.jpg ",
                 date: "30",
                 year: "1992",
                 month: "March",
                 cast: "Sharon Stone, Michael Douglas, Paul Verhoeven",
                 OTT: "",
                 ratings: "7/10"

             },

             {
                 name: "In the Mouth of Madness",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/in_the_mout_la95tk.jpg ",
                 date: "10",
                 year: "1994",
                 month: "December",
                 cast: "Sam Neill , Julie Carmen, John Carpenter",
                 OTT: "",
                 ratings: "7.1/10"

             }, {
                 name: "Stir of Echoes",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/stir_of_ech_ysuog1.jpg ",
                 date: "10",
                 year: "1999",
                 month: "September",
                 cast: " Kevin Bacon , Kathryn Erbe, David Koepp ",
                 OTT: "Amazon Prime Video",
                 ratings: "6.9/10"

             },

             {
                 name: "Gone Girl",
                 type: "series",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632985/gone_gir_ec9krx.jpg ",
                 date: "10",
                 year: "2014",
                 month: "October",
                 cast: "Ben Affleck , Rosamund Pike, David Fincher",
                 OTT: "Netflix",
                 ratings: "8.1/10"

             },

             {
                 name: "Now you see me",
                 type: "series",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/now_you_see_me1_d3ia8f.jpg ",
                 date: "31",
                 year: "2013",
                 month: "May",
                 cast: "Jesse Eisenberg, Isla Fisher, Loius Letrrier  ",
                 OTT: "Netflix",
                 ratings: "7.2/10"

             },

             {
                 name: "Now You See Me - II",
                 type: "series",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/now_u_see_me_2_acgyrt.jpg ",
                 date: "6",
                 year: "2016",
                 month: "June",
                 cast: "Jesse Eisenberg, Lizzy Caplan , Jon M. Chu",
                 OTT: "Netflix",
                 ratings: "6.4/10"

             },

             {
                 name: "Debt to the Sea",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/debt_to_the_zgovgg.jpg ",
                 date: "13",
                 year: "2019",
                 month: "September",
                 cast: "Sergej Trifunovic, Jelena Stuplijanin, Goran Gajic",
                 OTT: "Disney + Hotstar",
                 ratings: "7/10"

             },

             {
                 name: "Nightmare Alley",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/nightmare_gtfata.jpg ",
                 date: "17",
                 year: "2021",
                 month: "December",
                 cast: "Bradley cooper, cate Blanchett, Guillermo del Toro",
                 OTT: "Disney + Hotstar",
                 ratings: "7.1/10"

             },


             {
                 name: "The Bourne Ultimatum",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/the_bour_lz6xt1.jpg ",
                 date: "30",
                 year: "2007",
                 month: "August",
                 cast: "Matt Damon, Julia Stiles, Paul greengrass",
                 OTT: "Amazon Prime Video",
                 ratings: "8/10"

             },

             {
                 name: "Mission Impossible Ghost Protocol",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632985/mission_impo_rayvtl.jpg ",
                 date: "16",
                 year: "2011",
                 month: "December",
                 cast: "Tom cruise, Nicola Anderson, Brad bird",
                 OTT: "Amazon Prime Video",
                 ratings: "7.4/10"

             },

             {
                 name: "We Need to Talk About Kevin",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/we_need_to_b8jpaw.jpg ",
                 date: "21",
                 year: "2011",
                 month: "October",
                 cast: "Ezra Miller, Tilda Swinton, Lynne Ramsay",
                 OTT: "Amazon Prime Video",
                 ratings: "7.5/10"

             },

             {
                 name: "The Neon Demon",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/the_neon_uicl7t.jpg ",
                 date: "9",
                 year: "2016",
                 month: "June",
                 cast: "Keanu reeves, Elle fanning, Nicholas winding",
                 OTT: "Amazon Prime Video",
                 ratings: "6.1/10"

             },


             {
                 name: "The Girl with the Dragon Tattoo",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/the_girl_ydojf7.jpg ",
                 date: "20",
                 year: "2011",
                 month: "December",
                 cast: "Daniel Craig, Rooney Mara, David fincher",
                 OTT: "Amazon Prime Video",
                 ratings: "7.8/10"

             },

             {
                 name: "Nightcrawler",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632985/nightcraw_eagpzl.jpg ",
                 date: "31",
                 year: "2014",
                 month: "October",
                 cast: "Jake Gyllenhal, Rene russo, Dan gilroy",
                 OTT: "Amazon Prime Video",
                 ratings: "7.8 / 10 "

             },

             {
                 name: "Europa Report",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/euro_qan7qc.jpg ",
                 date: "2",
                 year: "2013",
                 month: "August",
                 cast: "Sharito Copley, Karolina wydra, Sebastian cordero",
                 OTT: "Amazon Prime Video",
                 ratings: "6.4/10"

             },

             {
                 name: "Deep Water",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/deep_wate_gzhdty.jpg ",
                 date: "18",
                 year: "2022",
                 month: "March",
                 cast: "Ben Affleck, Ana de armas, Adrian lyne",
                 OTT: "Amazon Prime Video",
                 ratings: "5.4/10"

             },

             {
                 name: "Umma",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/umma_worcbi.jpg ",
                 date: "18",
                 year: "2022",
                 month: "March",
                 cast: "Dermot Mulroney, Sandra oh, Iris shim",
                 OTT: "Amazon Prime Video",
                 ratings: "4.6/10"

             },

             {
                 name: "Wrong Turn",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653633076/wrong_tu_h8vmun.jpg ",
                 date: "25",
                 year: "2021",
                 month: "February",
                 cast: "Matthew modine, CharlOTTe vega, Declan o brien",
                 OTT: "Amazon Prime Video",
                 ratings: "5.5/10"

             },

             {
                 name: "Malignant",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632985/malignant_duieks.jpg ",
                 date: "10",
                 year: "2021",
                 month: "September",
                 cast: "George young, Annabelle wallis, James wan",
                 OTT: "Amazon Prime Video",
                 ratings: "6.2/10"

             },

             {
                 name: "Dangerous",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/dangero_lwkpmc.jpg ",
                 date: "5",
                 year: "2021",
                 month: "November",
                 cast: "ScOTT eastwood, Famke janssen, David Hackl",
                 OTT: "Amazon Prime Video",
                 ratings: "5.1/10"

             },

             {
                 name: "Escape Room",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/escape_u3pky2.jpg ",
                 date: "3",
                 year: "2019",
                 month: "January",
                 cast: "Logan Miller, Taylor Russell, Adam Robitel",
                 OTT: "Amazon Prime Video",
                 ratings: "6.4/10"

             },

             {
                 name: "Heriditary",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653632984/heridi_auw6hl.jpg ",
                 date: "8",
                 year: "2018",
                 month: "June",
                 cast: "Alex Wolff, Toni Collette, Ari aster",
                 OTT: "Amazon Prime Video",
                 ratings: "7.3/10"

             },

             {
                 name: "Tenet",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
                 date: "4",
                 year: "2020",
                 month: "December",
                 cast: "Robert Pattinson, Elizabeth Debicki, Christopher Nolan",
                 OTT: "Amazon Prime Video",
                 ratings: "7.3/10"

             },

             {
                 name: "Doctor Sleep",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/c/cf/Doctor_Sleep_%28Official_Film_Poster%29.png",
                 date: "31",
                 year: "2019",
                 month: "October",
                 cast: "Stephen King, Rebecca Ferguson, Mike flanagan",
                 OTT: "Amazon Prime Video",
                 ratings: "7.3/10"

             },


             {
                 name: "The Departed",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
                 date: "6",
                 year: "2006",
                 month: "October",
                 cast: "Leonardo Dicaprio, Vera farming, marting scorsese",
                 OTT: "Netflix",
                 ratings: "8.5/10"

             }, {
                 name: "The American",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: ":https://upload.wikimedia.org/wikipedia/en/b/b6/The_American_2010_poster.png",
                 date: "1",
                 year: "2010",
                 month: "September",
                 cast: "Geroge Clooney, Violante Placido, Anton Corbijn",
                 OTT: "Netflix",
                 ratings: "8.4/10"

             },

             {
                 name: "Gerald’ s Game",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/d/dd/GeraldsGameFilm.jpg",
                 date: "",
                 year: "2017",
                 month: "",
                 cast: "Bruce Greenwood, Carla Gugino, Mike Flanagan",
                 OTT: "Netflix",
                 ratings: "6.5/10"

             },

             {
                 name: "Savages",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/2/2d/Savages_poster.jpg",
                 date: "6",
                 year: "2012",
                 month: "July",
                 cast: "Tayllor Kitsch, Blake Lively, Oliver Stone",
                 OTT: "Netflix",
                 ratings: "6.4/10"

             },

             {
                 name: "Iboy",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653639219/iboy_zuoxrb.jpg",
                 date: "27",
                 year: "2017",
                 month: "January",
                 cast: "Bill Milner, Maisie Williams, Adam Randall",
                 OTT: "Netflix",
                 ratings: "5.9/10"

             },

             {
                 name: "Oceans 8",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/d/dd/OceansEightPoster.jpeg",
                 date: "5",
                 year: "2018",
                 month: "June",
                 cast: "Sandra Bullock, Cate Blanchett, gary ross",
                 OTT: "Netflix",
                 ratings: "6.3/10"

             },

             {
                 name: "Nora Roberts Brazen",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Brazen.jpg",
                 date: "13",
                 year: "2022",
                 month: "January",
                 cast: "Sam Page, Alyssa Milano, Matthew Finlan",
                 OTT: "Netflix",
                 ratings: "4.1/10"

             },

             {
                 name: "Synchronic",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/f/f5/Synchronic_poster.jpeg",
                 date: "7",
                 year: "2019",
                 month: "September",
                 cast: "Anthony Mackie, Ally Loannides, Justin Benson",
                 OTT: "Netflix",
                 ratings: "6.2/10"

             },

             {
                 name: "Windfall",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Windfall_%282022_film%29.jpg",
                 date: "18",
                 year: "2022",
                 month: "March",
                 cast: "Jason Segel, Lily Collins, Charlie Mcdowell",
                 OTT: "Netflix",
                 ratings: "5.7/10"

             }, {
                 name: "The Good Liar",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/5/54/TheGoodLiarPoster.jpeg",
                 date: "29",
                 year: "2019",
                 month: "November",
                 cast: "Ian Mckellen, Helen Mirren, Bill Condon",
                 OTT: "Netflix",
                 ratings: "6.7/10"

             }, {
                 name: "Lighthouse",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/2/2c/The_Lighthouse.jpeg",
                 date: "18",
                 year: "2019",
                 month: "October",
                 cast: "Willem Dafoe, Valeriia karaman, Robert Eggers",
                 OTT: "Netflix",
                 ratings: "7.4/10"

             },

             {
                 name: "Night Teeth",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Night_Teeth.jpg",
                 date: "20",
                 year: "2021",
                 month: "October",
                 cast: "Debby Ryan, Sydney Sweeney, Adam Randall",
                 OTT: "Netflix",
                 ratings: "7.2/10"

             },

             {
                 name: "The Weekend Away",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://s.movieinsider.com/images/p/150/626116_m1644540388.jpg",
                 date: "3",
                 year: "2022",
                 month: "March",
                 cast: "Ziad Bakri, Leighton Meester, Kim Farrant",
                 OTT: "Netflix",
                 ratings: "5.6/10"

             },

             {
                 name: "The Edge of War",
                 type: "Movies",
                 languages: "English",
                 category: "Thriller",
                 img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Munich_edge_of_war_poster.jpg",
                 date: "21",
                 year: "2022",
                 month: "January",
                 cast: "George Mackay, Liv Lisa Fries, Christian Schwochow",
                 OTT: "Netflix",
                 ratings: "6.8/10"

             },

             {
                 name: "Night Sky",
                 type: "series",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582947/night_swk2i6.jpg",
                 date: "20",
                 year: "2022",
                 month: "May",
                 cast: "Sisssy spacek, J K simmons, Juan jose campanella",
                 OTT: "Amazon Prime Video",
                 ratings: "7.5/10"

             }, {
                 name: "The Wilds",
                 type: "series",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582948/the_wilds_vfmgj1.jpg",
                 date: "11",
                 year: "2020",
                 month: "December",
                 cast: "Mia Healey, Erana James, Sophia Taylor Ali",
                 OTT: "Amazon Prime Video",
                 ratings: "7.2/10"

             }, {
                 name: "Reacher",
                 type: "series",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583324/reacher_gkq0mc.jpg",
                 date: "4",
                 year: "2022",
                 month: "February",
                 cast: "Alan Ritchson, Willa Fitzgerald, Kristin Kreuk",
                 OTT: "Amazon Prime Video",
                 ratings: "8.1/10"

             }, {
                 name: "Star Trek Pickard",
                 type: "series",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583324/star_smuodw.jpg",
                 date: "23",
                 year: "2020",
                 month: "January",
                 cast: "Patrick Stewart, Alison Pil, Isa Briones",
                 OTT: "Amazon Prime Video",
                 ratings: "7.3/10"

             }, {
                 name: "The Boys",
                 type: "series",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583324/the_boys_h5icup.jpg",
                 date: "26",
                 year: "2019",
                 month: "July",
                 cast: "Antony Starr, Karl Urban, Jack quaid",
                 OTT: "Amazon Prime Video",
                 ratings: "8.7/10"

             }, {
                 name: "Kung Fu Panda: The Paws of Destiny",
                 type: "series",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583324/kung_ykku3q.jpg",
                 date: "16",
                 year: "2018",
                 month: "November",
                 cast: "Makana Say, Mick Wingert, Gunnar Sizemore",
                 OTT: "Amazon Prime Video",
                 ratings: "7.5/10"

             }, {
                 name: "The Matrix",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583324/the_matr_rqlj7r.jpg",
                 date: "31",
                 year: "1999",
                 month: "March",
                 cast: "Keanu reeves, Carrie-Anne Moss, Laurence Fishburne",
                 OTT: "",
                 ratings: "8.7/10"

             },

             {
                 name: "Heat",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583323/heat_s3khwx.jpg",
                 date: "15",
                 year: "1995",
                 month: "December",
                 cast: "Robert De Niro, AL pacino, Michael Mann",
                 OTT: "",
                 ratings: "8.3/10"

             },

             {
                 name: "Independence Day",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583323/indep_tljozs.jpg",
                 date: "",
                 year: "1996",
                 month: "November",
                 cast: "Jeff Goldblum, Will Smith, Roland Emmerich",
                 OTT: "",
                 ratings: "7/10"

             },

             {
                 name: "Star Wars Episode 1: The Phantom Menace",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583324/star_wars_phantom_mn3eoq.jpg",
                 date: "22",
                 year: "1999",
                 month: "October",
                 cast: "Natalie Portman, Keira Knightley, Ewan McGregor",
                 OTT: "",
                 ratings: "6.5/10"

             },



             {
                 name: "Troy",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653581844/troy_a1v8hz.jpg",
                 date: "14",
                 year: "2004",
                 month: "May",
                 cast: "Brad Pitt, Eric Bana, Diane Kruger",
                 OTT: "Netfllix",
                 ratings: "7.3/10"

             }, {
                 name: "Hairspray",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653581891/hairspray_zwio6w.jpg",
                 date: "20",
                 year: "2007",
                 month: "July",
                 cast: "Nikki Blonsky, John Travotla, Zac Efron",
                 OTT: "Netfllix",
                 ratings: "6.7/10"

             }, {
                 name: "I Am Legend",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653581921/ial_kxx2x5.jpg",
                 date: "14",
                 year: "2007",
                 month: "December",
                 cast: "Will Smith, Alice Braga, Charlie Tahan",
                 OTT: "Netfllix",
                 ratings: "7.2/10"

             }, {
                 name: "Watchmen",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653581944/watchmen_dbxlrr.jpg",
                 date: "06",
                 year: "2009",
                 month: "March",
                 cast: "Jackie Earle Haley, Malin Akerman, Patrick Wilson",
                 OTT: "Netfllix",
                 ratings: "7.6/10"

             }, {
                 name: "There will be blood",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653581967/there_will_be_blood_peonze.jpg",
                 date: "26",
                 year: "2007",
                 month: "December",
                 cast: "Daniel Day-Lewis, Paul Dano, Sydney McCallister",
                 OTT: "Netfllix",
                 ratings: "8.2/10"

             }, {
                 name: "The Hangover",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582416/hang_ma5gek.jpg",
                 date: "26",
                 year: "2009",
                 month: "June",
                 cast: "Bradley Cooper, Zach Galifianakis, Ed Helms",
                 OTT: "Netfllix",
                 ratings: "7.7/10"

             }, {
                 name: "Snatch",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582440/snatch_wcxnmp.jpg",
                 date: "23",
                 year: "2000",
                 month: "August",
                 cast: "Brad Pitt, Jason Statham, Benicio del Toro",
                 OTT: "Netfllix",
                 ratings: "8.3/10"

             }, {
                 name: "The Holiday",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582449/the_holiday_lf59ty.jpg",
                 date: "09",
                 year: "2007",
                 month: "February",
                 cast: "Cameron Diaz, Jude Law, Kate Winslet",
                 OTT: "Netfllix",
                 ratings: "6.9/10"

             }, {
                 name: "Divergent",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582459/diver_cb1ioy.jpg",
                 date: "11",
                 year: "2014",
                 month: "April",
                 cast: "Shailene Woodley, Theo James, Miles Teller",
                 OTT: "Netflix",
                 ratings: "6.6/10"

             }, {
                 name: "American Sniper",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582469/ameri_fsvn2h.jpg",
                 date: "16",
                 year: "2015",
                 month: "January",
                 cast: "Bradley Cooper, Slenna Miller, Luke Grimes",
                 OTT: "Netfllix",
                 ratings: "7.3/10"

             }, {
                 name: "Gladiator ",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582477/glad_bwndpw.jpg",
                 date: "01",
                 year: "2000",
                 month: "September",
                 cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
                 OTT: "Netfllix",
                 ratings: "8.5/10"

             }, {
                 name: "Black crab",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582485/black_ji5im7.jpg",
                 date: "18",
                 year: "2022",
                 month: "March",
                 cast: "Noomi Repace, Jakob Oftebro, Dar Salim",
                 OTT: "Netfllix",
                 ratings: "5.6/10"

             }, {
                 name: "Anna",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582493/anna_psr2p0.jpg",
                 date: "10",
                 year: "2019",
                 month: "July",
                 cast: "Sasha Luss, Cillian Murphy, Helen Mirren",
                 OTT: "Netfllix",
                 ratings: "6.6/10"

             }, {
                 name: "The Takedown",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582502/the_take_rjpyvo.jpg",
                 date: "06",
                 year: "2019",
                 month: "May",
                 cast: "Omar Sy, Izia, Laurent Lafitte",
                 OTT: "Netfllix",
                 ratings: "5.7/10"

             }, {
                 name: "Polar",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582510/pola_znsl9b.jpg",
                 date: "25",
                 year: "2019",
                 month: "January",
                 cast: "Mads Mikkelsen, Ruby O. Fee, Vanessa Hudgens",
                 OTT: "Netfllix",
                 ratings: "6.3/10"

             }, {
                 name: "Restless",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582517/restl_lrdnrn.jpg",
                 date: "25",
                 year: "2022",
                 month: "February",
                 cast: "Franck Gastambide, Tracy Gotoas, Simon Abkarian",
                 OTT: "Netfllix",
                 ratings: "5.8/10"

             }, {
                 name: "Jurassic Park",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582526/jurra_pk5yfp.jpg",
                 date: "15",
                 year: "1997",
                 month: "April",
                 cast: "Jeff Doldblum, Sam Neil, Laura Dem",
                 OTT: "",
                 ratings: "8.2/10"

             }, {
                 name: "The Fifth Element",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653582534/the_fifth_el_qhikmh.jpg",
                 date: "7",
                 year: "1997",
                 month: "May",
                 cast: "Bruce Willis, Milla Jovovich, Chris Tucker",
                 OTT: "",
                 ratings: "7.6/10"

             },


             {
                 name: "Avengers Infinity War",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583794/infinity_war_qo1vhy.jpg",
                 date: "27",
                 year: "2018",
                 month: "April",
                 cast: "Robert Downey Jr, Scarlett Johansson, Chris Hensworth",
                 OTT: "Disney + Hotstar",
                 ratings: "8.4/10"

             },

             {
                 name: "Avengers End Game",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583794/end_game_isylkc.webp",
                 date: "26",
                 year: "2019",
                 month: "April",
                 cast: " Robert Downey Jr, Scarlett Johansson, Chris Hensworth ",
                 OTT: "Disney + Hotstar",
                 ratings: "8.4/10"

             },

             {
                 name: "Free Guy",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583794/free_guy_laqqfg.jpg",
                 date: "13",
                 year: "2021",
                 month: "August",
                 cast: "Ryan Reynolds, Jodie Corner, Dwayne Johnson",
                 OTT: "Disney + Hotstar",
                 ratings: "7.1/10"

             },

             {
                 name: "Eternals",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653583793/etarnal_fb0ebl.jpg",
                 date: "5",
                 year: "2021",
                 month: "November",
                 cast: "Harry Styles, Angelina Jolie, Kit Harington",
                 OTT: "Disney + Hotstar",
                 ratings: "6.3/10"
             },

             {
                 name: "Harry POTTer and The Philosopher’s Stone",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584499/philoso_qhoyry.jpg",
                 date: "12",
                 year: "2002",
                 month: "April",
                 cast: "Daniel Radcliffe, Rupert Grint, Emma Watson",
                 OTT: "Amazon Prime Video",
                 ratings: "7.6/10"

             }, {
                 name: "Harry POTTer And the Order of The Phoneix",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584499/order_of_t_aygcqk.jpg",
                 date: "13",
                 year: "2007",
                 month: "July",
                 cast: "Daniel Radcliffe, Emma Watson, David Yates",
                 OTT: "Amazon Prime Video",
                 ratings: "7.5/10"

             }, {
                 name: "Harry POTTer and The Half Blood Prince",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584498/half_blood_xkonon.jpg",
                 date: "15",
                 year: "2009",
                 month: "July",
                 cast: "Daniel Radcliffe, Emma Watson, David Yates",
                 OTT: "Amazon Prime Video",
                 ratings: "7.6/10"

             }, {
                 name: "Harry POTTer and The Deathly Hallows",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584497/deathly_hall_xx1dzj.jpg",
                 date: "19",
                 year: "2010",
                 month: "November",
                 cast: "Tom Felton, Emma Watson, David Yates",
                 OTT: "Amazon Prime Video",
                 ratings: "7.7/10"

             }, {
                 name: "The Bank Job",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584499/the_bank_nvkkmu.jpg",
                 date: "28",
                 year: "2008",
                 month: "February",
                 cast: "Jason Statham, Saffon Burrows, Roger Donaldson",
                 OTT: "Amazon Prime Video",
                 ratings: "7.2/10"

             }, {
                 name: "The Dark Knight",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584499/the_dark_kn_hs5erj.jpg",
                 date: "18",
                 year: "2008",
                 month: "July",
                 cast: "Christian Bale, Heath ledger, Maggie Gyllenhaal",
                 OTT: "Amazon Prime Video",
                 ratings: "9/10"

             }, {
                 name: "Wanted",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584500/wante_s6qtfn.jpg",
                 date: "18",
                 year: "2009",
                 month: "September",
                 cast: "James McAvoy, Angelina Jolie, Chris Pratt",
                 OTT: "Amazon Prime Video",
                 ratings: "6.7/10"

             }, {
                 name: "Inception",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584498/inception_idfacm.jpg",
                 date: "16",
                 year: "2010",
                 month: "July",
                 cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Marion Cotillard",
                 OTT: "Amazon Prime Video",
                 ratings: "8.8/10"

             }, {
                 name: "Fast And Furious",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584498/fast_and_fu_oxapp8.jpg",
                 date: "01",
                 year: "2015",
                 month: "April",
                 cast: "Vin Diesel, Paul Walker, Michelle Rodriguez",
                 OTT: "Amazon Prime Video",
                 ratings: "6.5/10"

             }, {
                 name: "Justice League",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584499/just_lyngox.jpg",
                 date: "17",
                 year: "2017",
                 month: "November",
                 cast: "Ben Affleck, Gal Gadot, Henry Cavill",
                 OTT: "Amazon Prime Video",
                 ratings: "6.1/10"

             }, {
                 name: "Journey 2 The Mysterious Island",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584499/journey_2_mys_jyy9nn.jpg",
                 date: "03",
                 year: "2012",
                 month: "February",
                 cast: "Dwayne Johnson, Josh Hutcherson, Vanessa Hudgens",
                 OTT: "Amazon Prime Video",
                 ratings: "5.7/10"

             }, {
                 name: "Train To Busan",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584500/train_txxgcv.jpg",
                 date: "01",
                 year: "2016",
                 month: "July",
                 cast: "Gong Yoo, Don lee, Brad Peyton",
                 OTT: "Amazon Prime Video",
                 ratings: "7.6/10"

             }, {
                 name: "Fantastic Beasts",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584497/fantas_ro96sn.jpg",
                 date: "18",
                 year: "2016",
                 month: "November",
                 cast: "Mads Mikkelsen, Eddie Redmayne, David Yates",
                 OTT: "Amazon Prime Video",
                 ratings: "6.4/10"

             }, {
                 name: "Fast And Furious 5",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584498/fast_and_fu_5_jjzzs8.jpg",
                 date: "29",
                 year: "2011",
                 month: "April",
                 cast: "Elsa Pataky, Paul Walker, Justin Lin",
                 OTT: "Amazon Prime Video",
                 ratings: "7.3/10"

             }, {
                 name: "No Time To Die",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584499/no_time_to_j84udb.jpg",
                 date: "30",
                 year: "2021",
                 month: "September",
                 cast: "Daniel Craig, lea Seydoux, Lashana Lynch",
                 OTT: "Amazon Prime Video",
                 ratings: "7.3/10"

             }, {
                 name: "The Matrix Resurrections",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584500/the_matrix_mqfnpa.jpg",
                 date: "22",
                 year: "2021",
                 month: "December",
                 cast: "Keanu Reeves, Jessica Henwick, Lana Wachowski",
                 OTT: "Amazon Prime Video",
                 ratings: "5.7/10"

             }, {
                 name: "Aquaman",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584497/aquam_rbpvro.jpg",
                 date: "14",
                 year: "2018",
                 month: "December",
                 cast: " Jason Momoa, Amber Heard, James Wan ",
                 OTT: "Amazon Prime Video",
                 ratings: "6.8/10"

             }, {
                 name: "Godzilla King of Monsters ",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584498/godz_ext08q.jpg",
                 date: "31",
                 year: "2019",
                 month: "May",
                 cast: "Millie Bobby Brown, Vera Farminga, Michael Dougherty",
                 OTT: "Amazon Prime Video",
                 ratings: "6/10"

             }, {
                 name: "Gasoline Alley",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "https://res.cloudinary.com/dagm2fdpd/image/upload/v1653584498/gasolin_c9oxb8.jpg",
                 date: "25",
                 year: "2022",
                 month: "February",
                 cast: "Devon Sawa, Irina Antonenko, Edward Drake",
                 OTT: "Amazon Prime Video",
                 ratings: "3.6/10"

             },

             {
                 name: "Troy",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "14",
                 year: "2004",
                 month: "May",
                 cast: "Brad Pitt, Eric Bana, Diane Kruger",
                 OTT: "Netfllix",
                 ratings: "7.3/10"

             }, {
                 name: "Hairspray",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "20",
                 year: "2007",
                 month: "July",
                 cast: "Nikki Blonsky, John Travotla, Zac Efron",
                 OTT: "Netfllix",
                 ratings: "6.7/10"

             }, {
                 name: "I Am Legend",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "14",
                 year: "2007",
                 month: "December",
                 cast: "Will Smith, Alice Braga, Charlie Tahan",
                 OTT: "Netfllix",
                 ratings: "7.2/10"

             }, {
                 name: "Watchmen",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "06",
                 year: "2009",
                 month: "March",
                 cast: "Jackie Earle Haley, Malin Akerman, Patrick Wilson",
                 OTT: "Netfllix",
                 ratings: "7.6/10"

             }, {
                 name: "There will be blood",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "26",
                 year: "2007",
                 month: "December",
                 cast: "Daniel Day-Lewis, Paul Dano, Sydney McCallister",
                 OTT: "Netfllix",
                 ratings: "8.2/10"

             }, {
                 name: "The Hangover",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "26",
                 year: "2009",
                 month: "June",
                 cast: "Bradley Cooper, Zach Galifianakis, Ed Helms",
                 OTT: "Netfllix",
                 ratings: "7.7/10"

             }, {
                 name: "Snatch",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "23",
                 year: "2000",
                 month: "August",
                 cast: "Brad Pitt, Jason Statham, Benicio del Toro",
                 OTT: "Netfllix",
                 ratings: "8.3/10"

             }, {
                 name: "The Holiday",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "09",
                 year: "2007",
                 month: "February",
                 cast: "Cameron Diaz, Jude Law, Kate Winslet",
                 OTT: "Netfllix",
                 ratings: "6.9/10"

             }, {
                 name: "Divergent",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "11",
                 year: "2014",
                 month: "April",
                 cast: "Shailene Woodley, Theo James, Miles Teller",
                 OTT: "Netflix",
                 ratings: "6.6/10"

             }, {
                 name: "American Sniper",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "16",
                 year: "2015",
                 month: "January",
                 cast: "Bradley Cooper, Slenna Miller, Luke Grimes",
                 OTT: "Netfllix",
                 ratings: "7.3/10"

             }, {
                 name: "Gladiator ",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "01",
                 year: "2000",
                 month: "September",
                 cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
                 OTT: "Netfllix",
                 ratings: "8.5/10"

             }, {
                 name: "Black crab",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "18",
                 year: "2022",
                 month: "March",
                 cast: "Noomi Repace, Jakob Oftebro, Dar Salim",
                 OTT: "Netfllix",
                 ratings: "5.6/10"

             }, {
                 name: "Anna",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "10",
                 year: "2019",
                 month: "July",
                 cast: "Sasha Luss, Cillian Murphy, Helen Mirren",
                 OTT: "Netfllix",
                 ratings: "6.6/10"

             }, {
                 name: "The Takedown",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "06",
                 year: "2019",
                 month: "May",
                 cast: "Omar Sy, Izia, Laurent Lafitte",
                 OTT: "Netfllix",
                 ratings: "5.7/10"

             }, {
                 name: "Polar",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "25",
                 year: "2019",
                 month: "January",
                 cast: "Mads Mikkelsen, Ruby O. Fee, Vanessa Hudgens",
                 OTT: "Netfllix",
                 ratings: "6.3/10"

             }, {
                 name: "Restless",
                 type: "Movie",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "25",
                 year: "2022",
                 month: "February",
                 cast: "Franck Gastambide, Tracy Gotoas, Simon Abkarian",
                 OTT: "Netfllix",
                 ratings: "5.8/10"

             }, {
                 name: "Jurassic Park",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "15",
                 year: "1997",
                 month: "April",
                 cast: "Jeff Doldblum, Sam Neil, Laura Dem",
                 OTT: "",
                 ratings: "8.2/10"

             }, {
                 name: "The Fifth Element",
                 type: "Movies",
                 languages: "English",
                 category: "Action",
                 img: "",
                 date: "7",
                 year: "1997",
                 month: "May",
                 cast: "Bruce Willis, Milla Jovovich, Chris Tucker",
                 OTT: "",
                 ratings: "7.6/10"

             },

             {
                 name: "Meet the parents",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/meet_the_uaf6yh.jpg ",
                 date: "06",
                 year: "2000",
                 month: "October",
                 cast: "Ben stiller,Teri polo,Jay roach",
                 OTT: "Netflix",
                 ratings: "7/10"

             }, {
                 name: "Don't look up",
                 type: "Movies ",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586468/dont_loo_gbmxwx.jpg ",
                 date: "05",
                 year: "2021",
                 month: "December",
                 cast: "Leonardo Dicaprio,Jenneifer lawrence,Adam McKay",
                 OTT: "Netflix",
                 ratings: "7.2/10"

             }, {
                 name: "The Hangover",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/the_hango_nlwsse.jpg ",
                 date: "26",
                 year: "2009",
                 month: "June",
                 cast: "Zach Galifianakis,Bradley Cooper,Todd phillips",
                 OTT: "Netflix",
                 ratings: "7.7/10"

             }, {
                 name: "Ted",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/ted_b6vrat.jpg ",
                 date: "12",
                 year: "2012",
                 month: "June",
                 cast: "Mark Wahlber,Mila Kunis,Seth MacFralane",
                 OTT: "Amazon Prime Video",
                 ratings: "6.9/10"

             }, {
                 name: "The Dictator",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/the_dict_bnj0ak.jpg ",
                 date: "16",
                 year: "2012",
                 month: "June",
                 cast: "Sacha Baron Cohen,Anna Faris,Larry charies",
                 OTT: "Amazon Prime Video",
                 ratings: "6.4/10"

             }, {
                 name: "Super Bad",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/super_bad_ojn74f.jpg ",
                 date: "26",
                 year: "2007",
                 month: "October",
                 cast: "Jonah Hill,Emma Stone,Greg MOTTola",
                 OTT: "Netflix",
                 ratings: "7.6/10"

             }, {
                 name: "Like A Boss",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/like_a_kyimv5.jpg ",
                 date: "10",
                 year: "2020",
                 month: "January",
                 cast: "Miguel Arteta",
                 OTT: "Amazon Prime Video",
                 ratings: "4.6/10"

             }, {
                 name: "Horrible Bosses",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/horrib_oyh3bg.jpg ",
                 date: "01",
                 year: "2012",
                 month: "June",
                 cast: "Jason Bateman,Jennifer Aniston,Seth Gordon",
                 OTT: "Amazon Prime Video",
                 ratings: "6.9/10"

             }, {
                 name: "The Mask",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586470/the_mask_emp0z7.jpg ",
                 date: "29",
                 year: "1994",
                 month: "July",
                 cast: "Jim Carrey,Cameron Diaz,Chuck Russell",
                 OTT: "Amazon Prime Video",
                 ratings: "6.9/10"

             }, {
                 name: "Game Night",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/game_ni_poxkhu.jpg ",
                 date: "23",
                 year: "2018",
                 month: "February",
                 cast: "Jason Bateman,Rachel McAdams,John Francis Daley",
                 OTT: "Netflix",
                 ratings: "6.9/10"

             }, {
                 name: "The Bubble",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/the_bubble_ww1bsn.jpg ",
                 date: "01",
                 year: "2022",
                 month: "April",
                 cast: "Pedro Pascal,Iris Apatow,Judd Apatow",
                 OTT: "Netflix",
                 ratings: "4.7/10"

             }, {
                 name: "The Intern",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586470/the_inter_ys8hxp.jpg ",
                 date: "25",
                 year: "2015",
                 month: "September",
                 cast: "Adam DeVine,Christina Scherer,Nancy Meyers",
                 OTT: "Amazon Prime Video",
                 ratings: "7.1/10"

             }, {
                 name: "Dumb And Dumber",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586468/dumb_vojcxs.jpg ",
                 date: "16",
                 year: "1994",
                 month: "December",
                 cast: "Jim Carrey,Lauren Holly,Peter Farrelly",
                 OTT: "Netflix",
                 ratings: "7.3/10"

             }, {
                 name: "Billy Madison",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586468/billy_ue6hdo.jpg ",
                 date: "10",
                 year: "1995",
                 month: "February",
                 cast: "Adam Sandler,Bridgette Wilson,Tamra Davis",
                 OTT: "Amazon Prime Video",
                 ratings: "6.3/10"

             }, {
                 name: "Due Date",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586468/due_date_cad10a.jpg ",
                 date: "31",
                 year: "2010",
                 month: "October",
                 cast: "Todd Phillips,Michelle Monaghan,Todd Phillips",
                 OTT: "Netflix",
                 ratings: "6.5/10"

             }, {
                 name: "We're The Millers",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586470/we_are_the_millers_rvve2g.jpg ",
                 date: "03",
                 year: "2013",
                 month: "August",
                 cast: "Will Poulter,Jennifer Aniston,Rawson Marshall Thurber",
                 OTT: "Amazon Prime Video",
                 ratings: "7/10"

             }, {
                 name: "Office Space",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/office_y0f8lm.jpg ",
                 date: "19",
                 year: "1999",
                 month: "february",
                 cast: "Mike Judge,Jennifer Aniston",
                 OTT: "Amazon Prime Video",
                 ratings: "7.7/10"

             }, {
                 name: "Home Alone",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586469/home_alone_hqxgup.jpg ",
                 date: "10",
                 year: "1990",
                 month: "November",
                 cast: "Macaulay Culkin,Joe Pesci,Chris Columbus",
                 OTT: "Amazon Prime Video",
                 ratings: "7.7/10"

             }, {
                 name: "Booksmart",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586468/booksmart_xryvol.jpg ",
                 date: "10",
                 year: "2019",
                 month: "March",
                 cast: "Kaitlyn Dever,Beanie Feldstein,Olivia Wilde",
                 OTT: "Netflix",
                 ratings: "7.1/10"

             }, {
                 name: "The Royal Tenenbaums",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586470/the_royal_dwvltp.jpg ",
                 date: "05",
                 year: "2001",
                 month: "October",
                 cast: "Owen Wilson,Gwyneth Paltrow,Wes Anderson",
                 OTT: "Disney + Hotstar",
                 ratings: "7.6/10"

             }, {
                 name: "Best In Show",
                 type: "Movies",
                 languages: "English",
                 category: "Comedy",
                 img: " https://res.cloudinary.com/dagm2fdpd/image/upload/v1653586468/best_in_show_lgpkzv.jpg ",
                 date: "29",
                 year: "2000",
                 month: "September",
                 cast: "Fred Wilard,Catherine O'Hara,Christopher Guest",
                 OTT: "Amazon Prime Video",
                 ratings: "7.4/10"

             },

             {
                 name: "Hera Pheri",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " http://4.bp.blogspot.com/-F9cQtITQTlE/UUPe2p0zkpI/AAAAAAAAAmE/YN5VV-AWNpM/s1600/Phir-Hera-Pheri.jpg ",
                 date: "31",
                 year: "2000",
                 month: "March",
                 cast: "Akshay Kumar , Tabu ",
                 OTT: "Voot",
                 ratings: "8.1/10"
             },

             {
                 name: "Hungama ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://4.bp.blogspot.com/-BfpsFK-9OPs/T6axXBLHgDI/AAAAAAAAD1Y/iE9EEctlGcc/s1600/hungama_ver5_xlg.jpg ",
                 date: "1",
                 year: "2003",
                 month: "August",
                 cast: "Paresh Rawal , Akshaye Khanna , Rimi Sen ",
                 OTT: "Youtube, Hotstar",
                 ratings: "7.6/10"
             },


             {
                 name: " Bhool Bhulaiyaa",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://www.quirkybyte.com/wp-content/uploads/2018/10/bhool-bhulaiyaa.jpg ",
                 date: "19",
                 year: "2007",
                 month: "October",
                 cast: "Akshay Kumar, Rajpal Yadav , Vidya Balan",
                 OTT: "Youtube , Hotstar",
                 ratings: "7.4/10"
             },

             {
                 name: "One Two Three ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://media2.bollywoodhungama.in/wp-content/uploads/2020/05/23-4-10.jpg ",
                 date: "28",
                 year: "2008",
                 month: "March",
                 cast: "Suniel Shetty , Paresh Rawal ,Sameera Reddy ",
                 director: "Ashwni Dhir",
                 OTT: "Jio tv",
                 ratings: "5.3/10"
             },

             {
                 name: "Khatta Meetha",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " http://3.bp.blogspot.com/_cKPPqWah0hM/TC3ifrhNxOI/AAAAAAAAN8w/vcdOtSnTaZQ/s1600/Khatta-Meetha-posters(2).jpg ",
                 date: "23",
                 year: "2010",
                 month: "July",
                 cast: "Akshay Kumar , Trisha Krishnan , Rajpal Yadav ",
                 director: "Priyadarshan",
                 OTT: "Jio tv , Youtube , Amazon prime video",
                 ratings: "5.1/10"
             },

             {
                 name: " Delhi Belly",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://img.hindilinks4u.to/2011/07/Delhi-Belly-2011-709x1024.jpg ",
                 date: "1",
                 year: "2010",
                 month: "July",
                 cast: "Imran Khan , Vir Das , Aamir Khan , Shenaz Treasury ",
                 director: "Abhinay Deo",
                 OTT: "Netflix",
                 ratings: "7.5/10"
             },

             {
                 name: " Go Goa Gone",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e82f1f7831057.560b25b443a2b.jpg ",
                 date: "10",
                 year: "2013",
                 month: "May",
                 cast: "Saif Ali Khan , Kunal Khemu , Puja Gupta ",
                 director: "Krishna D.K.",
                 OTT: "Jio cinema , Zee5",
                 ratings: "6.6/10"
             },

             {
                 name: "Entertainment  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://i.pinimg.com/736x/19/8a/bf/198abfb1124c6e9ee01716942b67800f--entertainment-online-akshay-kumar.jpg ",
                 date: "8",
                 year: "2014",
                 month: "August",
                 cast: "Akshay Kumar , Tamanna Bhatia ,Krushna Abhishek , Johnny Lever ",
                 director: "Farhad Samji",
                 OTT: "Youtube , Zee5 ",
                 ratings: "4.4/10"
             },

             {
                 name: " Welcome Back",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://i.pinimg.com/originals/8f/a7/f6/8fa7f65c6ed8d8fc64b19b467b3edd4f.jpg ",
                 date: "",
                 year: "",
                 month: "",
                 cast: "Anil Kapoor , Nana Patekar , Shruti Haasan , Paresh Rawal ",
                 director: "Anees Bazmee",
                 OTT: "Jio cinema , Zee5",
                 ratings: "4.2/10"
             },

             {
                 name: "Baankey Ki Crazy Baraat",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://i.pinimg.com/originals/0f/8d/94/0f8d94c2961f9a71c1aea5182a928e08.jpg ",
                 date: "28",
                 year: "2015",
                 month: "August",
                 cast: "Rajpal Yadav , Vijay Raaz , Sanjay Mishra , Tia Bajpai ",
                 director: "Ajaz Khan",
                 OTT: "Youtube , Zee5",
                 ratings: "6.1/10"
             },

             {
                 name: "Kya Kool Hain Hum 3",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/01/22/417468-kya-kool-hai-hum-3.jpg ",
                 date: "23",
                 year: "2016",
                 month: "January",
                 cast: "Tusshar Kapoor , Mandana Karimi , Aftab Shivdasani , Gizele Thakral ",
                 director: "Umesh Ghadge",
                 OTT: "Netflix , Zee5",
                 ratings: "1.9/10"
             },

             {
                 name: "Luka Chuppi",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://static.moviecrow.com/gallery/20190218/157117-luck.jpg ",
                 date: "1",
                 year: "2019",
                 month: "March",
                 cast: "Kriti Sanon , Kartik Aaryan , Aparshakti Khurana ,Pankaj Tripathi ",
                 director: "Laxman Utekar",
                 OTT: "Netflix , Jio cinema",
                 ratings: "6.1/10"
             },

             {
                 name: " Chhichhore",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: "https://www.newsbugz.com/wp-content/uploads/2019/04/Chhichhore-Hindi-Movie1.jpg",
                 date: "6",
                 year: "2019",
                 month: "September",
                 cast: " Sushant Singh Rajput , Naveen Polishetty ,Tahir Raj Bhasin",
                 director: "Nitesh Tiwari",
                 OTT: "Hotstar",
                 ratings: "8.2/10"
             },

             {
                 name: " De De Pyaar De",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://mymovies.vishalkranti.com/wp-content/uploads/2020/08/De-De-Pyaar-De.jpg ",
                 date: "16",
                 year: "2019",
                 month: "May",
                 cast: "Ajay Devgan , Rakul Preet Singh , Tabu , Jimmy Shergill ",
                 director: "Akiv Ali",
                 OTT: "Hotstar",
                 ratings: "6.5/10"
             },


             {
                 name: " Dharala Prabhu",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://www.quirkybyte.com/wp-content/uploads/2020/04/2-56.jpg ",
                 date: "13",
                 year: "2020",
                 month: "March",
                 cast: "Tanya Hope , Harish Kalyan ",
                 director: "Krishna Marimuthu",
                 OTT: "Amazon prime video",
                 ratings: "6.8/10"
             },

             {
                 name: "Bachchan Pandey ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://www.blog-sms.com/blogadmin/uploads/blog_images/1595949700BACHCHAN-PANDEY-MOVIE.jpg ",
                 date: "18",
                 year: "2022",
                 month: "March",
                 cast: "Akshay Kumar , Kriti Sanon ",
                 director: "Farhad Samji",
                 OTT: "Amazon prime video",
                 ratings: "5.9/10"
             },

             {
                 name: "Indoo Ki Jawani",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://1.bp.blogspot.com/-iPxCHlHCPrI/YEDXnk77gSI/AAAAAAAAAG8/bPWYiakbQroF8vWlnMETsrYJUHkDiEEgCLcBGAsYHQ/s2048/Indoo%2BKi%2BJawani.jpg ",
                 date: "11",
                 year: "2020",
                 month: "December",
                 cast: "Aditya Seal , Kiara Advani ",
                 director: "Abir Sengupta",
                 OTT: "Netflix",
                 ratings: "3.3/10"
             }, {
                 name: " Hungama 2",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: "https://livemovieweb.com/wpcontent/uploads/2021/07/1cB0Zml2lfsbeGrLo1YoFpu5HdH.jpg ",
                 date: "23",
                 year: "2021",
                 month: "July",
                 cast: " Pranitha Subhash , Meezaan Jafri",
                 director: "Priyadarshan",
                 OTT: "Disney+ Hotstar",
                 ratings: "3.2/10"
             },

             {
                 name: "Roohi",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://hityaflopmovieworld.com/wp-content/uploads/2021/02/roohi-official-trailer.jpg",
                 date: "11",
                 year: "2021",
                 month: "March",
                 cast: "Janhvi Kapoor , Rajkummar Rao ",
                 director: "Hardik Mehta",
                 OTT: "Netflix",
                 ratings: "4.3/10"
             },

             {
                 name: "Kota Factory",
                 type: "series",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://i.ibb.co/GswLxBT/6942ce56ea226a58a31838da503b55f7-md.jpg ",
                 date: "16",
                 year: "2019",
                 month: "April",
                 cast: "Jitendra Kumar , Ahsaas Channa , Urvi Singh , Mayur More ",
                 director: "Raghav Subbu",
                 OTT: "Netflix",
                 ratings: "9.1/10"
             },

             {
                 name: "Gullak",
                 type: "series",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://www.iwmbuzz.com/wp-content/uploads/2019/07/reasons-why-sonylivs-gullak-is-a-must-watch.jpg ",
                 date: "27",
                 year: "2019",
                 month: "June",
                 cast: " Vaibhav Raj Gupta , Harsh Mayar , Jameel Khan , Geetanjali Kulkarni",
                 director: "Amrit Raj Gupta",
                 OTT: "Sony liv",
                 ratings: "9.1/10"
             },

             {
                 name: "Permanent Roommates ",
                 type: "series",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://cinemazworld.com/wp-content/uploads/2020/06/Indian-Web-Series-List-Permanent-Roommates.jpg ",
                 date: "31",
                 year: "2014",
                 month: "October",
                 cast: " Nidhi Singh , Sumeet Vyas , Deepak Kumar Mishra , Nidhi Bisht",
                 director: "Sameer Saxena Deepak Kumar Mishra",
                 OTT: "Sony liv , Zee5",
                 ratings: "8.6/10"
             },

             {
                 name: " Comicstaan",
                 type: "series",
                 languages: "Hindi",
                 category: "Comedy",
                 img: "https://baggout.com/wp-content/uploads/2019/06/Comicstaan-768x403.jpg ",
                 date: "13",
                 year: "2018",
                 month: "July",
                 cast: " Sumukhi Suresh , Kaneez Surka ,Biswa Kalyan Rath , Kanan Gill",
                 director: "Khuzema Haveliwala",
                 OTT: "Amazon prime video",
                 ratings: "6.7/10"
             },

             {
                 name: " Maddam Sir",
                 type: "series",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://img.24reel.com/cdn/big/show/ef920bf4-d892-44b2-bac9-ec34b2c0c8f4.jpg",
                 date: "24",
                 year: "2020",
                 month: "February",
                 cast: " Gulki Joshi , Yukti Kapoor , Bhavika Sharma , Rahil Azam",
                 director: "Hemen Chauhan",
                 OTT: "Sony liv",
                 ratings: "7.7/10"
             },


             {
                 name: "The Aam Aadmi Family ",
                 type: "series",
                 languages: "Hindi",
                 category: "Comedy",
                 img: " https://artworks.thetvdb.com/banners/fanart/original/331365-1.jpg ",
                 date: "5",
                 year: "2016",
                 month: "November",
                 cast: " Gunjan Malhotra , Sudheer Chobessy , Lubna Salim , Kamlesh Gill",
                 director: "Apoorv Singh Karki",
                 OTT: "Sony liv",
                 ratings: "8.5/10"
             }, {
                 name: " Chand par chadayee ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://bingeddata.s3.amazonaws.com/uploads/2021/01/chand-par-chadayee-1.jpg ",
                 date: "01",
                 year: "1967",
                 month: "January",
                 cast: " Dara Singh, Helen, T P Sundaram ",
                 OTT: "Youtube",
                 ratings: "5.5/10"
             }, {
                 name: " Shiva ka Insaaf ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://i.ytimg.com/vi/tibP7MkreGU/maxresdefault.jpg ",
                 date: "15",
                 year: "1985",
                 month: "March",
                 cast: "Jackie Shroff, Poonam Dhillon , Raj N. Sippy",
                 OTT: "Youtube",
                 ratings: "4.6/10"
             },

             {
                 name: " Mr India ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://media.movieassets.com/static/images/items/movies/posters/ea00682c46a852e0ef7ddaa0460e6bd9.jpg ",
                 date: "25",
                 year: "1967",
                 month: "May",
                 cast: " Anil Kapoor, Seema Sohni, Shekhar Kapur",
                 OTT: "Youtube",
                 ratings: "7.7/10"
             },


             {
                 name: "Mr x in Bombay",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://images.hungama.com/c/1/7a0/606/2445003/2445003_1280x800.jpg ",
                 date: "01",
                 year: "1964",
                 month: "January",
                 cast: "Kishore Kumar, Kumkum, Shantilal Soni",
                 OTT: "Youtube",
                 ratings: "6.2/10"
             },

             {
                 name: "Kalai Arasi ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://www.tamilpaa.com/upload/movies/kalai-arasi.jpg  ",
                 date: "19",
                 year: "1963",
                 month: "April",
                 cast: " M.G.Ramachandran,Bhanumathi,A.Kasilingam ",
                 OTT: "Youtube",
                 ratings: "8.1/10"
             },

             {
                 name: "Patalghar ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://images-na.ssl-images-amazon.com/images/I/41fWw9o9-eL.jpg ",
                 date: "25",
                 year: "2003",
                 month: "March",
                 cast: "Soumitra Chatterjee, Biplab Chatterjee, Abhijit Chowdhury",
                 OTT: "Youtube",
                 ratings: "7.6/10"
             },

             {
                 name: " Koi mil gaya",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "  https://www.regarder-films.net/wp-content/uploads/2020/02/koi-mil-gaya.jpg ",
                 date: "08",
                 year: "2003",
                 month: "August",
                 cast: "Hrithik Roshan, preity Zinta, Rakesh Roshan ",
                 OTT: "Zee5",
                 ratings: "7.1/10"
             },

             {
                 name: "Love story 2050",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://images-na.ssl-images-amazon.com/images/I/71u2shALkJL._SL1024_.jpg ",
                 date: "04",
                 year: "2008",
                 month: "July",
                 cast: " Harman Baweja, Priyanka Chopra, Harry Baweja",
                 OTT: "Amazon Prime Video",
                 ratings: "2.6/10"
             },

             {
                 name: " Action replay",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "    http://1.bp.blogspot.com/_WTnXc_vrCBs/TJtkLBUvSiI/AAAAAAAADtg/QDE0AO7g6eU/s1600/aishwarya-rai-action-replayy-posters-01.jpg ",
                 date: "05",
                 year: "2010",
                 month: "November",
                 cast: " Akshay Kumar, Aishwarya Rai Bachchan, Vipul Amrutlal Shah",
                 OTT: "Amazon Prime Video, voot",
                 ratings: "4.2/10"
             },

             {
                 name: "Krrish",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "http://2.bp.blogspot.com/-EBCSR9dVio0/UlP1RApqm7I/AAAAAAAAACU/mxP0fzDHqQI/s1600/Krrish3+Poster.jpg ",
                 date: "23",
                 year: "2006",
                 month: "June",
                 cast: "Hrithik Roshan, Priyanka Chopra, Rakesh Roshan ",
                 OTT: "Sony liv ",
                 ratings: "6.4/10"
             },

             {
                 name: "Alag",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://bestoftheyear.in/wp-content/uploads/2017/08/ALag.jpg ",
                 date: "16",
                 year: "2006",
                 month: "June",
                 cast: " Akshay Kapoor and Dia Mirza  ",
                 OTT: "Amazon prime video, Voot, Youtube",
                 ratings: "3.7/10"
             },

             {
                 name: "Aa dekhen zara",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://nettv4u.com/uploads/aa-dekhen-zara.jpg ",
                 date: "27",
                 year: "2009",
                 month: "March",
                 cast: "Bipasha Basu, Neil Nitin Mukesh, Jehangir Surti ",
                 OTT: "Google play movies, Jio tv",
                 ratings: "5.2/10"
             },

             {
                 name: "Jaane hoga kya",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://img.reelgood.com/content/movie/f329b773-e26c-4b6c-9381-9b90b76b72ed/poster-780.jpg",
                 date: "01",
                 year: "2006",
                 month: "September",
                 cast: "Aftab Shivadsani, Bipasha Basu, Glen Barretto, Ankush",
                 OTT: "Zee5",
                 ratings: "3.1/10"
             },

             {
                 name: "Joker",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "http://1.bp.blogspot.com/-wVwRicmitTQ/UAbPFNNJAyI/AAAAAAAARAo/YJcBkvBdbnw/s1600/Joker+(2012)+Hindi+Movie+Poster+-+Joker+Akshay+Kumar+-+Sonakshi+First+Look.jpg ",
                 date: "31",
                 year: "2012",
                 month: "August",
                 cast: "Akshay Kumar, Sonakshi Sinha, Shirish Kunder",
                 OTT: "Youtube, Google Play movies",
                 ratings: "2.4/10"
             },

             {
                 name: " PK",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " http://3.bp.blogspot.com/YobzbfCfAPw/VSABwIujkkI/AAAAAAAAAGY/C5fvSUa22rw/s1600/362824%2Cxcitefun-pk-movie-poster-1.jpg ",
                 date: "19",
                 year: "2014",
                 month: "December",
                 cast: " Ameer Khan, Anushka Sharma, RajKumar Hirani",
                 OTT: "Netflix, sonyliv",
                 ratings: "8.1/10"
             },

             {
                 name: " Ra.One",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "   http://1.bp.blogspot.com/_AcBUSVxs82w/TSsBKY8Ib5I/AAAAAAAAkXs/hcU5vEjuAbI/s1600/Ra.One_Movie_Wallpapers.jpg ",
                 date: "06",
                 year: "2011",
                 month: "September",
                 cast: "Shahrukh Khan, Kareena Kapoor, Anubhav Sinha ",
                 OTT: "Zee5, amazon Prime Video",
                 ratings: "4.6/10"
             },

             {
                 name: " Maayavan",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://nettv4u.com/serialimages/14-12-2017/maayavan-movie-review.jpg ",
                 date: "01",
                 year: "2017",
                 month: "September",
                 cast: " Sundeep Kishan, Lavanya Tripati, C V Kumar",
                 OTT: "Amazon Prime video, Disney+ Hotstar",
                 ratings: "7.3/10"
             },

             {
                 name: " Shree",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://img.hindilinks4u.to/2013/04/Shree-2013.jpg ",
                 date: "26",
                 year: "2013",
                 month: "April",
                 cast: "Hussain Kuwajerwala, Anjali Patil, Shivani Tanksale",
                 OTT: "Apple tv, Jio cinema, Google Play Movies",
                 ratings: "6.3/10"
             },

             {
                 name: " 3G A Killer Connection",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "http://www.bhmpics.com/wallpapers/3g_a_killer_connection_movie-1366x768.jpg ",
                 date: "15",
                 year: "2013",
                 month: "March",
                 cast: " Nitin Mukesh, Sonal Chauhan, Shiirshak S. Anand, Shantanu Ray Chhibber",
                 OTT: "Jio Cinema, Apple tv, Google play movies",
                 ratings: "3.6/10"
             },

             {
                 name: "Iru Mugan",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://2.bp.blogspot.com/wEFyZwTkzTM/WTp_j1lruZI/AAAAAAAACNE/F1wPqSIVkq0GbjrunTOmU9jkQHcOquLAACLcB/s1600/jiPEr14.jpg",
                 date: "08",
                 year: "2016",
                 month: "September",
                 cast: "Vikram, Nayanthara, Anand Shankar ",
                 OTT: "google play movie&tv, amazon prime video, hotstar",
                 ratings: "6.2/10"
             },

             {
                 name: "Carbon the story of tomorrow",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://i.pinimg.com/originals/8d/36/cc/8d36cc2eec5e1cae377b8b49a65cdd7f.jpg",
                 date: "21",
                 year: "2017",
                 month: "August",
                 cast: "Nawazuddin Siddiqui, prachi Desai, Maitrey Bajpai",
                 OTT: "Youtube",
                 ratings: "6.3/10"
             },

             {
                 name: "Krrish3",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://1.bp.blogspot.com/-iONVuQnnLcc/UnYDar_7FmI/AAAAAAAAEig/mzYxGQqAvSc/s0/Krrish+3+(2013)+-+Hindi+Movie.jpg",
                 date: "01",
                 year: "2013",
                 month: "November",
                 cast: "Hrithik Roshan, Priyanka Chopra, Rakesh Roshan",
                 OTT: "Sony liv, youtube, google play movies&tv",
                 ratings: "5.3/10"
             },

             {
                 name: " Mission Mangal",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://buzz.tt/media/posters/2555/posters_4_1500.jpg",
                 date: "13",
                 year: "2019",
                 month: "August",
                 cast: " Akshay Kumar, Vidya Balan, Jagan Shakti",
                 OTT: "Disney+ Hotstar",
                 ratings: "6.5/10"
             },

             {
                 name: "Cargo",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://www.binged.com/wp-content/uploads/2020/08/Cargo-Hindi-Movie-Online-Watch.jpg",
                 date: "19",
                 year: "2019",
                 month: "October",
                 cast: "Vikrant Massey, Shweta Tripathi, Arati Kadav",
                 OTT: "Netflix",
                 ratings: "5.6/10"
             },

             {
                 name: "Bombhaat",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://www.newsbugz.com/wp-content/uploads/2020/06/Bombhaat-Telugu-movie-2020.jpg",
                 date: "03",
                 year: "2020",
                 month: "December",
                 cast: "Sai Sushanth Reddy, Chandini Chowdary, Raghavendra Varma Indukuri",
                 OTT: "Amazon Prime Video",
                 ratings: "6.1/10"
             },

             {
                 name: "Attack",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://bulletinscore.com/wp-content/uploads/2020/02/Attack-Hindi-Movie.jpg",
                 date: "01",
                 year: "2022",
                 month: "April",
                 cast: "John Abraham, Rakul Preet Singh, Lakshya Raj Anand",
                 OTT: "Zee5",
                 ratings: "7.4/10"
             },

             {
                 name: "Maanadu",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://images.indianexpress.com/2020/11/simbu-maanadu.jpg",
                 date: "25",
                 year: "2021",
                 month: "November",
                 cast: "Silambarasan Rajendar, Kalyani Priyadarshan, Venkat Prabhu",
                 OTT: "Sony liv",
                 ratings: "8.4/10"
             },

             {
                 name: " Creature 3D ",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://www.theindianwire.com/wp-content/uploads/2017/12/creature-3d.jpeg ",
                 date: "12",
                 year: "2014",
                 month: "September",
                 cast: " Bipasha Basu, Imran Abbas, Vikram Bhatt",
                 OTT: "Sonyliv, Jiotv",
                 ratings: "3.2/10"
             },

             {
                 name: " 2.0",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://b4blaze.com/wp-content/uploads/2018/09/2.0-robo.jpg ",
                 date: "29",
                 year: "2018",
                 month: "November",
                 cast: " Rajinikanth, Akshay Kumar, Amy Jackson,S shankar ",
                 OTT: "Amazon Prime Video",
                 ratings: "6.1/10"
             },

             {
                 name: "War for the planet of the Apes",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://image.tmdb.org/t/p/original/u7fhZU4AxYRpjvy05BxoR1d5kDi.jpg ",
                 date: "14",
                 year: "2017",
                 month: "July",
                 cast: " Andy Serkis, Woody Harrelson, Steve Zahn, Matt Reeves ",
                 OTT: "Movies & tv",
                 ratings: "7.4/10"
             },



             {
                 name: " JL50 ",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://8ten.club/wp-content/uploads/2020/09/JL50-2020-Hindi-Complete-Sonylive-Web-Series-720p-HDRip-700MB.jpg ",
                 date: "04",
                 year: "2020",
                 month: "September",
                 cast: " Abhay Deol, Pankaj Kapur, Ritika Anand, Piyush Mishra ",
                 OTT: "Sony Liv",
                 ratings: "7.5/10"
             },

             {
                 name: " Captain Vyom",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://mythicalindia.com/wp-content/uploads/2015/08/Captain_vyom_opt.jpg ",
                 date: "04",
                 year: "1998",
                 month: "January",
                 cast: " Kartika Rane, Milind Soman, Shehzaad Saeed, Dino Morea ",
                 OTT: " DD National",
                 ratings: "8.4/10"
             },

             {
                 name: " Skyfire",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://m.media-amazon.com/images/M/MV5BMjNhM2NlZTQtYWNkYi00NmE1LWJlNDctYzY4NjNiMjBjMWM1XkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_FMjpg_UX1000_.jpg ",
                 date: "22",
                 year: "2019",
                 month: "May",
                 cast: " Jatin Goswami, Prateik Babbar, Sonal Chauhan, Jishu Sengupta ",
                 OTT: "Zee5",
                 ratings: "4.2/10"
             },

             {
                 name: " Bhanwar",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " http://2.bp.blogspot.com/-fvX7rjGLgBE/VKj1TsVeUQI/AAAAAAAAA4M/_gU_RDN2SJw/s1600/Bhanwar-Stills-02.jpg  ",
                 date: "07",
                 year: "1976",
                 month: "May",
                 cast: " Priya Banerjee, Karanvir Bohra, Bhappi Sonie ",
                 OTT: " Youtube ",
                 ratings: "6.2/10"
             },

             {
                 name: " Ok Computer",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://streamingdue.com/wp-content/uploads/2021/03/OK-COMPUTER-696x392.jpg",
                 date: "26",
                 year: "2021",
                 month: "March",
                 cast: " Vijay Varma, Radhika Apte ,  Pooja Shetty and Neil Pageda",
                 OTT: "Disney+ Hotstar",
                 ratings: "5.4/10"
             },

             {
                 name: " Time Machine",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "https://i.pinimg.com/originals/13/27/15/132715cbc5a774338fa1c92b9c88eef0.jpg",
                 date: "08",
                 year: "2015",
                 month: "July",
                 cast: " Siddharth Menon, Loveleen Mishra, Arati Kadav",
                 OTT: "Epicon",
                 ratings: "8.5/10"
             },

             {
                 name: "Space City Sigma",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: "http://4.bp.blogspot.com/-yElHlXX5ycQ/ThaqL3tI5dI/AAAAAAAAAKg/lLM9j0nyqbo/s1600/Space_city_Sigma_1989_Doordarshan.JPG ",
                 date: "21",
                 year: "1989",
                 month: "May",
                 cast: "Kishore Dang, Sanjeev Mehra, Mita Vashisht",
                 OTT: "DD National",
                 ratings: "7.5/10"
             },

             {
                 name: "Indradhanush",
                 type: "series",
                 languages: "Hindi",
                 category: "Scientific",
                 img: " https://i.ytimg.com/vi/5gA54BCoXGs/hqdefault.jpg ",
                 date: "06",
                 year: "1989",
                 month: "July",
                 cast: " Girish Karnad, Deepa Lagoo, Akshay Anand, Sridevi Mukhi, Karan Johar,   ",
                 OTT: " DD National Channel",
                 ratings: "7.5/10"
             }, {
                 name: "Kuch Kuch Hota Hai",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: "https://i.pinimg.com/originals/0f/8c/a6/0f8ca6de69d1e866bb4426fe89b3fa18.jpg ",
                 date: "16",
                 year: " 1998",
                 month: "October ",
                 cast: "Shah Rukh Khan, Kajol",
                 director: "Karan Johar ",
                 OTT: "Netflix ",
                 ratings: "7.6/10 "
             },

             {
                 name: "Dilwale dulhania le jayenge ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://buzz.tt/media/posters/853/posters_0_1500.jpg ",
                 date: " 20 ",
                 year: " 1995  ",
                 month: "  October ",
                 cast: "Sharukh khan , kajol   ",
                 director: " adithya chopra",
                 OTT: "Amazon prime video ",
                 ratings: "8/10 "
             },

             {
                 name: " Hum Dil De Chuke Sanam",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i2.cinestaan.com/image-bank/1500-1500/62001-63000/62316.jpg ",
                 date: "18 ",
                 year: " 1999  ",
                 month: " June ",
                 cast: " Salman khan, Aishwarya rai",
                 director: " Sanjay Leela Bhansali ",
                 OTT: " Jio cinema , Voot ",
                 ratings: "7.4 /10"
             },

             {
                 name: " Dil To Pagal Hai",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://media2.bollywoodhungama.in/wp-content/uploads/2016/03/1-4.jpg ",
                 date: "31 ",
                 year: " 1997 ",
                 month: " October ",
                 cast: " Shah rukh khan,Madhuri dixit ",
                 director: "Yash chopra",
                 OTT: "Youtube ",
                 ratings: "7/10 "
             },


             {
                 name: "Rangeela ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i.pinimg.com/736x/b1/19/16/b1191607ea806a01a888d46f406fe379.jpg ",
                 date: "08 ",
                 year: "  1995 ",
                 month: "September ",
                 cast: "Amir khan,Urmila matondhar ",
                 director: " Ram gopal varma",
                 OTT: "Jio cinema, voot, Amazon prime video ",
                 ratings: "7.4/10 "
             },

             {
                 name: "Andaz Apna Apna ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://flxt.tmsimg.com/assets/p83790_p_v8_ac.jpg ",
                 date: " 04",
                 year: "  1994 ",
                 month: "September ",
                 cast: "Amir khan ,Salman khan ",
                 director: " Raj kumar santoshi ",
                 OTT: " Amazon prime video",
                 ratings: "8/10 "
             },



             {
                 name: " Raja Hindustani ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://image.tmdb.org/t/p/original/20iAq3KbalEdV7ODys9YnE7RnBV.jpg ",
                 date: "15 ",
                 year: "  1996 ",
                 month: " September",
                 cast: "Amir khan , Karishma kapoor ",
                 director: " Dharmesh darshan",
                 OTT: "Jio cinema, Amazon prime video",
                 ratings: "6.1/10 "
             },

             {
                 name: "Dil ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-17749/list/0017749list1361998916.jpg ",
                 date: " 22",
                 year: " 1990  ",
                 month: "June ",
                 cast: "Amir khan , Madhuri dixit ",
                 director: " Indra kumar",
                 OTT: "Zee5, Netflix ",
                 ratings: "6.6/10 "
             },

             {
                 name: "Karan Arju ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " http://2.bp.blogspot.com/_cudK8MwW64I/SDVAPFum29I/AAAAAAAABg8/Ok_du5DrXnA/w1200-h630-p-k-no-nu/journal_309536.jpg ",
                 date: "13 ",
                 year: "  1995 ",
                 month: " January",
                 cast: " Salman khan ,Shah rukh khan , Kajol",
                 director: "Rakesh roshan",
                 OTT: " Zee5",
                 ratings: "6.8/10 "
             },

             {
                 name: "Kabhi Haan Kabhi Naa ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://staticimg.spicyonion.com/images/profile/title/kabhi-haan-kabhi-naa-hindi-movie/z8wVU6pwqqfKJ97P0XftJgiLG8h.jpg ",
                 date: "25 ",
                 year: "  1994 ",
                 month: " February",
                 cast: "Shah rukh khan ,Suchitr krishnamoot ",
                 director: "Kundan shah",
                 OTT: "YouTube ",
                 ratings: " 7.6/10"
             },

             {
                 name: "Devdas ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i.pinimg.com/736x/8d/18/90/8d18905db5c5df99568d6b28ac5c961c.jpg ",
                 date: " 12",
                 year: "2002   ",
                 month: " July",
                 cast: "Shah rukh khan , Madhuri dixit ",
                 director: "Sanjay lela bamsali",
                 OTT: "Amazon prime videos,voot ",
                 ratings: "7.4/10 "
             },

             {
                 name: "Honeymoon Travels Pvt Ltd ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://stat2.bollywoodhungama.in/wp-content/uploads/2020/04/8-6.jpg ",
                 date: "23 ",
                 year: " 2007  ",
                 month: " February",
                 cast: "Abhay deol,amesha patel ",
                 director: " Aeema kagti",
                 OTT: "Youtube , amazon ",
                 ratings: "6.1/10 "
             },

             {
                 name: "Jaane tu ya jaane na ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i.pinimg.com/originals/06/ee/0c/06ee0ca9ed7e612f816234477e291c8b.jpg ",
                 date: "04 ",
                 year: "2008   ",
                 month: " July",
                 cast: "Imran khan , Genelia , D’souza ",
                 director: "Abbas tyrewala",
                 OTT: "Netflix ",
                 ratings: "7.4/10 "
             },

             {
                 name: "Jab we met ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://stat2.bollywoodhungama.in/wp-content/uploads/2020/04/75-10.jpg ",
                 date: "26 ",
                 year: " 2007  ",
                 month: " October",
                 cast: "Saheed Kapoor,Kareena kapoor ",
                 director: "imtiaz ali",
                 OTT: "NETFLIX , AMAZON PRIME ",
                 ratings: "7.9/10 "
             },

             {
                 name: "Kal ho naa ho ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://is1-ssl.mzstatic.com/image/thumb/Video3/v4/98/c7/f9/98c7f9f6-01ea-d498-ecf6-591484daba4e/source/1200x630bf.jpg ",
                 date: "28 ",
                 year: "  2003 ",
                 month: " November",
                 cast: " Shah rukh khan, Priet zinta ",
                 director: "Nikhil advani ",
                 OTT: "Netflix,Youtube ",
                 ratings: "7.9/10 "
             },

             {
                 name: "Love aaj kal ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://bestoftheyear.in/wp-content/uploads/2016/03/Love-Aaj-Kal-Poster.jpg ",
                 date: "31 ",
                 year: "  2009 ",
                 month: " July",
                 cast: "Karthik aryan,Sara ali khan",
                 director: " Imtiaz  ali",
                 OTT: "Jio tv , Amazon prime ",
                 ratings: "4.6/10 "
             },

             {
                 name: "Parineeta ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://www.scrolldroll.com/wp-content/uploads/2020/01/Parineeta-Best-Hindi-Romance-Movies.jpg",
                 date: " 10",
                 year: " 2005  ",
                 month: " June",
                 cast: " Saif ali khan , Vidhya balan, Pradeep Sarkar",
                 OTT: "Netflix , Amazon prime ",
                 ratings: "7.2/10 "
             },

             {
                 name: "Rehnaa hai terre dil mein ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " http://1.bp.blogspot.com/_iKcLoebZsVw/SE0QS2TSRtI/AAAAAAAAErg/5UjXHkFXgTU/s400/Rehna+Hai+Tere+Dil+Mein.jpg ",
                 date: " 19",
                 year: " 2001  ",
                 month: "October ",
                 cast: "R.Madhavan,Dia mirza",
                 director: " Gautham Vasudev menon",
                 OTT: "Hotstar ",
                 ratings: " 7.5/10"
             },

             {
                 name: " Socha na tha",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://s4.scoopwhoop.com/anj/vv/d7de0d6e-10cd-42c8-b481-bcb1c2db3819.jpg ",
                 date: " 04",
                 year: "2005   ",
                 month: "march ",
                 cast: "abhay deol , Ayesha takia ",
                 director: "Imtiaz ali",
                 OTT: "youtube ",
                 ratings: "7.4/10 "
             },

             {
                 name: "Veer zaara ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " http://1.bp.blogspot.com/-J4D_wn3axjg/Tg67pePbRtI/AAAAAAAABhw/HA-tI8FaL2A/s1600/shahrukhkhanveerzaarawallpaper.jpg ",
                 date: "12 ",
                 year: " 2004  ",
                 month: "November ",
                 cast: "Shah rukh khan , Priety zinta ",
                 director: " Yash chopra",
                 OTT: " Amazon prime ,Youtube",
                 ratings: "7.8/10 "
             },

             {
                 name: "Vivah ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://images.hungama.com/c/1/21b/5d0/2447011/2447011_1280x800.jpg ",
                 date: "10 ",
                 year: "2006   ",
                 month: "November ",
                 cast: "Sahid Kapoor , Amrita rao ",
                 director: " Sooraj barjatya",
                 OTT: "Netflix , Amazon prime ",
                 ratings: " 6.6/10"
             },

             {
                 name: "Band baaja baaraat ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i2.cinestaan.com/image-bank/1500-1500/28001-29000/28643.jpg ",
                 date: "10 ",
                 year: " 2010  ",
                 month: " December",
                 cast: " Ranveer singh , Anushka sharma",
                 director: " Maneesh sharma",
                 OTT: "Amazon prime , Youtube ",
                 ratings: "7.2/10 "
             },

             {
                 name: "Dhadak ",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://www.chitramala.in/wp-content/gallery/dhadak-movie-photos-and-posters/Dhadak-Movie-First-Look.jpg ",
                 date: "20 ",
                 year: "2018   ",
                 month: "July ",
                 cast: " Janhvi Kapoor , Ishaan khattar",
                 director: "Shashank khaitan ",
                 OTT: "Zee5 ",
                 ratings: "4.5/10 "
             },

             {
                 name: "Bajirao Mastani",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://besthdmovies.cfd/wp-content/uploads/2015/12/Bajirao-Mastani-2015-full-Movie-Download-free.jpg ",
                 date: "18",
                 year: "2015",
                 month: "December ",
                 cast: "Ranveer singh , Deepika padukone ",
                 director: "Sanjay leela bansali ",
                 OTT: "Amazon prime video, YouTube ",
                 ratings: "7.2/10 "
             },

             {
                 name: "Ashiqui-2",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://bestoftheyear.in/wp-content/uploads/2016/03/Ashiqui-2.jpg",
                 date: "26 ",
                 year: " 2013  ",
                 month: "April ",
                 cast: "Aditya roy kapur , Shraddha kapoor ",
                 director: "Mohit suri ",
                 OTT: "YouTube ",
                 ratings: "7/10 "
             },

             {
                 name: "Love Aaj Kal",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i.pinimg.com/originals/47/ef/f5/47eff5d8b6ea61f23c9da91b1dccce9f.jpg ",
                 date: "14 ",
                 year: "  2020 ",
                 month: "February ",
                 cast: " Kartik Aryan , sara ali khan",
                 director: "Imtiaz ali ",
                 OTT: "Netflix ",
                 ratings: "4.6/10 "
             },

             {
                 name: "Dil bechara",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://www.moviecanny.com/wp-content/uploads/2020/08/Dil-Bechara-2020-Bollywood-Movie-1024x768.jpg ",
                 date: " 24",
                 year: " 2020  ",
                 month: "July ",
                 cast: " Sushant singh Rajput , Sanjana sanghi",
                 director: "Mukesh chabra ",
                 OTT: "Hotstar ",
                 ratings: " 8.1/10"
             },

             {
                 name: "Kabir Singh",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://wallpapercave.com/wp/wp4401184.jpg ",
                 date: " 21",
                 year: "2019 ",
                 month: "June ",
                 cast: "Shahid Kapoor , Kiara advani ",
                 director: "Sandeep reddy vanga ",
                 OTT: " Netflix",
                 ratings: "7/10 "
             },

             {
                 name: "Dilwale",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://buzz.tt/media/posters/410/410_1500.jpg ",
                 date: "18 ",
                 year: " 2015  ",
                 month: "October ",
                 cast: "Shah rukh khan , Kajol ",
                 director: "Rohit shetty ",
                 OTT: "YouTube ",
                 ratings: "5/10 "
             },

             {
                 name: "Dear zindagi",
                 type: "Movies ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://www.rajatnarula.com/wp-content/uploads/2020/03/Dear-Zindagi-min-683x1024.jpg ",
                 date: "25 ",
                 year: "  2016 ",
                 month: "September ",
                 cast: "Shah rukh khan , Alia bhatt ",
                 director: "Gauri shindey ",
                 OTT: "YouTube ",
                 ratings: " 7.4/10"
             },

             {
                 name: "Mismatched",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: "https://1.bp.blogspot.com/-GYXiFi0mk3k/X7x_Xo2TQEI/AAAAAAAAGoM/wqgP945P4iod5ffhqhnholEMuVimqKV1wCNcBGAsYHQ/s2048/6547547654j.jpg ",
                 date: " 20",
                 year: " 2020",
                 month: "November ",
                 cast: "Rohit suresh saraf , Prajakta koli ",
                 director: "Akarsh khurana ",
                 OTT: "Netflix ",
                 ratings: "5.4/10 "
             },

             {
                 name: "College Romance",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: "https://i1.wp.com/www.webseriesreviews.com/wp-content/uploads/2020/04/Netflix-College-Romance-Season-2-Release-Date-Cast-Trailer.jpg?fit=1142%2C527&ssl=1 ",
                 date: " 7",
                 year: "  2018 ",
                 month: " August",
                 cast: "Gangan arora , Shreya mehta ",
                 director: "Simarpreet Singh ",
                 OTT: "Sony liv ",
                 ratings: "8.1/10 "
             }, {
                 name: "Bandish Bandits",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i.ytimg.com/vi/TGkfLPATh7g/maxresdefault.jpg ",
                 date: "14 ",
                 year: "  2020 ",
                 month: " August ",
                 cast: "Riwik bowmik , Shreya chaudary ",
                 director: "Amritpal Singh Bindra ",
                 OTT: "Amazon prime video ",
                 ratings: "8.6/10 "
             },

             {
                 name: "Taj Mahal 1989",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://www.binged.com/wp-content/uploads/2020/02/Hindi-Web-Series-Taj-Mahal-1989-Streaming-on-Netflix-Release-Date-14th-February-1.jpg ",
                 date: "14 ",
                 year: "  2020 ",
                 month: "February ",
                 cast: " Anud singh dhaka , Geetanjali kulakarni",
                 director: "Pushpendra Nath Misra ",
                 OTT: "Netflix ",
                 ratings: "7.4/10 "
             },

             {
                 name: "Dil Hi Toh Hai",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://i.ytimg.com/vi/kVccnmnFVEs/maxresdefault.jpg ",
                 date: "18 ",
                 year: " 2018  ",
                 month: "June ",
                 cast: " Karan kundraa , Yogita bihani",
                 director: " Muzammil Desai Rahib Siddiqui",
                 OTT: " Jio cinema",
                 ratings: "7.4/10 "
             },

             {
                 name: "Coldd Lassi Aur Chicken Masala",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-6-2022/list/062022inlist211616867.jpg ",
                 date: "3 ",
                 year: "  2019 ",
                 month: "September ",
                 cast: " Rajeev Khandelwal , Divyanka Tripathi",
                 director: "Pradeep Sarkar ",
                 OTT: "Zee5 ",
                 ratings: " 6.9/10"
             },

             {
                 name: "Romil and Jugal",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://webisoda.in/wp-content/uploads/2017/04/romil-and-jugal.jpg ",
                 date: "21 ",
                 year: " 2017  ",
                 month: " April",
                 cast: "Rajeev Siddhartha , Manraj Singh , Shrishti Ganguly Rindani , Manini Mishra ",
                 director: "Nupur Asthana ",
                 OTT: " Jio cinema",
                 ratings: "7.9/10 "
             },

             {
                 name: "Baarish",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://news.otakukart.com/wp-content/uploads/2020/02/Baarish-Season-2-release-date-1-scaled.jpg ",
                 date: "25 ",
                 year: "  2019 ",
                 month: " april ",
                 cast: "Asha Negi , Priya Banerjee , Sharman Joshi ,Vikram Singh Chauhan ",
                 director: "Nandita Mehra ",
                 OTT: " Jio cinema ",
                 ratings: "7.9 "
             },

             {
                 name: "Bebaakee",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://www.binged.com/wp-content/uploads/2020/07/Bebaakee-ZEE5-1024x597.jpg",
                 date: " 30",
                 year: "  2020 ",
                 month: " August",
                 cast: "Shivjyoti Rajput , Kushal Tandon ",
                 director: "Muzammil Desai ",
                 OTT: "Zee5 ",
                 ratings: "6.6/10 "
             },


             {
                 name: "Broken But Beautiful",
                 type: "series ",
                 languages: " Hindi",
                 category: " Romance",
                 img: " https://nettv4u.com/imagine/08-07-2020/broken-but-beautiful-season-1.jpg ",
                 date: "27 ",
                 year: "  2018 ",
                 month: "November ",
                 cast: " Harleen Sethi , Vikrant Massey",
                 director: "Sanjay Kumara ",
                 OTT: " Zee5",
                 ratings: "8.6 "
             }, {
                 name: " Antim",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: " https://images.desimartini.com/media/main/original/2020-12/f0fc0bdc-27c8-489d-8ec7-9608d792465f.jpg ",
                 date: "26",
                 year: "2021",
                 month: "November",
                 cast: " Salman Khan, Aayush Sharma, Mahima Makwana, Upendra Limaye, Mahesh           Manjrekar ",
                 OTT: " Zee5",
                 ratings: "7.2/10"
             },

             {
                 name: " Dhoom",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: " http://3.bp.blogspot.com/-Al23kE6lmt0/UZg5Z6cj5bI/AAAAAAAAEKw/VZUeRy4eUJA/s1600/dhoom1.jpg  ",
                 date: "27",
                 year: "2004",
                 month: "August",
                 cast: "Aamir Khan, Abhishek Bachchan, Katrina Kaif, Uday Chopra , Sanjay Gadhvi",
                 OTT: " Amazon Prime Video ",
                 ratings: "6.6/10"
             },

             {
                 name: "The Family Man",
                 type: "series",
                 languages: "Hindi",
                 category: "Action",
                 img: " https://s3.scoopwhoop.com/anj2/5d89c5739d041326f71bf170/e0ece3cb-f0d1-476c-b92a-505fc2e5e6b0.jpg ",
                 date: "19",
                 year: "2019",
                 month: "September",
                 cast: " Manoj Bajpayee, Priyamani, Raj, D.K ",
                 OTT: " Amazon Prime Video",
                 ratings: "8.7/10"
             },

             {
                 name: "  Dangal ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://cinemasangeet.com/upload/1482649900.jpg ",
                 date: "23",
                 year: "2016",
                 month: "December",
                 cast: "Nitesh Tiwari. Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra, Sakshi Tanwar.",
                 OTT: "Netflix",
                 ratings: "8.3/10"
             },

             {
                 name: " Squad ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://m.media-amazon.com/images/M/MV5BZjdhYTc4NjktZDI2Mi00ZmQxLWE4YTYtYTgyN2UyYTRhY2JiXkEyXkFqcGdeQXVyMTIzMzg0MTM2._V1_FMjpg_UX1200_.jpg ",
                 date: "12",
                 year: "2021",
                 month: "November",
                 cast: " Rinzing Denzongpa, Pooja Batra, Nilesh Sahay",
                 OTT: "Zee5",
                 ratings: "5/10"
             },


             {
                 name: " Cold Skin ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: " https://www.hindilinks4u.to/wp-content/uploads/2020/07/Cold-Skin-2017-In-Hindi.jpg",
                 date: "20",
                 year: "2017",
                 month: "October",
                 cast: "Ray Stevenson, Auragarrida, Xavier Gens ",
                 OTT: "Amazon Prime",
                 ratings: "6/10"
             },

             {
                 name: " Kabir Singh ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://3.bp.blogspot.com/-9m3SlYP1oOs/XNKC7kS7_XI/AAAAAAABBPY/U0ZeD4USX2sLRIakYjkmtvUrhou8ovZ3QCLcBGAs/s1600/kabir-singh-poster.jpg ",
                 date: "21",
                 year: "2019",
                 month: "June",
                 cast: " Shahid Kapoor, Kiara Advani ,  Sandeep Reddy Vanga",
                 OTT: "Netflix",
                 ratings: "7.1/10"
             },

             {
                 name: " Sunflower ",
                 type: "series",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://1.bp.blogspot.com/-Xk4eZFgSzg8/YMJDYg3Io2I/AAAAAAAAI8s/zURp34z5kl8HO0pRIeZUKb4KmGYVJ41dQCLcBGAsYHQ/s1080/Sunflower-Web-Series.jpg ",
                 date: "11",
                 year: "2021",
                 month: "June",
                 cast: " Ranvir Shorey,  Shonali Nagrani, Vikas Bahl,  Rahul Sengupta",
                 OTT: "Zee5",
                 ratings: "7.4/10"
             },

             {
                 name: " Haider",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: " https://i.pinimg.com/originals/db/31/e6/db31e6a202f381d0f784d02cb00c3cbc.jpg",
                 date: "02",
                 year: "2014",
                 month: "October",
                 cast: "Shahid Kapoor, Tabu, Vishal Bharadwaj ",
                 OTT: " Zee5, Netflix",
                 ratings: "8.1/10"
             },

             {
                 name: " 300",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://1.bp.blogspot.com/-No2E4HplE3c/XvgEDqENy1I/AAAAAAAAAXY/3A-ARMQdj90pyGHGaMWMjFZ-uEJ4uLOYwCLcBGAsYHQ/w1200-h630-p-k-no-nu/9e12fd51830992d4dd7cb02e56ed0fe4.jpg ",
                 date: "16",
                 year: "2007",
                 month: "March",
                 cast: "Gerard Butler, Lena Headey, Zack Snyder ",
                 OTT: "Amazon Prime Video",
                 ratings: "7.6/10"
             },

             {
                 name: "Mary Kom ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://3.bp.blogspot.com/-rRKc9wZcR4A/WCDQkOX0bRI/AAAAAAAAAl4/hQPHcjhaI_Q262fU-lnuO77kLZ3A7r4UQCLcB/s1600/Mary-Kom-hindi-movie-online-hd-tube4bolly.jpg ",
                 date: "05",
                 year: "2014",
                 month: "September",
                 cast: " Priyanka Chopra, Omung Kumar",
                 OTT: "Netflix",
                 ratings: "6.9/10"
             },

             {
                 name: "  Mirzapur",
                 type: "series",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog2632447/Mirzapur-2018.jpg ",
                 date: "15",
                 year: "2018",
                 month: "November",
                 cast: "Ali Fazal, Rasika Dugal, Puneet Krishna ",
                 OTT: "Amazon Prime video",
                 ratings: "8.4/10"
             },

             {
                 name: " Munna Michael ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://i.pinimg.com/originals/74/26/b8/7426b8952af5de563a872a4020d580f5.jpg ",
                 date: "21",
                 year: "2017",
                 month: "June",
                 cast: "Tiger Shroff, Nidhhi Agerwal , Sabir Khan",
                 OTT: "Zee5",
                 ratings: "3.3/10"
             },

             {
                 name: " The Power",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://image.tmdb.org/t/p/w300/fNQ3w9FQEd6OQGHbwyPGyqTaGNf.jpg",
                 date: "14",
                 year: "2021",
                 month: "January",
                 cast: " Vidyut Jammwal,  Shruti Haasan,  Mahesh Manjrekar ",
                 OTT: "Zee5",
                 ratings: "5.4/10"
             },

             {
                 name: " HulChul ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: " https://alchetron.com/cdn/Hulchul-1995-film-images-0ef858de-f75d-4fca-a3fd-f06478115be.jpg",
                 date: "26",
                 year: "2004",
                 month: "November",
                 cast: " Akshaye Khanna, Kareena Kapoor,  Priyadarshan",
                 OTT: "Amazon Prime Video",
                 ratings: "7.0/10"
             },

             {
                 name: " Udta Punjab",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "http://www.dvdplanetstore.pk/wp-content/uploads/2016/06/udta-punjab-2016dvdplanetstorepk.jpg ",
                 date: "17",
                 year: "2016",
                 month: "June",
                 cast: " Shahid Kapoor,  Kareena Kapoor,  Abhishek Chaubey",
                 OTT: "Netflix",
                 ratings: "7.8/10"
             },

             {
                 name: " Abhay",
                 type: "series",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://worldfilm4u.com/wp-content/uploads/2020/09/Abhay-S02-2020-EP4-5-Hindi-Zee5-Web-Series-720p-HDRip-550MB.jpg ",
                 date: "07",
                 year: "2019",
                 month: "February",
                 cast: "Kunal Khemu, Elnaaz Norouzi, Ken Ghosh  ",
                 OTT: "Zee5",
                 ratings: "8.1/10"
             },

             {
                 name: " URI",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "https://1.bp.blogspot.com/--nuFh7Q85xI/X0dcy5x1ZjI/AAAAAAAAKZo/QBH-mHRcNegef1t9MVCEI7y79TZDsi2PwCLcBGAsYHQ/s1600/uri%2Bfull%2Bmovie%2Bdownload.jpg ",
                 date: "11",
                 year: "2019",
                 month: "January",
                 cast: "Vicky Kaushal, Yami Gautam, Aditya Dhar ",
                 OTT: "Zee5",
                 ratings: "8.3/10"
             },

             {
                 name: "Shrek",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Action",
                 img: "http://3.bp.blogspot.com/_cudK8MwW64I/SMIRc_OHNTI/AAAAAAAAF90/qA1DKaYQulA/w1200-h630-p-k-no-nu/Shrek+3+Front.jpg ",
                 date: "08",
                 year: "2017",
                 month: "August",
                 cast: " Andrew Adamson, Vicky Jenson ",
                 OTT: "Amazon Prime Video",
                 ratings: "7.9/10"
             },

             {
                 name: "Sacred Games",
                 type: "series",
                 languages: "Hindi",
                 category: "Action",
                 img: " https://mediaindia.eu/wp-content/uploads/2018/10/SacredGamesstills7.jpg ",
                 date: "06",
                 year: "2018",
                 month: "July",
                 cast: "Saif Ali Khan, Radhika Apte, Varun Grover ",
                 OTT: "Netflix",
                 ratings: "8.6/10"
             }, {
                 name: "Baazigar ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://i.pinimg.com/originals/11/45/ef/1145ef976d0f3bea4b4abf9a9e13308c.jpg",
                 date: "12",
                 year: "1993",
                 month: "November",
                 cast: "Shah Rukh Khan, Kajol, Abbas Burmawalla",
                 OTT: "Amazon Prime Video",
                 ratings: "7.6/10"
             },

             {
                 name: "Kaun ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://i.ytimg.com/vi/yxTobQgtCmE/maxresdefault.jpg",
                 date: "26",
                 year: "1999",
                 month: "February",
                 cast: "Urmila Matondkar, Manoj Bajpayee, Ram Gopal Varma",
                 OTT: "Youtube",
                 ratings: "7.8/10"
             },

             {
                 name: "Gupt:the hidden truth ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://image.tmdb.org/t/p/original/tMEDfqBRQTbRHMcnH7pMkQaSbPI.jpg",
                 date: "04",
                 year: "1997",
                 month: "July",
                 cast: "Bobby Deol, Manisha Koirala, Rajiv Rai",
                 OTT: "Zee5",
                 ratings: "7.3/10"
             },

             {
                 name: "Ajnabee  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://image.tmdb.org/t/p/original/AnueNeojd8m5VmqjHLeBGxv7hnj.jpg",
                 date: "21",
                 year: "2001",
                 month: "September",
                 cast: "Akshay Kumar, Bipasha Basu, Mustan Burmawalla",
                 OTT: "Disney+ Hotstar",
                 ratings: "6.3/10"
             },

             {
                 name: "Darr ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://i2.cinestaan.com/image-bank/1500-1500/28001-29000/28720.jpg",
                 date: "24",
                 year: "1993",
                 month: "December",
                 cast: "Sunny Deol, Juhi Chawla, Yash Chopra",
                 OTT: "Amazon Prime Video",
                 ratings: "7.6/10"
             },

             {
                 name: "Mohra  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://lh4.googleusercontent.com/-9Nn09WdXWlM/TWhgUWx658I/AAAAAAAAAOg/YbwevEKj4yw/s1600/m1.jpg",
                 date: "01",
                 year: "1994",
                 month: "July",
                 cast: "Akshay Kumar, Raveena Tadon, Rajiv Rai",
                 OTT: "Zee5",
                 ratings: "6.9/10"
             }, {
                 name: "Gumnaam  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://i.pinimg.com/originals/42/1f/64/421f6408ac79b8e87a3b6338e50b3149.jpg",
                 date: "24",
                 year: "1965",
                 month: "December",
                 cast: "Manoj Kumar, Nanda, Raja Nawathe",
                 OTT: "Amazon Prime Video,Youtube",
                 ratings: "6.9/10"
             },

             {
                 name: "Khiladi  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://alchetron.com/cdn/khiladi-1992-film-23357a7c-d274-499f-ac41-47f5d391f7e-resize-750.jpg",
                 date: "05",
                 year: "1992",
                 month: "June",
                 cast: "Akshay Kumar, Ayesha Jhulka, Abbas Mustan",
                 OTT: "Amazon Prime Video,Youtube",
                 ratings: "7.1/10"
             },

             {
                 name: "Sangharsh  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Sangharsh.jpg",
                 date: "03",
                 year: "1999",
                 month: "September",
                 cast: "Akshay Kumar, Preity Zinta, Tanuja Chandra",
                 OTT: "Zee5",
                 ratings: "6.7/10"
             },

             {
                 name: "Ek Hasina thi  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/Ek-Hasina-Thi.jpg",
                 date: "16",
                 year: "2004",
                 month: "January",
                 cast: "Saif Ali Khan, Urmila Matondkar, Sriram Raghavan",
                 OTT: "Amazon Prime Video",
                 ratings: "7.5/10"
             },

             {
                 name: " Manorama six feet under  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://www.einthusanhindimovie.com/wpcontent/uploads/2019/02/3hZaxpFdlxHfJ9S8Iawizogpmof.jpg",
                 date: "21",
                 year: "2007",
                 month: "September",
                 cast: "Abhay Deol, Raima Sen and Gul Panag, Navdeep Singh ",
                 OTT: "Netflix, Youtube",
                 ratings: "7.6/10"
             },

             {
                 name: " Kasoor ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/kasoor-movie.jpg",
                 date: "02",
                 year: "2001",
                 month: "February",
                 cast: " Aftab Shivdasani, Lisa Ray, Vikram Bhatt ",
                 OTT: "Youtube",
                 ratings: "6/10"
             },

             {
                 name: "Samay when time strikes ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://www.pensivly.com/wp-content/uploads/2020/10/Samay-When-Time-Strikes- Full-Movie-Sushmita-Sen-1024x576.jpg",
                 date: "10",
                 year: "2003",
                 month: "September",
                 cast: " Morgan Freeman Brad Pitt, Robby Grewal ",
                 OTT: "Youtube",
                 ratings: "7/10"
             },

             {
                 name: " Dhamaka  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://images.desimartini.com/media/main/original/2020-11/64564ff7-f771-41aa-8150-2fb6f0d3d6de.jpg",
                 date: "19",
                 year: "2021",
                 month: "December",
                 cast: " Ram Madhvani, Kartik Aaryan, Mohammed Mansoor, Mrunal Thakur, Amruta Subhash ",
                 OTT: "Netflix",
                 ratings: "7.7/10"
             },

             {
                 name: "Be-Lagaam  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://media-images.mio.to/various_artists/B/Belagaam%20(1988)/Art-350.jpg",
                 date: "19",
                 year: "2001",
                 month: "October",
                 cast: " Pramod Moutho, Tanveer Zaidi, Rajeev Verma, Rakesh Bedi, Ram Lakhan ",
                 OTT: "Youtube",
                 ratings: "3/10"
             }, {
                 name: " Johnny gaddaar ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://i.pinimg.com/736x/8d/da/9d/8dda9d2facfeccb935218b5909d2f1ef.jpg",
                 date: "28",
                 year: "2007",
                 month: "September",
                 cast: " Dharmendra, Rimi Sen, Sriram Raghavan ",
                 OTT: "Disney+ Hotstar, Youtube",
                 ratings: "7.8/10"
             },

             {
                 name: " Karthik calling Karthik ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "http://2.bp.blogspot.com/-erJbbB37hz0/UPQ8MWA3MMI/AAAAAAAACWw/TcpKJlrUIb0/s1600/karthik-calling-karthik-poster.jpg",
                 date: "26",
                 year: "2010",
                 month: "February",
                 cast: " Farhan Akhtar, Deepika Padukone, Vijay Lalwani ",
                 OTT: "Netflix",
                 ratings: "7.1/10"
             },

             {
                 name: " Race ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://i.pinimg.com/originals/35/6c/72/356c723dacb7b8562a38dd1609769df8.jpg",
                 date: "21",
                 year: "2008",
                 month: "March",
                 cast: "  Saif Ali Khan, Akshaye Khanna, Bipasha Basu, Katrina Kaif, Abbas Mustan ",
                 OTT: "Netflix, Youtube",
                 ratings: "6.6/10"
             },

             {
                 name: " Aks ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://loverays.com/movies/Aks_Bollywood_Movie_2001.jpg",
                 date: "13",
                 year: "2001",
                 month: "July",
                 cast: " Rakeysh Omprakash Mehra, Amitabh Bachchan, Raveena Tandon ",
                 OTT: "Youtube",
                 ratings: "5.8/10"
             }, {
                 name: " Wazir ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://2.bp.blogspot.com/-haNr1imfYDs/VpAaRdkS3lI/AAAAAAAANFk/YW3M_dmZNuU/s1600/Wazir_Movie%2BPoster.jpg",
                 date: "08",
                 year: "2016",
                 month: "January",
                 cast: "Farhan Akhtar, Amitabh bachchan, Bejoy Nambiar ",
                 OTT: "Netflix",
                 ratings: "7.1/10"
             }, {
                 name: "Aamir ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "http://img.nowrunning.com/content/movie/0-2007/Aamir/bg10.jpg?fbrefresh=120122647321",
                 date: "06",
                 year: "2008",
                 month: "June",
                 cast: "Rajeev Khandelwal, Gajraj Rao, Raj Kumar Gupta",
                 OTT: "Apple tv, Netflix",
                 ratings: "7.6/10"
             }, {
                 name: "No smoking ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://images-na.ssl-images-amazon.com/images/I/511VCi7uX3L._AC_SY400_.jpg",
                 date: "26",
                 year: "2007",
                 month: "October",
                 cast: "John Abraham, Ayesha Takia, Anurag Kashyap",
                 OTT: "Zee5,jio cinema",
                 ratings: "7.2/10"
             }, {
                 name: " Pyaar Zindagi Hai  ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://www.indya101.com/movies/posters/2005/12/21/1_vzazx_Indya101(dot)com.jpg",
                 date: "07",
                 year: "2001",
                 month: "September",
                 cast: "Vikas Kalantri, Ashima Bhalla, Vijay Sadanah",
                 OTT: "Amazon Prime Video, Youtube",
                 ratings: "6.5/10"
             }, {
                 name: "Kahani ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "http://www.dvdplanetstore.pk/wp-content/uploads/2014/01/Kahaani.jpg",
                 date: "09",
                 year: "2012",
                 month: "March",
                 cast: "Parambrata Chatterjee, Vidya Balan, Sujoy Ghosh",
                 OTT: "Youtube",
                 ratings: "8.1/10"
             }, {
                 name: "Special 26 ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://1.bp.blogspot.com/-e1T0FAid--0/URaSOK_IksI/AAAAAAAAD3U/5SiF5TZXNes/s1600/special+26.jpg",
                 date: "08",
                 year: "2013",
                 month: "February",
                 cast: "Akshay Kumar, Kajal Agarwal, Neeraj Pandey",
                 OTT: "Voot, Netflix, Youtube ",
                 ratings: "8/10"
             }, {
                 name: "Talvar ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/26/Pictures/_cfead844-4945-11e8-b38d-ae9d3b5e5930.jpg",
                 date: "02",
                 year: "2015",
                 month: "October",
                 cast: "Irrfan Khan, Tabu, Meghna Gulzar",
                 OTT: "Disney+ Hotstar, Netflix, Youtube",
                 ratings: "8.1/10"
             },

             {
                 name: " Rustom ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://i.ytimg.com/vi/XojzK9A4aOk/maxresdefault.jpg",
                 date: "12",
                 year: "2016",
                 month: "August",
                 cast: "Akshay Kumar, Ileana D’Cruz, Tinu Suresh Desai",
                 OTT: "Zee5",
                 ratings: "7/10"
             },

             {
                 name: "Badla ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://cdn.zeebiz.com/sites/default/files/2019/03/13/78078-badla-youtube.jpg",
                 date: "08",
                 year: "2019",
                 month: "March",
                 cast: "Amitabh Bachchan, Taapsee Pannu, Sujoy Ghosh",
                 OTT: "Netflix, Youtube",
                 ratings: "7.8/10"
             },

             {
                 name: " Ugly ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://resize.indiatvnews.com/en/centered/oldbucket/715_431/entertainmentbollywood/IndiaTv605a7a_UglyMovieReview.jpg",
                 date: "26",
                 year: "2013",
                 month: "December",
                 cast: "Ronit Roy, Rahul Bhat, Anurag Kashyap",
                 OTT: "Zee5",
                 ratings: "8/10"
             },

             {
                 name: "Hacked ",
                 type: "Movies",
                 languages: "Hindi",
                 category: "Thriller",
                 img: "https://4.bp.blogspot.com/-zeujzNz9D18/Xoa8ocgiVII/AAAAAAAAIJ4/fs0ZQG_QaRk4sAYfHW-9H86qBwiteaTIwCK4BGAYYCw/s1600/EQAjjbqU8AASajI.jpg",
                 date: "07",
                 year: "2020",
                 month: "February",
                 cast: "Hina Khan, Rohan Shah, Vikram Bhatt",
                 OTT: "Zee5",
                 ratings: "4.3/10"
             },

             {
                 name: "The Last Hour",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://www.bolly2tolly.net/wp-content/uploads/2021/05/the-last-hour-tv-series-online-bolly2tolly.jpg ",
                 date: "14",
                 year: " 2021",
                 month: "May ",
                 cast: "Karma Takapa ,Shahana Goswami",
                 director: "Amit Kumar",
                 OTT: "Amazon prime video",
                 ratings: " 7.2/10"
             },

             {
                 name: "The gone game",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://copycinema.com/wp-content/uploads/2020/08/Poster.jpg ",
                 date: "20",
                 year: " 2020",
                 month: " August",
                 cast: "ShriyaPilgaonkar ,Arjun Mathur",
                 director: "Nikhil Bhat",
                 OTT: "Voot",
                 ratings: "7.8/10 "
             },

             {
                 name: " Aarya",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://i.pinimg.com/originals/25/ce/66/25ce6659952c1374f9b052daf3d39171.jpg ",
                 date: "19",
                 year: " 2020",
                 month: "June ",
                 cast: "Sushmita Sen ,VirtiVaghani",
                 director: "Ram Madhvani",
                 OTT: "Disney+ Hotstar",
                 ratings: "7.8/10 "
             },

             {
                 name: "Aranyak ",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://whatonOTT.com/wp-content/uploads/2021/03/Aranyak-1.jpg ",
                 date: "12",
                 year: "2021 ",
                 month: " December",
                 cast: "Raveena Tandon ,Meghna Malik",
                 director: "Vinay Waikul",
                 OTT: "Netflix",
                 ratings: " 7.8/10"
             }, {
                 name: " Grahan",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://www.bollywooddhamaka.in/wp-content/uploads/2021/06/11.6.2.jpg ",
                 date: "24",
                 year: " 2021",
                 month: "June ",
                 cast: "Zoya Hussain ,Wamiqa Gabbi , Anshumaan Pushkar",
                 director: "Ranjan Chandel",
                 OTT: "Disney+ Hotstar",
                 ratings: "8.4/10 "
             }, {
                 name: "Tabbar",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://m.media-amazon.com/images/M/MV5BMTA2ZmM0MmEtNTQ4NC00NzBjLWIxZjktOGE3MTJhNzUyM2I5XkEyXkFqcGdeQXVyNTYyMTE2MTA@._V1_UY268_CR16,0,182,268_AL_.jpg ",
                 date: "15",
                 year: " 2021",
                 month: " October",
                 cast: "Pavan Malhotra ,Gagan Arora ,Supriya Pathak",
                 director: "Ajitpal Singh",
                 OTT: "Sony liv",
                 ratings: " 8.3/10"
             },

             {
                 name: "Special Ops ",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://s3-ap-south-1.amazonaws.com/fuzeimages/wp-content/uploads/2020/03/21163517/Special-Ops-On-Disney+Hotstar.jpg ",
                 date: "17",
                 year: " 2020",
                 month: " March",
                 cast: "Kay KayMenon ,Sana Khan",
                 director: "Neeraj Pandey",
                 OTT: "Disney+ Hotstar",
                 ratings: " 8.6/10"
             },

             {
                 name: "THE FAMILY MAN ",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://4.bp.blogspot.com/-Ufy1xFHEpGQ/XYXprpyqE2I/AAAAAAAAczU/GIMRNl0mL5M_gJZoQMKgnn2JT5aAPoBWQCK4BGAYYCw/s1600/the-family-man.jpg ",
                 date: "20",
                 year: " 2019",
                 month: " September",
                 cast: "Manoj Bajpayee ,Priyamani",
                 director: "Brett Ratner",
                 OTT: "Amazon prime video",
                 ratings: "8.7/10 "
             },

             {
                 name: " Matsyakaand",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://www.serialupdates.me/wp-content/uploads/2021/11/Matsya-Kaand-Cast-MX-Player-Web-Series-Real-name-Ratings.jpg ",
                 date: "18",
                 year: " 2021",
                 month: " November",
                 cast: "Ravi Dubey ,Madhur Mittal",
                 director: "Ajay Bhuyan",
                 OTT: "Mx player",
                 ratings: " 9/10"
             },

             {
                 name: " Asur welcome to your dark side",
                 type: "series ",
                 languages: " Hindi",
                 category: " Thriller",
                 img: " https://www.awesomeindia.in/wp-content/uploads/2020/08/Asur-Welcome-to-your-dark-side.jpg ",
                 date: "02",
                 year: " 2020",
                 month: "March ",
                 cast: "Arshad Warsi ,Ridhi Dogra",
                 director: "Oni Sen",
                 OTT: "Voot",
                 ratings: "8.4/10 "
             },

];


const updatedDataBase = database.map((item) => {
    return {
      
      name: item.name,
      type: item.type,
      languages: item.languages,
      category: item.category,
      image: item.img,
      date: item.date,
      year: item.year,
      month: item.month,
      cast: item.cast,
      OTT: item.OTT,
      ratings: item.ratings
  }
})

         
class App extends Component{
  state = { inputValue: "", updatedDataBase:updatedDataBase}
  
  changedInput = (event) => {
    this.setState({inputValue:event.target.value})
  }

  searchMovie = () => {
    const { inputValue,updatedDataBase } = this.state;
    const lower = inputValue.toLowerCase();
    const result = updatedDataBase.filter((each) => each.name.toLowerCase().includes(lower));
    return result;
  }

  render() {
    const { inputValue } = this.state;
    const data = this.searchMovie()
    return (
      <>
        <input type="text" value={inputValue} onChange={this.changedInput} />
        <ul>
          {data.map((item) => {
            return (
              <MoviesList key={item.image} item={item}/>
            )
          })}
        </ul>
      </>
    )
  }
}

export default App;