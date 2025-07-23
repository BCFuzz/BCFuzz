const o1 = {
    "g": undefined,
};
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Uint8Array(209);
    const v9 = [F2,F2,F2];
    function f10() {
        const o11 = {
        };
        o11.constructor.assign(o11, a4);
        return o11;
    }
    delete o1.g;
    const v16 = [f10];
    Reflect.apply(v9.toSorted, v8, v16);
}
const v19 = new F2();
const t18 = v19.constructor;
new t18(o1);
gc();
