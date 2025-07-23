function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8, a9) {
        return a2;
    }
    const v11 = new Int32Array(681);
    function f12(a13, a14, a15, a16) {
        Number.isNaN(f5--);
        return a16;
        arguments.valueOf = f12;
        return Int32Array;
    }
    v11.map(f12);
    const v22 = new Int32Array();
    const v23 = v22.subarray();
    for (let i = 0; i < 100; i++) {
        function f24(a25, a26, a27, a28) {
            return this;
        }
        v23.map(f24);
    }
}
new F0();
gc();
