function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3() {
    const v5 = [1073741824,-26526];
    const o6 = {
    };
    function f7(a8, a9) {
        Uint16Array();
        return Uint8Array;
    }
    o6.get = f7;
    const v13 = new Proxy(v5, o6);
    Reflect.construct(Uint8Array, [v13]);
    return v2;
}
v2.constructor = f3;
const v17 = v2.constructor;
try { v17(f3); } catch (e) {}
gc();
