export async function fetchGetAsync(route) {
  const res = await fetch(
    `https://outofthebox.onrender.com/categories/${route}`
  );
  const resData = await res.json();
  return resData;
}
