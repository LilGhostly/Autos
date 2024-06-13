export async function getBrands() {
  try {
    const response = await fetch("api/dev/usados/marcas");
    const data = await response.json();
    //console.log(data);
    return JSON.parse(data.body);
  } catch (err) {
    console.log(err);
  }
}

export async function filterBrand(brand) {
  try {
    const response = await fetch("api/dev/usados/marca", {
      method: "POST",
      body: `brand:${brand}`,
    });
    const data = await response.json();
    //console.log(data);
    return JSON.parse(data.body);
  } catch (err) {
    console.log(err);
  }
}
