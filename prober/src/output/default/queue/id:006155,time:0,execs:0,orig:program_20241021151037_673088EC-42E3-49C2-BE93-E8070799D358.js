function f0(a1) {
    class C4 {
    }
    const v5 = new Float32Array(C4);
    for (const v6 in v5) {
    }
    const v8 = new Uint8Array(1024);
    function F9(a11, a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = v8;
    }
    const v15 = new F9();
    for (const v17 of v15.d) {
    }
    return F9;
}
f0();
gc();
