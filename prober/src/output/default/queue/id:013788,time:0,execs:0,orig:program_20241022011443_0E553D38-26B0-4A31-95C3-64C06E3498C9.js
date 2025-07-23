const v2 = new WeakMap();
function f3(a4, a5, a6) {
    try { a4(); } catch (e) {}
    try { a4(); } catch (e) {}
    let v9;
    try { v9 = a5.call(); } catch (e) {}
    try { a5.call(v9); } catch (e) {}
    const v11 = a4.bind();
    try { v11(); } catch (e) {}
    const v13 = v11.apply;
    try { v13.call(); } catch (e) {}
    try { v13(); } catch (e) {}
    const v16 = a5.constructor;
    try { v16(); } catch (e) {}
    try { v16(); } catch (e) {}
    try { v2.call(); } catch (e) {}
    const v20 = a4.toString;
    try { v20(); } catch (e) {}
    let v22;
    try { v22 = a6(); } catch (e) {}
    try { BigUint64Array(v22); } catch (e) {}
    let v24 = 3247;
    for (; v24--;) {
    }
}
f3.constructor = f3;
f3(f3, f3);
gc();
