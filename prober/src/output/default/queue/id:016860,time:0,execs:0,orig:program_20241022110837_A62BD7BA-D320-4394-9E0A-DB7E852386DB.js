const v4 = new Uint16Array(156);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.__lookupGetter__(a11);
    try { Int32Array(a9); } catch (e) {}
    try { Int32Array.from(); } catch (e) {}
    let v16;
    try { v16 = Int32Array(); } catch (e) {}
    function f17() {
    }
    let v18;
    try { v18 = f17(); } catch (e) {}
    class C19 extends f17 {
    }
    try { C19(); } catch (e) {}
    class C21 extends C19 {
    }
    const v22 = new C21();
    try { v22.call(a11); } catch (e) {}
    const v24 = new Int32Array(C21);
    const v25 = v24.sort();
    try { v25.sort(); } catch (e) {}
    let v27;
    try { v27 = v25.sort(v25); } catch (e) {}
    class C28 extends Uint32Array {
    }
    try { new C28(); } catch (e) {}
    const v30 = C28.toString;
    try { new v30(); } catch (e) {}
    try { Float64Array(v30, v30, a9); } catch (e) {}
    const v33 = [536870889,-11,-2,536870888];
    try { v33.concat(); } catch (e) {}
    const o36 = {
    };
    const v38 = new ArrayBuffer(236, o36, 156, v16);
    try { v38.resize(); } catch (e) {}
    class C40 {
    }
    try { C40(); } catch (e) {}
    const v42 = new C40();
    try { v42.isPrototypeOf(); } catch (e) {}
    for (let [i47, i48] = (() => {
            10 >>> 10;
            return [0, 10];
        })();
        i47 < i48;
        i47++) {
    }
    let v55 = 968;
    for (const v56 of v4) {
    }
    v55--;
    function f58() {
        return v18;
    }
    try { f58("register", v27); } catch (e) {}
}
const v60 = new F6(v4, "register", F6, 156);
new F6(v60, 156, Float64Array, Float64Array);
gc();
