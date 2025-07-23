function f0() {
    return f0;
}
function f1(a2) {
    const v3 = [1000.0,2.2250738585072014e-308,3.0,-1.0,0.0,2.0];
    const v4 = `
        try {
        const t0 = 4294967296;
        t0(...v3);
        } catch (e) {}
    `;
    eval(v4);
    return v4;
}
f0[Symbol.toPrimitive] = f1;
const o11 = {
    [f0]: f0,
};
gc();
