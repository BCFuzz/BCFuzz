const v1 = `
    /\u{12345}/myvis;
    const v3 = [2.0,0.07978209618354537,9.395266797009509,-2.220446049250313e-16,-112.03728000939498];
    const o4 = {
        [8]: v3,
    };
`;
const v5 = v1.split(8);
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return f7;
}
const v11 = f7(v1, 8, v6);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
new F12(v6, f7, v11, F12);
gc();
