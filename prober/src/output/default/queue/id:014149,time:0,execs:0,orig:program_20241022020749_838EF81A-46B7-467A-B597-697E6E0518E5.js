const v1 = new WeakMap();
function f2(a3, a4, a5) {
    try { a3(a5, a5, f2, WeakMap); } catch (e) {}
    try { a3(); } catch (e) {}
    try { a4.call(); } catch (e) {}
    try { a4.call(v1); } catch (e) {}
    const v10 = a3.bind();
    try { v10(); } catch (e) {}
    const v12 = v10.apply;
    try { v12.call(); } catch (e) {}
    try { v12(); } catch (e) {}
    const v15 = a4.constructor;
    try { v15(); } catch (e) {}
    try { v1.call(); } catch (e) {}
    const v18 = a3.toString;
    try { v18.bind(); } catch (e) {}
    try { v18(); } catch (e) {}
    let v21 = 3247;
    for (; v21--;) {
    }
    return a3;
}
f2(f2, f2);
gc();
