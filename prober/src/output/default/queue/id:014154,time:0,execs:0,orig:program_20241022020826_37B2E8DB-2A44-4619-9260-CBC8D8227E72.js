const v1 = new WeakMap();
function f2(a3, a4, a5) {
    let v6;
    try { v6 = a4.apply(a5, a4, WeakMap, WeakMap); } catch (e) {}
    try { a3(); } catch (e) {}
    try { a3(); } catch (e) {}
    let v9;
    try { v9 = a4.call(); } catch (e) {}
    try { a4.call(); } catch (e) {}
    const v11 = a3.bind();
    try { v11(); } catch (e) {}
    try { v11(v6, v1, a3, v6, a5); } catch (e) {}
    const v14 = v11.apply;
    try { v14.call(); } catch (e) {}
    try { v14(); } catch (e) {}
    const v17 = a4.constructor;
    let v18;
    try { v18 = v17(); } catch (e) {}
    try { v17(v1, v18, WeakMap, v18); } catch (e) {}
    try { v17(); } catch (e) {}
    try { v1.call(); } catch (e) {}
    try { a5(a4, WeakMap, v17, v9); } catch (e) {}
    let v23 = 3247;
    for (; v23--;) {
    }
}
f2.constructor = f2;
f2(f2, f2);
gc();
