const v1 = new WeakMap();
const v3 = this.constructor;
function f4(a5, a6, a7) {
    let v8;
    try { v8 = a6.call(); } catch (e) {}
    const v9 = a5.bind();
    const v10 = v9.apply;
    let v11;
    try { v11 = v10(v8, v9, v3); } catch (e) {}
    const v12 = a6.constructor;
    let v13;
    try { v13 = v12(v3); } catch (e) {}
    try { v1.call(v8, a5, a5, v11); } catch (e) {}
    const v15 = a5.toString;
    try { v15(v3, v13); } catch (e) {}
    let v17 = 3247;
    for (; v17--;) {
    }
    return v17;
}
f4(f4, f4);
gc();
