const v0 = [332,-2147483649,16,2121830325,536870889];
class C1 {
}
const v2 = new C1();
const v5 = new WeakMap();
function f6(a7, a8, a9) {
    try { a7(v2, v0); } catch (e) {}
    function f11(a12, a13) {
    }
    f11.length = f11;
    a8.toString = f11;
    let v14;
    try { v14 = a8(); } catch (e) {}
    let v15;
    try { v15 = a7(); } catch (e) {}
    try { a7(); } catch (e) {}
    try { a8.call(); } catch (e) {}
    try { a8.call(v15, a7); } catch (e) {}
    const v19 = a7.bind();
    v19.length = v19;
    try { v19(); } catch (e) {}
    const v21 = v19.apply;
    try { v21(v15, a7); } catch (e) {}
    try { v21.call(v14); } catch (e) {}
    try { v21(); } catch (e) {}
    const v25 = a8.constructor;
    v25.d = v25;
    const t27 = v25.constructor;
    t27();
    const t28 = v25();
    t28();
    try { v5.call(BigUint64Array); } catch (e) {}
    const t32 = a7.toString;
    const v32 = t32();
    v32 - v32;
    try { BigUint64Array(); } catch (e) {}
    let v35 = 3247;
    for (; v35--;) {
    }
    return v15;
}
f6.MAX_VALUE = f6;
f6(f6, f6);
gc();
