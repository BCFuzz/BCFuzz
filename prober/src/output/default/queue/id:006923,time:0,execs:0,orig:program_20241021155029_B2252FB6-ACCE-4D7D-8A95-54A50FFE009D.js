function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7, a8) {
        const v10 = new Float64Array();
        return v10.byteLength;
    }
    for (let i = 0; i < 5; i++) {
        f4();
    }
}
new F0();
new F0();
gc();
