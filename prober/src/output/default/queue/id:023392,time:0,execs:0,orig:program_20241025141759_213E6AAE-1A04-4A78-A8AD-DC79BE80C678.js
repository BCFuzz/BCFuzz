const v1 = `
    const v5 = new Int16Array(Int16Array);
    new Float32Array(v5, v5, Uint32Array);
    new Uint8Array();
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f13() {
        return v1;
    }
    function F14() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f16() {
        return v5;
    }
    function F17(a19, a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v23 = new F17();
    function f24() {
        return F17;
    }
    function f25() {
        return Uint8Array;
    }
    class C26 {
    }
    const v27 = C26.apply;
    try { v27(v23, Uint32Array); } catch (e) {}
    const v29 = new C26();
    const t31 = v29.constructor;
    new t31(Map);
`;
eval(v1);
this.h = true;
delete this.h;
this.constructor.freeze(this);
gc();
