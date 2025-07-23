function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F0 {
}
const o23 = {
    toString(a7) {
        function f8(a9) {
            new C5();
            return arguments;
        }
        f8(f8);
        for (let i15 = 0, i16 = 10; i15 !== i16; i16--) {
        }
        return a7;
    },
};
function f24(a25, a26, a27, a28) {
    a25 >> a25;
    return f24;
}
for (let v30 = 0; v30 < 5; v30++) {
    const t22 = f24(v30, v30, v30, F0);
    t22(o23);
}
gc();
