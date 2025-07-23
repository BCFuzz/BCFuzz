const o0 = {
};
const v2 = `
    class C3 {
        static {
            [1000000000.0,-2.0,-822.2701748699242,-5.0];
        }
    }
`;
const v6 = v2.replaceAll(8, o0);
for (let [i19, i20] = (() => {
        for (let i10 = -3, i11 = 10; i10 < i11; i11--) {
        }
        return [0, 10];
    })();
    i19 < i20;
    i20--) {
}
const v27 = [2.0,-4.0];
function f28(a29, a30, a31) {
    return a29;
}
const v32 = f28(8, o0, o0);
function F33(a35, a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    try { a38.constructor(v6); } catch (e) {}
}
new F33(v27, f28, v32, F33);
gc();
