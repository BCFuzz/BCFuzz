function f0(a1, a2) {
    for (let i5 = 0, i6 = 10; i5 !== i6; i6--) {
        for (let v13 = 0; v13 < 25; v13++) {
        }
    }
    a1 && a1;
    const v15 = a2 && a1;
    v15 && v15;
    const v17 = v15 && v15;
    v17 || v17;
    function F19() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F19();
    return v17;
}
for (let v22 = 0; v22 < 10; v22++) {
    f0();
}
gc();
