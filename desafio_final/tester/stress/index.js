import { check } from "k6";
import http from "k6/http";

const timing = 1000;

export const options = {
  stages: [
    //{ duration: "15s", target: 10 },
    //{ duration: "20s", target: 20 },
    { duration: "10s", target: 30 },
  ],
};

export default function () {
  const req1 = {
    method: "GET",
    url: "http://localhost:3000/posts",
  };

  const req2 = {
    method: "GET",
    url: "http://localhost:3000/posts/62689f9ca4937397d86afecb",
  };

  /*const req3 = {
    method: "POST",
    url: "http://localhost:3000/posts",
    body: JSON.stringify({
      title: "Isabella",
      body: "teste",
    }),
    params: {
      headers: { "Content-Type": "application/json" },
    },
  };*/

  /*const req4 = {
    method: "POST",
    url: "http://localhost:3000/noticias",
    body: JSON.stringify({
      title: "Isabella",
      body: "teste",
    }),
    params: {
      headers: { "Content-Type": "application/json" },
    },
  };*/

  const responses = http.batch([req1, req2]);

  for (let index = 0; index < responses.length; index++) {
    const element = responses[index];
    check(element, {
      "is status 200": (r) => r.status === 200 || 201,
      "is timings request durantion": (r) => r.timings.duration <= timing,
    });
  }
}
