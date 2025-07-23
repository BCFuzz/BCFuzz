const v2 = `
    /\u{12345}/myvis;
    while (0 < 1) {
        [0.08837269930049674,1000000000.0,-1e-15,0.21689341508577475,8.837226102123647e+306];
    }
`;
const v8 = v2.split(8);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
    return a13;
}
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v8); } catch (e) {}
}
new F14(v9, f10, BigInt64Array, F14);
gc();
