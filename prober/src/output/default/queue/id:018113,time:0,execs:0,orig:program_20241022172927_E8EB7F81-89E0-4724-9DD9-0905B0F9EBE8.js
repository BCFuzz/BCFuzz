function f0(a1, a2) {
    makeMasquerader();
    return f0;
}
const v5 = /\111/mys;
v5.toString = f0;
const v6 = v5.toString(f0, f0, f0);
function f8(a9) {
    let v10;
    try { v10 = v6.set(a9, a9, a9, v6); } catch (e) {}
    for (let i13 = -3, i14 = 10;
        i13 < i14;
        (() => {
            i14--;
            const v20 = ("").normalize;
            try { v20(); } catch (e) {}
            this == v10 ? this : v10;
        })()) {
    }
    return v10;
}
Uint8ClampedArray.toString = f8;
ReferenceError(Uint8ClampedArray);
gc();
