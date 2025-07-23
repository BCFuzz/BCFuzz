const v3 = `
    const v4 = /(?<a>.)\k<a>?/myvis;
    try {
    } finally {
        v4[-128] = -4294967295;
    }
`;
const v5 = v3.split(8);
const v6 = [1000000000000.0,0.0,-5.0,-572198.395193639,NaN];
function f7(a8, a9, a10) {
    return a10;
}
const v11 = f7(-4294967295, f7, v5);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
new F12(v6, f7, v11, F12);
gc();
