const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.all(["/messages/", "/messages/:id"], (req, res) => {
  //Get request
  if (req.method === "GET")
    returnpage(
      res,
      `Here's the list: "The list should be here..."`,
      req.params.id
    );
  //Post request
  else if (req.method === "POST")
    returnpage(
      res,
      `Added title: "${req.body.messagetitle}" and content: "${req.body.messagecontent}"`,
      req.params.id
    );
  //put request
  else if (req.method === "PUT")
    returnpage(
      res,
      `Updated title: "${req.body.messagetitle}" and content: "${req.body.messagecontent}"`,
      req.params.id
    );
  //delete request
  else if (req.method === "DELETE")
    returnpage(res, `Deleting all messages hahaa!`, req.params.id);
});

//render page to user, res = client, str = string to be sent, id = given id
function returnpage(res, str, id) {
  if (id == null)
    res.render("index.ejs", {
      messagecontent: str,
    });
  else
    res.render("index.ejs", {
      messagecontent: "ID: " + id + " " + str,
    });
}
