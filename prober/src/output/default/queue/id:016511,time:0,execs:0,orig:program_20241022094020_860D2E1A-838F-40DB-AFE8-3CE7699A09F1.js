function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Int32Array(681);
    const v7 = `
        function f8(a9) {
            return f8;
        }
    `;
    eval(v7);
    function f12(a13, a14, a15, a16) {
        Number.isNaN();
        return a16;
        arguments.valueOf = f12;
        return a2;
    }
    v6.map(f12);
    const v21 = new Int32Array();
    const v22 = v21.subarray();
    for (let i = 0; i < 100; i++) {
        function f23(a24, a25, a26, a27) {
            return v7;
        }
        v22.map(f23);
    }
}
new F0(F0, F0);
gc();
