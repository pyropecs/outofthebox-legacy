export async function fetchGetAsync() {
  const res = await fetch("http://localhost:5000/");
  const resData = await res.json();
  return resData;
}
