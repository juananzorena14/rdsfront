const url = "https://rincon-del-sabor-dev.onrender.com/api/categorias";

const categoryList = async () => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await res.json();

  return data;
};

export { categoryList };