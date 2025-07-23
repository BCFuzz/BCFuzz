function f0(a1, a2) {
    return makeMasquerader();
}
const v5 = /\111/mys;
v5.toString = f0;
v5.toString(f0, v5, v5, v5, f0);
function f8(a9) {
    for (let i12 = -3, i13 = 10;
        i12 < i13;
        (() => {
            i13--;
            const v19 = ("").normalize;
            try { v19(a9, v19, f0, a9, v19); } catch (e) {}
            this == this;
        })()) {
    }
    return a9;
}
Uint8ClampedArray.toString = f8;
ReferenceError(Uint8ClampedArray);
gc();
