function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
const v7 = new F0();
function f8(a9, a10, a11) {
    const v14 = ("DVVte").big();
    const v15 = this.constructor;
    v6 && v7;
    const v19 = Uint8ClampedArray.from(-15);
    for (const v20 in v14) {
        const v21 = v20.substring;
        const o23 = {
            valueOf() {
                return v20;
            },
        };
        try { v21(); } catch (e) {}
        v19.a = v20;
    }
    v15(f8, a9, v6, F0);
    const v28 = new Uint32Array(1000);
    for (const v29 in v28) {
    }
    return v28;
}
for (let v30 = 0; v30 < 5; v30++) {
    f8();
}
gc();
