for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v13 = `
    const o14 = {
        9: -1.463812464320138e+308,
    };
`;
const v15 = v13.split(8);
const v16 = [2.0,-4.0];
function f17(a18, a19, a20) {
    return a18;
}
const v21 = f17(runString, f17, -1.463812464320138e+308);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v15); } catch (e) {}
}
Object.defineProperty(F22, "constructor", { enumerable: true, value: runString });
new F22(v16, f17, v21, F22);
gc();
