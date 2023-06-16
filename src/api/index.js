export const fetchUserDataAsync = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const data = fetch(url)
    .then((res) => res.json())
    .catch(() => "error");
  return data;
};
