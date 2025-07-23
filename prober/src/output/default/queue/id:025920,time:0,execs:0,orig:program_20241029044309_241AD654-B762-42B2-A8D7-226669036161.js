const v0 = [1000000000.0,1.7976931348623157e+308,9.394768048362735,-68.71038919283649];
const v2 = `
    const o4 = {
        [v0]: -882679842,
    };
`;
const v5 = v2.split(8);
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return v6;
}
const v11 = f7();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
new F12(v6, f7, v11, F12);
gc();
