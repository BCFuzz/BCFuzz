const v2 = new WeakMap();
function f3(a4, a5, a6) {
    let v7;
    try { v7 = a4(); } catch (e) {}
    let v8;
    try { v8 = a4(); } catch (e) {}
    try { a5.call(); } catch (e) {}
    let v10;
    try { v10 = a5.call(); } catch (e) {}
    const v12 = a4.bind(v10, v10, v8).apply;
    try { v12(v12); } catch (e) {}
    try { v2.call(); } catch (e) {}
    const v15 = a4.toString;
    try { v15(); } catch (e) {}
    try { a6(v7); } catch (e) {}
    try { BigUint64Array(); } catch (e) {}
    let v19 = 3247;
    for (; v19--;) {
    }
}
f3(f3);
gc();
