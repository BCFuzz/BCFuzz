function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Int32Array(209);
    const v8 = [v7,v7,v7];
    function f9() {
        const o10 = {
        };
        o10.constructor.assign(o10, a3);
    }
    const v14 = [f9];
    Reflect.apply(v8.toSorted, v7, v14);
}
const v17 = new F1(797926126n, F1);
const t13 = v17.constructor;
new t13(797926126n);
gc();
