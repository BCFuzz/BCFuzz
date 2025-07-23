const v0 = [-18649,268435441,1,-6,-9223372036854775807,-20939,-268435456,13505,-8];
const v1 = `
    function f2() {
        return f2;
    }
    const v3 = f2();
    const v4 = v0[-2];
    let v5;
    try { v5 = v4(); } catch (e) {}
    v3(v5 &= f2);
`;
eval(v1);
gc();
