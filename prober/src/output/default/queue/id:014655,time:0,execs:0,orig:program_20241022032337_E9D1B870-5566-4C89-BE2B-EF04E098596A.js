function f0() {
    for (let v1 = 0; v1 < 10; v1++) {
    }
    const o2 = {
    };
    function f3() {
        return createGlobalObject().Atomics.compareExchange();
    }
    try { f3(); } catch (e) {}
    return o2;
}
const v9 = f0();
const v10 = f0();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = [1073741824,-26526];
    const o16 = {
    };
    const v18 = new Proxy(v15, o16);
    v18.with(f0).every(f0);
}
const v21 = new F11(f0, v9);
const v22 = v21.constructor;
new v22(v9, v22, v22, v21, v10);
gc();
