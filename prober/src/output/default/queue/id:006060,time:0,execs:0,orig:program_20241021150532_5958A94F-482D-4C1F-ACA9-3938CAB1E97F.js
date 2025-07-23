const v0 = [];
const v2 = new Int8Array();
class C3 {
}
const v4 = new C3();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
new F5();
const v12 = `
    class C14 extends Date {
        constructor(a16, a17) {
            super();
            gc();
        }
    }
    const v20 = [];
    function F21(a23) {
        if (!new.target) { throw 'must be called with new'; }
        function f24(a25) {
        }
        class C26 extends f24 {
            d = v0;
        }
    }
    with (v20) {
        try { length(); } catch (e) {}
    }
    const v30 = ([-2.0,NaN,-2.220446049250313e-16,1e-15,-2.2250738585072014e-308,-4.2963908948877037e+307]).toSpliced();
    v2[Symbol.asyncIterator];
    v4.e = v30;
    class C34 {
    }
    const v35 = new C34();
    v35.constructor;
    class C37 extends C14 {
    }
    new C37();
`;
eval(v12);
gc();
