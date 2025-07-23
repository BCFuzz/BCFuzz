function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Int32Array(209);
    const v8 = [v7,v7];
    function f9() {
        const o10 = {
        };
        o10.g = o10;
        const v11 = o10.constructor;
        v11.freeze(o10);
        v11.assign(o10, a3);
        return a3;
    }
    const v15 = [f9];
    Reflect.apply(v8.toSorted, v7, v15);
}
const v18 = new F1(F1, 0);
const t17 = v18.constructor;
new t17(0);
gc();
