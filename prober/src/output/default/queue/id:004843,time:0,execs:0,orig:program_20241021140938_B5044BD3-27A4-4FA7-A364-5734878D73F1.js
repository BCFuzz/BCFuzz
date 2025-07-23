for (let v3 = 0; v3 < 5; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        new Float32Array();
        const t4 = SharedArrayBuffer.constructor;
        t4();
        class C14 {
            constructor(a16, a17, a18) {
                super.d;
            }
        }
        new C14(v3, SharedArrayBuffer, 536870912);
        new C14();
    }
    new F4();
    function F24(a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v28 = new F24();
    v28.constructor;
}
const v30 = [536870912,536870912,536870912,536870912,536870912];
const o31 = {
};
const v33 = new Proxy(v30, o31);
const v34 = v33.values;
try { v34(); } catch (e) {}
gc();
