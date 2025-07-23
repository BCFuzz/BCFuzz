const v2 = `
    function* f3(a4, a5, a6) {
        yield* 268435440;
        return v2;
    }
`;
const v7 = v2.split("d");
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return "d";
}
const v13 = f9(f9, 268435440, v2);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
