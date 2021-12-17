const supertest = require("supertest");
const app = require("../src");

const maxLikedPhotos = [
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
        id: 4,
        author: "Andrii",
        title: "Cat",
        description: "Cat",
        url: "https://prokarpaty-tour.info/wp-content/uploads/uzhgorod-castle-from-above-ukraine-2.jpg",
        hashtags: "#cat, #animal",
        published: new Date(2021, 12, 16),
        likes: 1000
    }


];

describe("Integration test Photo API", () => {

    it("should get top 3 max liked photos", async() => {
        const response = await supertest(app).get("/photo/top");
        const data = JSON.parse(response.text);
        data.published = new Date(data.published);

        expect(response.status).toBe(200);
        expect(data).toMatchObject(maxLikedPhotos);
    });

});