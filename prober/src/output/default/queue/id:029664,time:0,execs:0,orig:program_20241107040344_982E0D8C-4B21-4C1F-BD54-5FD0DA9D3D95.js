for (let i3 = 0, i4 = 65537; i4--, i4;) {
}
const v12 = `
    const o13 = {
    };
    switch (o13) {
        case 4294967295:
            break;
        case -2080884642n:
            break;
    }
`;
const v15 = v12.split(8);
const v16 = [Infinity,1000.0,1000000000.0,1.6309964355215492e+307,0.9729672985556417,2.0,-1e-15,-1000000000.0,-1.6448676152926758e+308,2.7592928817436366];
function f17(a18, a19, a20) {
    return a20;
}
const v21 = f17(v12, f17, v15);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v15); } catch (e) {}
}
Object.defineProperty(F22, "constructor", { enumerable: true, value: runString });
new F22(v16, f17, v21, F22);
gc();
