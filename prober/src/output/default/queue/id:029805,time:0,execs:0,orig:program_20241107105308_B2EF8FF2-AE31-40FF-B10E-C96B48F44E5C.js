for (let i3 = 0, i4 = 65537; i4--, i4;) {
}
const v12 = `
    const o13 = {
    };
    switch (o13) {
        case 4294967295:
            break;
        case -2080884642n:
            /\u{12345}/myvis;
            break;
    }
`;
const v16 = v12.split(8);
const v17 = [Infinity,1000.0,1000000000.0,1.6309964355215492e+307,0.9729672985556417,2.0,-1e-15,-1000000000.0,-1.6448676152926758e+308,2.7592928817436366];
function f18(a19, a20, a21) {
    return v16;
}
const v22 = f18(v17, 8, f18);
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    try { a28.constructor(v16); } catch (e) {}
}
Object.defineProperty(F23, "constructor", { enumerable: true, value: runString });
new F23(v17, f18, v22, F23);
gc();
