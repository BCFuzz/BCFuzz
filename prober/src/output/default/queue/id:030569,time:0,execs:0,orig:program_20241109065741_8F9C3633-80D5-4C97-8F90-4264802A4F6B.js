const v2 = `
    const o7 = {
        toString(a4, a5) {
            return /\u{12345}/myvis;
        },
    };
    function* f8(a9, a10, a11) {
        yield* 268435440;
        return a10;
    }
`;
const v12 = v2.split("d");
const v13 = [2.0,-4.0];
function f14(a15, a16, a17) {
    return f14;
}
const v18 = f14("d", "d", v13);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    try { a24.constructor(v12); } catch (e) {}
}
new F19(v13, f14, v18, F19);
gc();
