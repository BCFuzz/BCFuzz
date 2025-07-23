class C0 {
}
const v1 = new C0();
function f2() {
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        class C10 {
        }
        const v14 = a9 + URIError(URIError(C10));
        const t9 = Float64Array.constructor;
        t9(v14);
    }
    const v17 = new F4();
    return v17;
}
v1.constructor = f2;
const v18 = v1.constructor;
try { v18(v1, C0, v18, v18, v18); } catch (e) {}
gc();
