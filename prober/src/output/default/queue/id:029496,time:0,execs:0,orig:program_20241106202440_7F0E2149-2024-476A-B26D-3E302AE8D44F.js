for (let i2 = 0, i3 = 65537; i3--, i3;) {
}
const v11 = `
    const o12 = {
    };
    switch (o12) {
        case -2080884642n:
            break;
    }
`;
const v14 = v11.split(8);
const v15 = [Infinity,1000.0,1000000000.0,1.6309964355215492e+307,0.9729672985556417,2.0,-1e-15,-1000000000.0,-1.6448676152926758e+308,2.7592928817436366];
function f16(a17, a18, a19) {
    return a19;
}
const v20 = f16(v11, 65537, f16);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    try { a26.constructor(v14); } catch (e) {}
}
Object.defineProperty(F21, "constructor", { enumerable: true, value: runString });
new F21(v15, f16, v20, F21);
gc();
