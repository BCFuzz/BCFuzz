const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    let v8 = -a4;
    v8--;
    function F10(a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { new F10(); } catch (e) {}
    let v16 = ~v8;
    v16++;
    return f3;
}
v2.map(f3);
gc();
