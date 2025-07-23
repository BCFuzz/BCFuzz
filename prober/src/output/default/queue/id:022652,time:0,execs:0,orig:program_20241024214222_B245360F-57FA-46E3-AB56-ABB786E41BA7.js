function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function f3() {
    return f3;
}
class C4 extends f3 {
}
const v5 = new C4();
const v7 = new Uint8Array(v5);
for (const v8 in v7) {
}
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
const o18 = {
    p(a15, a16, a17) {
        return F9;
    },
};
for (let i = 0; i < 5; i++) {
    function f19() {
        const v21 = new Int16Array(o18, f19);
        const v23 = v21["toSorted"]();
        v23[3] = v23;
        return arguments;
    }
    f19();
    const v28 = new Uint8Array(209);
    class C29 {
    }
    for (const v30 in v28) {
        for (let v31 = 0; v31 < 5; v31++) {
        }
    }
}
gc();
