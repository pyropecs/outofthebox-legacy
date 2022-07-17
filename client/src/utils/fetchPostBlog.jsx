export async function fetchAsync(data) {
  let res = await fetch("https://hidden-hollows-92619.herokuapp.com/create", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(data),
  }).catch(() => {
    setLoading(false);

    setResponse("server not able to reach");
  });
  let resDatas = await res.json();

  return resDatas;
}
