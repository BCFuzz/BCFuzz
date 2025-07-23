for (let i = 0; i < 5; i++) {
    function f0() {
        class C2 extends Int32Array {
        }
        const v3 = new C2();
        v3.subarray(f0, v3);
        return C2;
    }
    const v5 = f0();
    f0();
    function f7() {
        return v5;
    }
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F9(f7, f7, f7);
    const v15 = v14.constructor;
    const v17 = ("-13")[undefined];
    function f18(a19, a20) {
        const v21 = a20.constructor;
        v21.prototype = v21;
        const v22 = new v21(F9, f18, v21);
        return v22;
    }
    f18(v17, v14);
    Object.defineProperty(v15, 0, { enumerable: true, get: f7, set: f18 });
}
gc();
