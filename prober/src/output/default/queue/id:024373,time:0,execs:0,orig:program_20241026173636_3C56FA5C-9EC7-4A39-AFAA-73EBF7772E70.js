const v1 = new WeakMap();
function f2(a3, a4, a5) {
    try { a3(); } catch (e) {}
    try { a4.call(); } catch (e) {}
    try { a4.call(); } catch (e) {}
    const v9 = a3.bind();
    try { v9.bind(v9, a5, WeakMap, v1); } catch (e) {}
    try { v9(); } catch (e) {}
    const v12 = v9.apply;
    try { v12.call(); } catch (e) {}
    const v14 = a4.constructor;
    try { v14(); } catch (e) {}
    try { v14(); } catch (e) {}
    try { v1.call(); } catch (e) {}
    const v18 = a3.toString;
    try { v18.bind(); } catch (e) {}
    let v20 = 3247;
    for (; v20--;) {
    }
}
f2(f2, f2);
gc();
