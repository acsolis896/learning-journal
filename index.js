const blogPosts = [
    {index: 1,
        img: "./images/blog-image-01.png",
        date: "July 23, 2022",
        title: "Blog One",
        description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        },
    {index: 2,
        img: "./images/blog-image-02.png",
        date: "July 23, 2022",
        title: "Blog Two",
        description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        },
    {index: 3,
        img: "./images/blog-image-03.png",
        date: "July 23, 2022",
        title: "Blog Three",
        description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        },
    {index: 4,
        img: "./images/blog-image-04.png",
        date: "July 23, 2022",
        title: "Blog Four",
        description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        },
    {index: 5,
        img: "./images/blog-image-05.png",
        date: "July 23, 2022",
        title: "Blog Five",
        description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        },
    {index: 6,
        img: "./images/blog-image-06.png",
        date: "July 23, 2022",
        title: "Blog Six",
        description: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        }
]

const blogHtml = blogPosts.map(blog => `
    <div class="blog-post-container">
        <img src=${blog.img}>
        <p>${blog.date}</p>
        <h2>${blog.title}</h2>
        <p>${blog.description}</p>
    </div>`
    )
    
document.getElementById("blog-section").innerHTML += blogHtml.join(" ")
