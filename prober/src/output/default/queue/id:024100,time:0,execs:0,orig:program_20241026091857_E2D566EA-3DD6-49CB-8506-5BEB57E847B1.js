function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
let v4;
try { v4 = v3(); } catch (e) {}
for (let i8 = -3, i9 = 10; i9--, i8 < i9;) {
}
const v16 = `
    /\u{12345}/myvis;
    for (let i20 = 0, i21 = 10;
        i20 !== i21;
        (() => {
            let v25 = Int8Array;
            let v26 = 9;
            const v27 = v4();
            let v28 = 3;
            ({"b":v28,"buffer":v28,"byteLength":v26,...v25} = v27);
        })()) {
    }
`;
const v31 = v16.split(8);
const v32 = [2.0,-4.0];
function f33(a34, a35, a36) {
    return v16;
}
const v37 = f33(v16, F0, v3);
function F38(a40, a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    try { a43.constructor(v31); } catch (e) {}
}
new F38(v32, f33, v37, F38);
gc();
