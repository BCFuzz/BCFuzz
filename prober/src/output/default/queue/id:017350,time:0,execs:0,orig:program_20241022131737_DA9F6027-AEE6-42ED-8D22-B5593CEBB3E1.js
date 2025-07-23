for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 extends Uint32Array {
            7 = Uint8Array;
        }
        new C9(15);
    }
    const v11 = new F1();
    const t9 = v11.constructor;
    new t9();
}
gc();
