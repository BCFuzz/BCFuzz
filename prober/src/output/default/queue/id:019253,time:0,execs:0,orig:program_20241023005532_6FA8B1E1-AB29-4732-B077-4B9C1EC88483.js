function f1(a2) {
    new Float32Array();
}
const v5 = [-1000.0,2.220446049250313e-16,0.21707873446094106,0.30135142262428616,0.23354146903329376];
const v6 = `
    function f7() {
        return f7;
    }
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F13(a15, a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new Uint16Array(v5);
    class C21 {
    }
    const v22 = new C21();
    const v23 = v22.constructor;
    const v24 = new v23();
    const v25 = v24.constructor;
    const v26 = new v25();
    const v27 = v26.constructor;
    const v28 = new v27();
    Int16Array && v28;
    new Int8Array(v28, v25, v23);
    this.h = true;
    const v35 = delete this.h;
    const v37 = this.RangeError;
    this.parseInt(v27, v6, true, this, v35);
    new Int32Array(v28, v37, v25);
    new BigUint64Array();
    new Uint32Array();
    Set.constructor;
`;
eval(v6);
v5.toString = f1;
const o51 = {
    set d(a49) {
        const o50 = {
            [v5]: 0.9555916980184522,
        };
    },
};
o51.d = o51;
gc();
