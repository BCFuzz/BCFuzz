const v3 = new BigInt64Array(10);
const v6 = Math.ceil;
v3.sort(v6.bind(v6, Math, v3, Int16Array, 65536n).bind());
gc();
