const v2 = new Int16Array();
const v3 = v2.toReversed();
function f4() {
    let v5 = 1880;
    const v6 = v5--;
    for (let i9 = 0, i10 = 10;
        i10--, i9 < i10;
        (() => {
            for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
            }
        })()) {
        const v29 = createGlobalObject().Atomics;
        try { v29.add(v3, v6, -2147483648); } catch (e) {}
    }
    const v33 = new Uint8Array(3129);
    for (const v34 in v33) {
    }
    return v3;
}
f4();
gc();
