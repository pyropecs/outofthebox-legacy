export async function fetchUserPostAsync(credentials) {
  let res = await fetch("https://hidden-hollows-92619.herokuapp.com/login", {
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
