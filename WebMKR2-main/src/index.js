const express = require("express");

const app = express();

/*
Фото (Id, Автор, Назва, Опис, URL-
файлу, Список гештегів, Дата опублікування, Кількість «лайків»)
*/
let Photos = [{
            id: 1,
            author: "Yuri",
            title: "Uzhhorod",
            description: "My city",
            url: "https://prokarpaty-tour.info/wp-content/uploads/uzhgorod-castle-from-above-ukraine-2.jpg",
            hashtags: "#city, #uzhhorod",
            published: new Date(2020, 3, 6),
            likes: 4242,
        },
        {
            id: 2,
            author: "Yur",
            title: "Uzhhorod",
            description: "My city",
            url: "https://prokarpaty-tour.info/wp-content/uploads/uzhgorod-castle-from-above-ukraine-2.jpg",
            hashtags: "#city, #uzhhorod",
            published: new Date(2020, 3, 6),
            likes: 42,
        },
        {
            id: 3,
            author: "Yurii",
            title: "Uzhhorod",
            description: "My city",
            url: "https://prokarpaty-tour.info/wp-content/uploads/uzhgorod-castle-from-above-ukraine-2.jpg",
            hashtags: "#city, #uzhhorod",
            published: new Date(2020, 3, 6),
            likes: 42400,
        },
        {
            id: 4,
            author: "Andrii",
            title: "Cat",
            description: "Cat",
            url: "https://prokarpaty-tour.info/wp-content/uploads/uzhgorod-castle-from-above-ukraine-2.jpg",
            hashtags: "#cat, #animal",
            published: new Date(2021, 12, 16),
            likes: 1000
        }
    ]
   // вивести топ 3 фото по к-ті лайків
    app.get("/photo/top", (req, res) => {

   
      
    if (Photos.length == 0)
        res.status(404).send("Not Found");
    else {
        let arr = [];
       for (let i = 0; i< Photos.length; i++){
           arr.push(Photos[i].likes);
       }
        
       function compare(a, b) {
        if (a > b) return 1; 
        if (a == b) return 0; 
        if (a < b) return -1; 
      }

      arr.sort(compare);
      arr.reverse();
   
    

     
     
      console.log(arr);

      let arr1 = [];


      for(let i = 0;i<Photos.length;i++){
          if(Photos[i].likes == arr[0] || Photos[i].likes == arr[1] || Photos[i].likes == arr[2]){
              arr1.push(Photos[i])
          }
      }

      res.send(arr1);
      
      
       
       

       
    }
});



app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/", (req, res) => {
    res.render("photo");
});

if (process.env.NODE_ENV == "test") module.exports = app;
else
    app.listen(3000, () => {
        console.log("http://localhost:3000");
    })
