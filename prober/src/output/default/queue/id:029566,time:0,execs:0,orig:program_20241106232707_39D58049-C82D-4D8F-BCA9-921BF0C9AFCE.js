for (let i2 = 0, i3 = 10;
    i2 >= i3;
    (() => {
        for (let i9 = 0, i10 = 10; i9 < i10;) {
        }
    })()) {
}
const v20 = `
    const o22 = {
        ...8.421959965099472,
    };
`;
const v23 = v20.split(8);
function f24(a25, a26, a27) {
    return f24;
}
const v28 = f24();
function F29(a31, a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    try { a34.constructor(v23); } catch (e) {}
}
Object.defineProperty(F29, "constructor", { enumerable: true, value: runString });
new F29(v28, f24, v28, F29);
gc();
