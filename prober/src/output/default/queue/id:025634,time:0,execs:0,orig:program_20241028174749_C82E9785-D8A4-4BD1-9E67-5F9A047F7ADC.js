const v1 = `
    class C2 {
        static {
            [1000000000.0,-2.0,-822.2701748699242,-5.0];
        }
    }
    /\u{12345}/myvis;
`;
const v6 = v1.replaceAll(8);
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
    return v27;
}
const v32 = f28();
function F33(a35, a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    try { a38.constructor(v6); } catch (e) {}
}
new F33(v27, f28, v32, F33);
gc();
