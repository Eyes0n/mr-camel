export default function getProductData(path) {
  return {
    id: decodeURI(path[2]),
    title: decodeURI(path[3]),
    brand: decodeURI(path[4]),
    price: path[5],
    disLike: Boolean(+path[6]),
    visitedDate: new Date(),
  };
}
