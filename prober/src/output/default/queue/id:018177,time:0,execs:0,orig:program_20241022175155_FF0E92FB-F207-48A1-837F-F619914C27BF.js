function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const o8 = {
    [v2](a5, a6, a7) {
    },
    "g": undefined,
};
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = new Uint8Array(209);
    const v16 = [v15,v15,v15,v15,v15];
    function f17() {
        const o18 = {
        };
        o18.constructor.assign(o18, a11);
        return 209;
    }
    const v22 = [f17];
    Reflect.apply(v16.toSorted, v15, v22);
}
const v25 = new F9(undefined, undefined);
const t25 = v25.constructor;
new t25(o8);
gc();
