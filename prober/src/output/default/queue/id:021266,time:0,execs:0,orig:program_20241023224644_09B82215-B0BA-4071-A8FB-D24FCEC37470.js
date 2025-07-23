const v1 = new Set();
function f2() {
    let v3;
    try { v3 = v1.has(f2); } catch (e) {}
    v1[Set] |= v3;
    return v3;
}
const v6 = new BigInt64Array(127);
v6.reduceRight(f2);
gc();
