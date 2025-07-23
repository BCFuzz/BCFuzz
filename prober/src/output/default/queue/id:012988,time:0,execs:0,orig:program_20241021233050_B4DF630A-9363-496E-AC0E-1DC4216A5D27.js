const v1 = new BigInt64Array();
const o2 = {
};
const v4 = new Proxy(v1, o2);
typeof v4 === "function";
gc();
