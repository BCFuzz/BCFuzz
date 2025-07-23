let v0 = Float64Array;
let v1 = 8;
for (let i4 = 10, i5 = 10;
    -13369 !== i5;
    (() => {
        i5--;
        for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        }
    })()) {
}
for (let i24 = 0, i25 = 7; i24 < i25; i25--) {
}
let v32 = "source";
[v0,v1,v32] = v32;
const v33 = `
    class C34 {
        n(a36, a37) {
            for (let v38 = 0; v38 < 5; v38++) {
            }
        }
        constructor(a40) {
            /\u{12345}/myvis;
        }
    }
`;
const v42 = v33.split(v1);
const v43 = [2.0,-4.0];
function f44(a45, a46, a47) {
    for (let i50 = 0, i51 = 10; i50 < i51; i51--) {
    }
    return a45;
}
const v58 = f44();
function F59(a61, a62, a63, a64) {
    if (!new.target) { throw 'must be called with new'; }
    try { a64.constructor(v42); } catch (e) {}
}
new F59(v43, f44, v58, F59);
gc();
