const env = "prod"; // local or prod

let URL = "";

if (env === "prod") {
  URL = "http://mywebsitebackend-production-ec4f.up.railway.app/";
} else {
  URL = "http://localhost:8080/";
}

export default URL;
// ?
