let v0 = null;
function f1(a2, a3, a4) {
    const v6 = v0++;
    v6 ** v6;
    return arguments;
}
const v10 = new BigUint64Array(586);
for (const v11 of v10) {
    f1(v11, v11, BigUint64Array);
}
gc();
