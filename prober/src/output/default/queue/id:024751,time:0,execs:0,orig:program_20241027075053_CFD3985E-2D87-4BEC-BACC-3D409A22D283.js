for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    const v12 = new Int32Array(f10, f10, f10);
    function F14() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v16 = new F14();
    function f17(a18, a19) {
        const o23 = {
            [v16](a21, a22) {
            },
        };
        return o23;
    }
    const v24 = new Int32Array(209);
    const v27 = new Proxy(Reflect, Reflect);
    v27.isExtensible(v27);
    const v29 = [f10];
    Reflect.apply(v12.toSorted, v24, v29);
    return Int32Array;
}
try { f10(); } catch (e) {}
gc();
