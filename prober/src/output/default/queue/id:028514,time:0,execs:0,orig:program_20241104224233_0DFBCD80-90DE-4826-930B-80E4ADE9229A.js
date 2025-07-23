class C0 {
}
const v1 = new C0();
const v2 = `
    /\u{12345}/myvis;
`;
const v4 = v2.toWellFormed();
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
const v17 = new BigUint64Array(586);
for (const v18 of v17) {
    const v19 = [-1000000.0,-1.3627035914914707e+308,-2.220446049250313e-16,0.3341757671040231,-1.0818939815292406e+307,NaN];
    const o20 = {
        __proto__: v19,
    };
    function f21() {
        o20.__proto__ = v1;
        o20[v4] /= arguments;
        return BigUint64Array;
    }
    f21();
}
gc();
