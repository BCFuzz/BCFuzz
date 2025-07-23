function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 10; v3++) {
        this[3552 + v3] = v3;
    }
}
const v5 = new F1();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = new Int32Array(209);
    const v13 = [209,209,209];
    function f14() {
        const o15 = {
        };
        o15.constructor.assign(o15, a8);
        return 209;
    }
    const v19 = [f14];
    Reflect.apply(v13.toSorted, v12, v19);
}
new F6(v5);
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
