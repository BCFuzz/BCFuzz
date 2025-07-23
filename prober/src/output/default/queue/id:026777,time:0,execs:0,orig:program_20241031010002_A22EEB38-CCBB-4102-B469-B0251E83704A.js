const v1 = ("EPSILON").small("EPSILON");
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        return a9;
    }
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i18 = 0, i19 = 10; i18 !== i19; i19--) {
            v1[i18] = f8;
        }
        const v28 = new Uint8Array(3129);
        for (const v29 in v28) {
        }
    }
    new F10();
    for (let i33 = 0, i34 = 10; i34--, i33 < i34;) {
    }
}
new F2(v1, v1, v1, F2);
gc();
