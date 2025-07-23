for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = `
    const o14 = {
        "maxByteLength": 2329388498,
    };
`;
const v15 = v12.split(8);
const v16 = [2.0,-4.0];
function f17(a18, a19, a20) {
    return v12;
}
const v21 = f17();
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(v15); } catch (e) {}
}
Object.defineProperty(F22, "constructor", { enumerable: true, value: runString });
new F22(v16, f17, v21, F22);
gc();
