const v1 = Int8Array.of(Int8Array, Int8Array);
function f2(a3) {
    let v4;
    try { v4 = a3.setMilliseconds(); } catch (e) {}
    a3[72] ^= v4;
    return v1;
}
v1.constructor = f2;
const v5 = new Int8Array(v1, v1, v1);
const v6 = v1.constructor;
for (let v7 = 0; v7 < 250; v7++) {
    v6(v5);
}
gc();
