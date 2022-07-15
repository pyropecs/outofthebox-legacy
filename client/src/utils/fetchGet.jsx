export async function fetchGetAsync(route) {
  const res = await fetch(`http://localhost:5000/categories/${route}`);
  const resData = await res.json();
  return resData;
}
