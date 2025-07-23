const v1 = new WeakMap();
const v3 = this.constructor;
function f4(a5, a6, a7) {
    try { a5(); } catch (e) {}
    let v9;
    try { v9 = a6.call(); } catch (e) {}
    let v10;
    try { v10 = a6.call(); } catch (e) {}
    const v12 = a5.bind().apply;
    try { v12(v9, a6); } catch (e) {}
    const v14 = a6.constructor;
    let v15;
    try { v15 = v14(v3); } catch (e) {}
    try { v1.call(v15, v10, a7); } catch (e) {}
    const v17 = a5.toString;
    try { v17(); } catch (e) {}
    let v19 = 3247;
    for (; v19--;) {
    }
    return v17;
}
f4(f4, f4);
gc();
