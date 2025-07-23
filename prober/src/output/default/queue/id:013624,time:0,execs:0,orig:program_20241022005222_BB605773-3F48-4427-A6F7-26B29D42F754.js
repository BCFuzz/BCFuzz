class C1 {
}
const v2 = new C1();
const v5 = new WeakMap();
const v7 = this.constructor;
function f8(a9, a10, a11) {
    function f12(a13, a14) {
        a9 instanceof f8;
        return this;
    }
    a9.constructor = f12;
    try { a9(); } catch (e) {}
    let v17;
    try { v17 = a9(); } catch (e) {}
    try { a10.call(); } catch (e) {}
    try { a10.call(); } catch (e) {}
    const v20 = a9.bind();
    try { v20(v2); } catch (e) {}
    const v22 = v20.apply;
    try { v22(); } catch (e) {}
    const v24 = a10.constructor;
    class C25 {
    }
    try { C25.call(v20); } catch (e) {}
    const v28 = new Float64Array(v5, v7);
    const v29 = v28.reduce;
    try { v29("deleteProperty"); } catch (e) {}
    v28.lastIndexOf();
    v24(v7);
    Array.isArray(v22);
    Array(3);
    let v37;
    try { v37 = v5.call(BigUint64Array); } catch (e) {}
    const v38 = a9.toString;
    try { v38(); } catch (e) {}
    try { a11(v17); } catch (e) {}
    try { BigUint64Array(v37); } catch (e) {}
    let v42 = 3247;
    for (; v42--;) {
    }
    return v28;
}
f8(f8, f8);
gc();
