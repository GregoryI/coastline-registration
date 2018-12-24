export function submitRegistration(user, company, billing, invite) {
  let options = {
    params: {},
    data: {
      user,
      company,
      billing,
      invite
    }
  };

  return post("/registration", options);
}


function post(endpoint, options={}) {
  return api("POST", endpoint, options);
}

function api(method, endpoint, options) {

  let data = options.data || {};

  let url = endpoint;
  let init = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify(data),
  };


  return fetch(url, init)
    .then(response => {
      // Got a response
      if (response && (response.ok || response.status)) {
        switch (response.status) {
          case 200:
            return response.json();
          default:
            let reason = "Invalid response status: " + response.status;
            throw Error(reason);
        }
      }
    });
}