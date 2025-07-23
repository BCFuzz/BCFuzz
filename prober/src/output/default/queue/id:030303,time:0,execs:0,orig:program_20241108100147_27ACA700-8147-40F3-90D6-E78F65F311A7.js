const v0 = [];
const v2 = new Int8Array(v0, v0, v0);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 10;
        i7--, i6 < i7;
        (() => {
            for (let i13 = -2976, i14 = v3; i13 !== i14; i14--) {
            }
        })()) {
    }
}
const v23 = `
    const o26 = {
        next() {
            /\u{12345}/myvis;
            return v0;
        },
    };
`;
for (let i29 = -3, i30 = 10; i30--, i29 < i30;) {
}
const v38 = `
    switch (v2) {
        case v0:
            break;
        case Int8Array:
    }
`;
const v39 = v38.replaceAll(8, v23);
for (let i42 = -3, i43 = 10; 8 < i43; i43--) {
}
const v50 = [2.0,-4.0];
function f51(a52, a53, a54) {
    return a53;
}
const v55 = f51(v50, 8, v50);
function F56(a58, a59, a60, a61) {
    if (!new.target) { throw 'must be called with new'; }
    try { a61.constructor(v39); } catch (e) {}
}
new F56(v50, f51, v55, F56);
for (let i66 = 0, i67 = 1176; i67--, i66 < i67;) {
}
gc();
