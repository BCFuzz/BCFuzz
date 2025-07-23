function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v8;
    try { v8 = Int32Array(); } catch (e) {}
    function f9() {
        return f9;
    }
    class C10 extends f9 {
    }
    class C11 extends C10 {
    }
    new C11();
    const v13 = new Int32Array();
    try { v13.sort(v8); } catch (e) {}
    class C15 extends Uint32Array {
    }
    const v18 = new Float64Array();
    v18[0] = v18;
    const v20 = [536870889,-11,-2,536870888];
    try { v20.concat(C15, v20); } catch (e) {}
    ([1073741823,60812])[1];
    const o25 = {
    };
    const v27 = new ArrayBuffer(236, o25);
    const v29 = new Uint8Array(v27);
    class C30 {
    }
    try { C30(v29); } catch (e) {}
    const v32 = new C30();
    try { v32.isPrototypeOf(); } catch (e) {}
    for (let i37 = 0, i38 = 10;
        (() => {
            const v39 = i37 < i38;
            !v39;
            return v39;
        })();
        i37++, i38--) {
        i37 /= 8;
        for (let v47 = 0; v47 < 10; v47++) {
        }
    }
    new Float64Array(64);
    new BigUint64Array(968);
    function f53() {
        return F0;
    }
}
const v54 = new F0();
const v55 = new F0();
new F0(F0, F0, v55, v54);
gc();
