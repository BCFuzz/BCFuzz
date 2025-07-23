const v1 = new Uint8Array();
const v4 = `
    if ("hasInstance") {
        [] = v1;
    }
`;
const v5 = v4.split(8);
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
}
const v11 = f7();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
new F12(v6, f7, v11, F12);
gc();
