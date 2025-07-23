function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Int32Array(209);
    const v9 = [a4,a4,a4,a4];
    function f10() {
        const o11 = {
        };
        o11.constructor.assign(o11, a4, -359);
        return f10;
    }
    const v15 = [f10];
    Reflect.apply(v9.toSorted, v8, v15);
}
new F2(797926126n);
gc();
