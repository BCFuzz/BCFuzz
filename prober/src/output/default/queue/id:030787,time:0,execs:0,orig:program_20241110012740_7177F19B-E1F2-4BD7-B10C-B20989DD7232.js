class C0 {
}
function f2() {
    const v3 = `
        C0 = this;
    `;
    return v3;
}
const v6 = Symbol.toPrimitive;
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let i19 = 0, i20 = 65537; i19 < i20; i20--) {
}
for (let i29 = -3, i30 = 10; i29 < i30; i30--) {
}
Uint32Array[v6] = f2;
const v38 = `
    const o40 = {
        153970149: 1073741824,
    };
`;
const v41 = v38.split(8);
v41[1] = Uint32Array;
const v42 = [2.0,-4.0];
function f43(a44, a45, a46) {
    return a46;
}
const v47 = f43(f2, v6, f2);
function F48(a50, a51, a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    try { a53.constructor(v41); } catch (e) {}
}
new F48(v42, f43, v47, F48);
gc();
