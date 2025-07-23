const v1 = new WeakMap();
const v3 = this.constructor;
function f4(a5, a6, a7) {
    const v8 = a6.constructor;
    let v9;
    try { v9 = v8(v3); } catch (e) {}
    try { v1.call(a7, v8, f4, WeakMap); } catch (e) {}
    const v11 = a5.toString;
    try { v11(a7, v9, v8, WeakMap, a7); } catch (e) {}
    let v13 = 3247;
    for (; v13--;) {
    }
    return a5;
}
f4(f4, f4);
gc();
