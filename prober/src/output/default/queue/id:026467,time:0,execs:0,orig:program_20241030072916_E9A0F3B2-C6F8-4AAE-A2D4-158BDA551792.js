const v2 = `
    async function f3(a4, a5, a6) {
        return v2;
    }
`;
const v7 = v2.split(3);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return v7;
}
const v13 = f9();
v13.unshift("0");
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v7); } catch (e) {}
}
new F15(v8, f9, v13, F15);
gc();
