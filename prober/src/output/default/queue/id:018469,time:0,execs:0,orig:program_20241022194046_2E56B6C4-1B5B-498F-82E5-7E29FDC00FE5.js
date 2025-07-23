function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Int32Array(209);
    const v8 = [F1,F1,F1];
    function f9() {
        const o10 = {
        };
        o10.constructor.assign(o10, a3, -359);
        return f9;
    }
    const v14 = [f9];
    Reflect.apply(v8.toSorted, v7, v14);
}
new F1(-359, -359);
gc();
