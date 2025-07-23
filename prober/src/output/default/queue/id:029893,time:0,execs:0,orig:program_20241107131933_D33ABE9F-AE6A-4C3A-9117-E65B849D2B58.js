let v0 = 12;
const v1 = v0++;
const v3 = ("g").constructor;
const v4 = v3.fromCharCode(v0);
try {
    new v4(v4, v1);
} catch(e6) {
    class C7 {
    }
    function F8(a10, a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        try { C7.constructor(e6); } catch (e) {}
    }
    new F8(v4, v3, F8, F8);
}
gc();
