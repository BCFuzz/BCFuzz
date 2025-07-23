function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
function f4(a5) {
    const o20 = {
        [a5]: v2,
        n(a7, a8, a9) {
            const v12 = new Uint8Array(3129);
            for (const v13 in v12) {
                typeof this === "symbol";
                let v17 = -37678;
                ({"g":v17,} = this);
                for (let v19 = 0; v19 < 5; v19++) {
                }
            }
            return F0;
        },
    };
    o20.n();
    return F0;
}
f4(v3);
f4();
gc();
