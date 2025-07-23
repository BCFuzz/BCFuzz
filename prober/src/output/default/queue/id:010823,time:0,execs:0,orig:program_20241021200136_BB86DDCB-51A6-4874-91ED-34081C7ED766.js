function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    new Uint16Array(268435456);
}
const v7 = new F0();
new F0();
const v9 = new F0();
function f10(a11, a12, a13, a14) {
    const o26 = {
        toString(a16, a17) {
            const v18 = `
                function* f19(a20, a21, a22, a23) {
                }
            `;
            eval(v18);
            return v18;
        },
    };
    o26.toString();
}
f10.call(v7, v7, F0, v9, f10);
gc();
