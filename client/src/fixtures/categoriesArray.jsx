export const categories = [
  "True Stories",
  "Your Life Superhuman",
  "Fantasy",
  "Real Incident",
];

export const Content = [
  "share your inspiring real stories to the world",
  "the person who changed your life share to us",
  "the thoughts or your fantasy story share to the world",
  "real incident that happened that in your life",
];

export const CateGoriesRoute = categories.map((elem, index) => {
  const route = elem.toLowerCase().split(" ").join("+");

  return route;
});
