const v1 = `
    const o4 = {
        set d(a3) {
        },
    };
`;
const v5 = v1.split(3);
const v6 = [-1.0,-4.0,1.7976931348623157e+308,0.43094772307337625];
function f7(a8, a9, a10) {
    return a8;
}
for (let i13 = 0, i14 = 10;
    (() => {
        const v15 = i13 < i14;
        for (let i18 = 0, i19 = 10; i18 < i19; --i19) {
        }
        return v15;
    })();
    i14--) {
}
const v31 = f7(f7, f7, 3);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    try { a37.constructor(v5); } catch (e) {}
}
new F32(v6, f7, v31, F32);
gc();
