import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server
    console.log("we are on the server");
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // we must be on the browser
    console.log("we are on the browser");
    return axios.create({
        baseUrl: '/'
    });
  }
};

export default buildClient;
