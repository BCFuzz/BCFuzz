const v1 = new WeakMap();
function f2(a3, a4, a5) {
    a4++;
    try { a3(); } catch (e) {}
    try { a3(); } catch (e) {}
    try { a4.call(v1, v1); } catch (e) {}
    try { a4.call(); } catch (e) {}
    const v11 = a3.bind();
    try { v11(); } catch (e) {}
    try { v11.some(); } catch (e) {}
    const v14 = v11.apply;
    try { v14.call(); } catch (e) {}
    try { v14(); } catch (e) {}
    const v17 = a4.constructor;
    try { v17.prototype(v17, v1, v17); } catch (e) {}
    const v19 = v17();
    try { v19(WeakMap); } catch (e) {}
    try { v1.call(); } catch (e) {}
    try { Float64Array.from(); } catch (e) {}
    const v24 = a3.toString;
    try { v24(); } catch (e) {}
    let v26 = 3247;
    for (; v26--;) {
    }
    return v1;
}
f2(f2);
gc();
