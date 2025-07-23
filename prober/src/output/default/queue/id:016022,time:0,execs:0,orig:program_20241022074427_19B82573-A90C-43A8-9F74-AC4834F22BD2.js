function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    const v15 = new Int32Array(681);
    function f16(a17, a18, a19, a20) {
        -v2;
        return a20;
        arguments.valueOf = f16;
        return v2;
    }
    v15.map(f16);
}
gc();
