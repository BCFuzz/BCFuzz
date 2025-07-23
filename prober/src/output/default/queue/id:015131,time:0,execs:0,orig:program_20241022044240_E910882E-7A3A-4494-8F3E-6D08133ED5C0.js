const v1 = new BigInt64Array();
const o2 = {
};
const v4 = new Proxy(v1, o2);
typeof v4;
for (let v6 = 0; v6 < 250; v6++) {
}
gc();
