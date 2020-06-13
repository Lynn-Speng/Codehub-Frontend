export default (req, res) => {
    res.statusCode = 200;
    console.log("Here's api index notice");
    res.json(
        {
            date: "2020-06-12 20:20:12",
            title: "Ea do sint ad cupidatat consequat cillum nisi aute nisi sit est labore.",
            detail: "Ea labore aute exercitation eiusmod mollit ipsum aute tempor minim. Est voluptate do exercitation culpa quis culpa eiusmod et cupidatat. Eu tempor Lorem quis ea commodo cillum laborum minim eu elit. Exercitation ipsum ipsum veniam et nulla dolore sunt sunt commodo. Ut excepteur eiusmod voluptate qui enim cillum do deserunt elit proident. Lorem aliqua nulla ut qui."
        }
    )  
}
  