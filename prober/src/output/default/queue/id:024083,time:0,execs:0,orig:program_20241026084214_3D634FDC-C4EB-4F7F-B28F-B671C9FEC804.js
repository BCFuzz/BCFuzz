function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 10; v2++) {
        this["p" + v2] = v2;
    }
}
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = new Int32Array(209);
    const v13 = [v12,v12];
    function f14() {
        const o15 = {
        };
        return o15.constructor.assign(o15, a8);
    }
    const v19 = [f14];
    Reflect.apply(v13.toSorted, v12, v19);
}
new F6();
new F6(v5);
gc();
