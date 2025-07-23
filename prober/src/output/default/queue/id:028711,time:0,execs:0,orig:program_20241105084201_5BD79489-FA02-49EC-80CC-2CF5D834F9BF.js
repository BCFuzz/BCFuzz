class C0 {
}
const v1 = new C0();
const v2 = `
`;
const v3 = v2.toWellFormed();
const v6 = new BigUint64Array(586);
for (const v7 of v6) {
    const v8 = [-1000000.0,-1.3627035914914707e+308,-2.220446049250313e-16,0.3341757671040231,-1.0818939815292406e+307,NaN];
    const o9 = {
        __proto__: v8,
    };
    function f10() {
        o9.__proto__ = v1;
        o9[v3] /= arguments;
        return arguments;
    }
    f10();
}
gc();
