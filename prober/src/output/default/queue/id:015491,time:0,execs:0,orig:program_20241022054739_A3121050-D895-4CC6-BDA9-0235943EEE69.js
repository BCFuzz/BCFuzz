function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -2004357941;
}
const v3 = new F0();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new Int32Array(209);
    const v11 = [F4,F4];
    function f12() {
        const o13 = {
        };
        o13.constructor.assign(o13, a6);
        return f12;
    }
    const v17 = [f12];
    Reflect.apply(v11.toSorted, v10, v17);
}
new F4(v3);
gc();
