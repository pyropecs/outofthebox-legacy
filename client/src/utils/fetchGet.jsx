export async function fetchGetAsync(route) {
  const res = await fetch(
    `https://hidden-hollows-92619.herokuapp.com/categories/${route}`
  );
  const resData = await res.json();
  return resData;
}
