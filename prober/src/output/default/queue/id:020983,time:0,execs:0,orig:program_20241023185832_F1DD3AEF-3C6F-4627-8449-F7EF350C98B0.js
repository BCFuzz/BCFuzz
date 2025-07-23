const v1 = new Float32Array();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let v12 = 0; v12 < 5; v12++) {
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v15 = new F13();
    v15.__proto__ = v1;
    try { v15.p(F13, v1); } catch (e) {}
}
gc();
