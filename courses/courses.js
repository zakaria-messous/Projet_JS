//tableau des objets courts
let MyTableau = [
    {
        img: "./imgs/html.jpg",
        titre: "What is Html ?",
        categorie: "html",
        prix: 12.5,
    },
    {
        img: "./imgs/css.jpg",
        titre: "What is css ?",
        categorie: "css",
        prix: 14,
    },
    {
        img: "./imgs/js.jpg",
        titre: "What is JavaScript ?",
        categorie: "js",
        prix: 21,
    },
    {
        img: "./imgs/php.jpg",
        titre: "Best Courses php for begin",
        categorie: "php",
        prix: 20,
    },
    {
        img: "./imgs/html2.jpg",
        titre: "Best Courses html for begin",
        categorie: "html",
        prix: 11,
    },
    {
        img: "./imgs/js2.jpg",
        titre: "Best Courses js for begin",
        categorie: "js",
        prix: 19,
    },{
        img: './imgs/javascriptDef.png',
        titre: 'what is javascript?',
        categorie: 'js',
        prix: 9.9
    },
    {
        img: './imgs/htmlBasics.PNG',
        titre: 'basics of HTML',
        categorie: 'html',
        prix: 5.9
    },
    {
        img: './imgs/cssSelectors.jpg',
        titre: 'CSS selectors',
        categorie: 'css',
        prix: 69.9
    },
    {
        img: './imgs/javascriptVariables.png',
        titre: 'variables and data type of javascript',
        categorie: 'js',
        prix: 19.9
    },
    {
        img: './imgs/javascriptOperators.png',
        titre: 'Javascript operators and conditions',
        categorie: 'js',
        prix: 29.9
    },
    {
        img: './imgs/cssProperties.png',
        titre: 'CSS properties',
        categorie: 'css',
        prix: 29.9
    },
    {
        img: './imgs/javascriptObjects.png',
        titre: 'Javascript objects and arrays',
        categorie: 'js',
        prix: 39.9
    },
    {
        img: './imgs/cssAnimation.png',
        titre: 'CSS animations',
        categorie: 'css',
        prix: 19.9
    },
    {
        img: './imgs/javascriptEvents.png',
        titre: 'javascript events',
        categorie: 'js',
        prix: 59.9
    },
    {
        img: './imgs/cssColors.png',
        titre: 'css colors',
        categorie: 'css',
        prix: 29.9
    },
    {
        img: './imgs/phpBasics.png',
        titre: 'getting started with php',
        categorie: 'php',
        prix: 15.9
    },
    {
        img: './imgs/phpDataBase.png',
        titre: 'connecting to database using PHP',
        categorie: 'php',
        prix: 29.9
    },
    {
        img: './imgs/javascriptDOM.png',
        titre: 'DOM the power of javascript',
        categorie: 'js',
        prix: 23.9
    },
    {
        img: './imgs/htmlTags.png',
        titre: 'HTML elements and tags',
        categorie: 'html',
        prix: 23
    },
    {
        img: './imgs/javascriptOverview.png',
        titre: 'the power of javascript',
        categorie: 'js',
        prix: 24.6
    }
];
const table = document.getElementById("courses-table");

function ShowCourses(categorie) {
    //Empty the table content
    table.innerText = "";
    //Count 3 courses per line
    let counter = 0;
    var TableRow = document.createElement("tr");

    MyTableau.forEach((element) => {
        if (categorie === element.categorie || categorie === "All") {
            const column = document.createElement("td");
            column.innerHTML =
            '<button class="btn bg-transparent ><article class="card"><img class="CoursImage" src="' +
                element.img +
                '"><div class="card-footr"><p>' +
                element.titre +
                "</p><span>" +
                element.prix +"$"+
                "</span></div></article></button>";

             TableRow.appendChild(column);
            counter++;

            if (counter === 3) {
                counter = 0;
                table.appendChild(TableRow);
                TableRow= document.createElement("tr");
            }
        }
    });
    table.appendChild(TableRow);
}

//Show all courses by default
ShowCourses("All");
//get input value
const stitre = document.getElementById('input-search');
//search by title
stitre.addEventListener('keyup', function(){
    const input = stitre.value ;

    const resultat = MyTableau.filter((element)=> element.titre.toLocaleLowerCase().includes(input.toLocaleLowerCase())) ;

    table.innerText = "";
    let counter = 0;
    var TableRoow = document.createElement("tr");
    resultat.forEach((element) => {
            const colummn = document.createElement("td");
            colummn.innerHTML =
                '<button class="btn bg-transparent ><article class="card"><img class="CoursImage" src="' +
                element.img +
                '"><div class="card-footr"><p>' +
                element.titre +
                "</p><span>" +
                element.prix +"$"+
                "</span></div></article></button>";

             TableRoow.appendChild(colummn);
            counter++;

            if (counter === 3) {
                counter = 0;
                table.appendChild(TableRoow);
                TableRoow= document.createElement("tr");
            }
        }
    );
    table.appendChild(TableRoow);


    });
var slidV = document.getElementById('slideprice');
slidV.addEventListener('change', function(){
    const Sput = slidV.value ;
  document.getElementById('valueslide').innerText = "Value: "+Sput+"$";

      //Empty the table content
      table.innerText = "";
      //Count 3 courses per line
      let counter = 0;
      var TableRow = document.createElement("tr");
  
      MyTableau.forEach((element) => {
          if (element.prix<=Sput) {
              const column = document.createElement("td");
              column.innerHTML =
                  '<button class="btn bg-transparent ><article class="card"><img class="CoursImage" src="' +
                  element.img +
                  '"><div class="card-footr"><p>' +
                  element.titre +
                  "</p><span>" +
                  element.prix +"$"+
                  "</span></div></article></button>";
  
               TableRow.appendChild(column);
              counter++;
  
              if (counter === 3) {
                  counter = 0;
                  table.appendChild(TableRow);
                  TableRow= document.createElement("tr");
              }
          }
      });
      table.appendChild(TableRow);

})






