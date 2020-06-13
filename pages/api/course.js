export default (req, res) => {
    res.status(200);
    res.json(
        {
            id: 1,
            title: "C++ Starter",
            description: "Fugiat excepteur ipsum aute veniam quis fugiat.",
            chapters: [
                {
                    title: "Chapter 1",
                    discription: "Eiusmod nulla amet ut magna proident cillum dolor do labore.",
                    lectures: [
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        }
                    ]
                },
            
                {
                    title: "Chapter 1",
                    discription: "Eiusmod nulla amet ut magna proident cillum dolor do labore.",
                    lectureCount: 5,
                    lectures: [
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        }
                    ]
                },
                {
                    title: "Chapter 1",
                    discription: "Eiusmod nulla amet ut magna proident cillum dolor do labore.",
                    lectureCount: 5,
                    lectures: [
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        },
                        {
                            title: "Lecture 1",
                            url: "/jupyter"
                        }
                    ]
                }    
            ]
        }
    )
}