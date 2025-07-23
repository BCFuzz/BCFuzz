makeMasquerader();
const v3 = /\111/mys.toString();
function f5(a6) {
    let v7;
    try { v7 = v3.set(); } catch (e) {}
    for (let i10 = -3, i11 = 10;
        i10 < i11;
        (() => {
            let v15 = i11--;
            v15--;
            this == v7 ? this : v7;
        })()) {
    }
}
Uint8ClampedArray.toString = f5;
ReferenceError(Uint8ClampedArray);
gc();
