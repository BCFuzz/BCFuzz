const v1 = `
    const o5 = {
        set d(a3) {
            function f4() {
                return 3;
            }
        },
    };
    /\u{12345}/myvis;
`;
const v7 = v1.split(3);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return v7;
}
for (let i15 = 0, i16 = 10;
    (() => {
        const v17 = i15 < i16;
        for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
        }
        return v17;
    })();
    i16--) {
}
const v33 = f9(v7, v8, f9);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    try { a39.constructor(v7); } catch (e) {}
}
new F34(v8, f9, v33, F34);
gc();
