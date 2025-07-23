const v1 = makeMasquerader();
const v3 = /\111/mys.toString();
function f5(a6) {
    let v7;
    try { v7 = v3.set(a6, a6); } catch (e) {}
    for (let i10 = -3, i11 = 10; i10 < i11; i11--, v1 == v7) {
    }
    return v3;
}
Uint8ClampedArray.toString = f5;
ReferenceError(Uint8ClampedArray);
gc();
