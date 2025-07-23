const v0 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
const o1 = {
    ...v0,
};
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Int32Array(209);
    const v9 = [o1,o1,o1];
    function f10() {
        const o11 = {
        };
        o11.constructor.assign(o11, a4);
        return o11;
    }
    const v15 = [f10];
    const v16 = v9.toSorted;
    for (let i19 = -3, i20 = 10; i19 < i20; i20--) {
    }
    Reflect.apply(v16, v8, v15);
}
new F2(o1);
gc();
