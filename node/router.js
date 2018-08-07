//2. Handle HTTP route GET / and POST / i.e. Home
function home (req, res) {
  //if url == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      //show search
      // res.statusCode = 200;
      res.writeHead(200, {'Content-Type': 'text/html'});
      renderer.view("header", {}, res); //insertar el archivo con parte del código. entrecomillas está el nombre del archivo sin .html
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
    } else { //si el método es POST
      request.on("data"), function(postBody) {
        //extract the username
        var query = querystring.parse (postBody.toString());
        response.writeHead(303, {"Location": "/" + query.username});
        response.end();
      });
    }
  }
  //if url == "/" && POST
    //redirect to /:username
}

//3. Handle HTTP route GET /:username i.e. /chalkers
function user (req, res) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if (username.length > 0) { //asegurarte que el nombre que escribes no es nada
    res.setHeader(200, {'Content-Type': 'text/plain'});
    renderer.view("header", {}, res);

    //get json from Treehouse
    var studentProfile = new Profile("chalkers");
  //on "end"
    studentProfile.on("end", function(profileJSON) {
    //show profile
    //store the values that we need
      var values = { //entrar en el perfil de la web y guardar los datos en estas variables
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javaScriptPoints: profile.points.JavaScript,
      }
    // añadir siempre el final
    renderer.view("profile", values, res); //incluir el var de arriba
    renderer.view("footer", {}, res);
    });
    //on "error"
    studentProfile.on("error", function(error) {


      //show error
    renderer.view("error", {errorMessage: error.message}, res);
    renderer.view("footer", {}, res);
    res.end(); //un final a que no hay mas información
    });
  }
}


module.exports.home = home;
module.exports.user = user;
