const v2 = [-1000.0,-1000.0,-1000.0];
const v3 = [-1000.0];
const v5 = new Uint32Array(v3);
function f6(a7, a8, a9, a10) {
    v5[1073741824] = v2;
    let v11;
    try { v11 = v3.map(a9); } catch (e) {}
    return v11;
}
f6(f6(), -1.300436262493229e+308, f6);
for (let v14 = 0; v14 < 10; v14++) {
    f6();
}
gc();
