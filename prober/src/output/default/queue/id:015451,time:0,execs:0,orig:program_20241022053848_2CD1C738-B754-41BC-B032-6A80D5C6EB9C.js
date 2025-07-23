const v2 = new WeakMap();
function f3(a4, a5, a6) {
    let v7;
    try { v7 = a5(); } catch (e) {}
    let v8;
    try { v8 = a4(); } catch (e) {}
    let v9;
    try { v9 = a4(); } catch (e) {}
    try { a5.call(); } catch (e) {}
    try { a5.call(v8, a4, v9); } catch (e) {}
    const v12 = a4.bind();
    try { v12(); } catch (e) {}
    const v14 = v12.apply;
    try { v14.call(v7); } catch (e) {}
    try { v14(); } catch (e) {}
    const v17 = a5.constructor;
    const v18 = v17.constructor;
    try { v18(); } catch (e) {}
    try { v17(); } catch (e) {}
    try { v17(); } catch (e) {}
    try { v2.call(BigUint64Array, a4); } catch (e) {}
    const v23 = a4.toString;
    try { v23(); } catch (e) {}
    try { v23(); } catch (e) {}
    try { a6(); } catch (e) {}
    try { BigUint64Array(); } catch (e) {}
    let v28 = 3247;
    for (; v28--;) {
    }
    return v8;
}
f3.constructor = f3;
f3(f3, f3);
gc();
