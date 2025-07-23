const v2 = new Int8Array();
const v3 = `
    const o6 = {
        next() {
            /\u{12345}/myvis;
            return v2;
        },
    };
`;
const v8 = `
    switch (-268435456n) {
    }
`;
const v9 = v8.replaceAll(8, v3);
for (let i12 = -3, i13 = 10; 8 < i13; i13--) {
}
const v20 = [2.0,-4.0];
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v9); } catch (e) {}
}
new F22(v20, v2, undefined, F22);
for (let i32 = 0, i33 = 1176; i33--, i32 < i33;) {
}
gc();
