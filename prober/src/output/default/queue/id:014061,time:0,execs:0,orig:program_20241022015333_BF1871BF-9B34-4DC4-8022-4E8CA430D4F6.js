function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a5 - a5;
    a6 > a6;
    this.h = a5;
}
const v10 = new F2(125, 125, 125, 201);
const v11 = new F2(125, 201);
const v14 = new BigInt64Array(512);
for (const v15 in v14) {
    const v16 = v15.toUpperCase();
    try { new F2(v16, v11, v10, ...v16); } catch (e) {}
}
gc();
