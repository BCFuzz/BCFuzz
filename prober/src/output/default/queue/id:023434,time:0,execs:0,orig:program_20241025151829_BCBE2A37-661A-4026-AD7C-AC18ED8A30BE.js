const v2 = new BigInt64Array(10);
const v5 = Math.ceil;
const v6 = v5.bind(v5, Math, v2);
v2.sort(v6.bind(v6, Int16Array));
gc();
