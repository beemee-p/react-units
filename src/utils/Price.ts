export function getPriceByKor(price: number) {
  const man = Math.floor(price / 10000) || 0;
  const cheon = Math.floor((price - man * 10000) / 1000) || 0;
  const bek = Math.floor((price - man * 10000 - cheon * 1000) / 100) || 0;

  const manKor = (!!man && man + "만 ") || "";
  const cheonKor = (!!cheon && cheon + "천 ") || "";
  const bekKor = (!!bek && bek + "백") || "";

  return `${manKor}${cheonKor}${bekKor}원`;
}
