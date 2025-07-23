const v1 = new BigInt64Array();
function f2(a3, a4, a5, a6) {
    try { a3(BigInt64Array, v1); } catch (e) {}
    Object.getOwnPropertyNames(a4);
}
for (let v10 = 0; v10 < 5; v10++) {
    f2(f2, v10);
}
gc();
