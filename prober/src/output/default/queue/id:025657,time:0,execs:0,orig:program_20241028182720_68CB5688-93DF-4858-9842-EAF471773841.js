const v1 = new WeakMap();
function f2(a3, a4, a5) {
    a4++;
    try { a3(); } catch (e) {}
    try { a3(); } catch (e) {}
    try { a4.call(v1); } catch (e) {}
    try { a4.call(); } catch (e) {}
    const v11 = a3.bind();
    try { v11(); } catch (e) {}
    try { v11.some(); } catch (e) {}
    const v14 = v11.apply;
    try { v14.call(); } catch (e) {}
    try { v14(); } catch (e) {}
    const v17 = a4.constructor;
    v17.MIN_SAFE_INTEGER = v17;
    try { v17.prototype(a4); } catch (e) {}
    const v19 = v17();
    try { v19(); } catch (e) {}
    try { v1.call(); } catch (e) {}
    const v22 = a3.toString;
    try { v22.constructor(v11); } catch (e) {}
    try { v22(); } catch (e) {}
    let v25 = 3247;
    for (; v25--;) {
    }
    return v1;
}
f2(f2);
gc();
