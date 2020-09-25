const express = require("express");
const app = express();

var List = {};
//These 2 are included in express library
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// GET request handling to /messages
app.get("/messages/", (req, res) => {
  console.log(req.body);
  if (List[req.query.mi])
    res.render("index.ejs", {
      messagecontent: `Fetched message: "${
        List[req.query.mi].message
      }" where id: "${req.query.mi}"`,
      methodtype: req.method,
    });
  else res.end();
});

// POST request handling to /messages
app.post("/messages/", (req, res) => {
  if (req.query.mi && req.query.mc) {
    List[req.query.mi] = {
      message: req.query.mc.toString(),
    };
    res.render("index.ejs", {
      messagecontent: `Added message: "${req.query.mc}" where id: "${req.query.mi}"`,
      methodtype: req.method,
    });
  } else res.end();
});

// PUT request handling to /messages
app.put("/messages/", (req, res) => {
  if (req.query.mi && req.query.mc) {
    List[req.query.mi] = {
      message: req.query.mc.toString(),
    };
    res.render("index.ejs", {
      messagecontent: `Updated message to: "${req.query.mc}" where id: "${req.query.mi}"`,
      methodtype: req.method,
    });
  } else res.end();
});

// DELETE request handling to /messages
app.delete("/messages/", (req, res) => {
  if (List[req.query.mi]) {
    res.render("index.ejs", {
      messagecontent: `Deleting message: "${
        List[req.query.mi].message
      }" where id: "${req.query.mi}"`,
      methodtype: req.method,
    });
    delete List[req.query.mi];
  } else res.end();
});
