const v2 = new WeakMap();
const v4 = this.constructor;
function f5(a6, a7, a8) {
    try { a6(); } catch (e) {}
    try { a6(); } catch (e) {}
    try { a7.call(v4, a7); } catch (e) {}
    try { a7.call(); } catch (e) {}
    const v14 = a6.bind().apply;
    try { v14(); } catch (e) {}
    const v16 = a7.constructor;
    try { v16(v4); } catch (e) {}
    try { v2.call(BigUint64Array); } catch (e) {}
    const v19 = a6.toString;
    try { v19(); } catch (e) {}
    try { a8(); } catch (e) {}
    try { BigUint64Array(); } catch (e) {}
    let v23 = 3247;
    for (; v23--;) {
    }
    return WeakMap;
}
f5(f5, f5);
gc();
