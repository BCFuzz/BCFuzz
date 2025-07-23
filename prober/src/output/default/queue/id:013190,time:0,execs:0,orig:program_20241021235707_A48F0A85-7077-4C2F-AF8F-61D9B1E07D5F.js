const v2 = new WeakMap();
const v4 = this.constructor;
function f5(a6, a7, a8) {
    try { a6(); } catch (e) {}
    try { a6(); } catch (e) {}
    let v11;
    try { v11 = a7.call(); } catch (e) {}
    try { a7.call(); } catch (e) {}
    const v13 = a6.bind();
    const v14 = v13.apply;
    try { v14(v13, a6); } catch (e) {}
    const v16 = a7.constructor;
    try { v16(v4); } catch (e) {}
    try { v2.call(); } catch (e) {}
    function f19(a20, a21) {
        return f19;
    }
    const v24 = new Float64Array(10);
    v24["toSorted"](f19);
    const v27 = a6.toString;
    try { v27(); } catch (e) {}
    try { a8(); } catch (e) {}
    try { BigUint64Array(); } catch (e) {}
    let v31 = 3247;
    for (; v31--;) {
    }
    return v11;
}
f5(f5, f5);
gc();
