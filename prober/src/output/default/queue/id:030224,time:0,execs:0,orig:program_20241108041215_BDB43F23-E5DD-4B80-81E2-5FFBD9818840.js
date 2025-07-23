for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
}
for (let i32 = 0, i33 = 10; i32 >= i33;) {
}
const v41 = `
    const o45 = {
        ...8.421959965099472,
        next() {
            return /\u{12345}/myvis;
        },
    };
`;
const v46 = v41.split(8);
function f47(a48, a49, a50) {
    return a48;
}
const v51 = f47(v41, 8, v41);
function F52(a54, a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    try { a57.constructor(v46); } catch (e) {}
}
Object.defineProperty(F52, "constructor", { enumerable: true, value: runString });
new F52(v51, f47, v51, F52);
gc();
