function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Uint32Array.prototype = Uint32Array;
    let v9;
    try { v9 = Int32Array.from(this); } catch (e) {}
    let v10;
    try { v10 = Int32Array(v9, v9); } catch (e) {}
    function f11() {
        return f11;
    }
    let v12;
    try { v12 = f11(); } catch (e) {}
    class C13 extends f11 {
    }
    class C14 extends C13 {
    }
    const v15 = new Int32Array(this, v9);
    try { v15.sort(v10); } catch (e) {}
    class C17 extends Uint32Array {
    }
    const v18 = C17?.toString;
    let v19;
    try { v19 = new v18(v12, v9, C17, f11, f11); } catch (e) {}
    const v20 = [536870889,-11,-2,536870888];
    try { v20.concat(C17, v20); } catch (e) {}
    const o22 = {
    };
    try { C17["getInt8"](Float64Array, v19, this); } catch (e) {}
    v10 <<= v15;
    class C26 {
    }
    function* f27(a28, a29, a30, a31) {
        return F1;
    }
    for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
        i35 /= 8;
        for (let v43 = 0; v43 < 10; v43++) {
        }
    }
}
const v44 = new F1(Float64Array, F1, F1, Float64Array);
const v45 = new F1();
new F1(F1, F1, v45, v44);
gc();
