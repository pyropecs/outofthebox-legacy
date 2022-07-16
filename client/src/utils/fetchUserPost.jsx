export async function fetchUserPostAsync(credentials) {
  let res = await fetch("http://localhost:5000/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(credentials),
  }).catch(() => {
    setLoading(false);

    setResponse("server not able to reach");
  });
  let resDatas = await res.json();

  return resDatas;
}
