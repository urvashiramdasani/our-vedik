var express    = require("express"),
app            = express(),
bodyParser     = require("body-parser")

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/public"))

app.get("/", function(req, res) {
	res.render("home")
})

app.get("/about", function(req, res) {
	// about us template goes here.
})

app.get("/signup", function(req, res) {
	res.render("signup")
})

app.get("/termsandconditions", function(req, res) {
	res.render("terms&conditions")
})

app.post("/signup", function(req, res) {
	// redirect to home page after signing in
	res.send("YOU HAVE SUCCESSFULLY SIGNED UP!") // delete this later
})

app.listen(3000, function() {
	console.log("Our Vedik Server has started...!")
})
