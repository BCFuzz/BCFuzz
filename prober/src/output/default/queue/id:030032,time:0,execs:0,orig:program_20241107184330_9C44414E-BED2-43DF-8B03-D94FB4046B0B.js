const v0 = [-8.509857005037356,7.944828284455271e+307,0.0,1000000.0,-994334.5612093256];
for (let i4 = 0, i5 = 10 + 10; i5--, i5;) {
}
const v11 = `
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        const v17 = RegExp(a14);
        /\u{12345}/myvis;
        eval(v17 + v0);
    }
    new F12(F12);
    for (let i25 = 0, i26 = 10000; i26--;) {
    }
`;
eval(v11);
gc();
