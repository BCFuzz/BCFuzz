const v1 = new Uint16Array();
function f2() {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = new ArrayBuffer(213);
        const v11 = new Int8Array(v9);
        v11.includes(F3, a5);
    }
    function f14() {
        return F3;
    }
    Reflect[Symbol.toPrimitive] = f14;
    Reflect.construct(F3, [Reflect]);
    return Uint16Array;
}
v1.toString = f2;
const v21 = ("matchAll").toLocaleLowerCase("matchAll", Uint16Array, "matchAll").constructor;
try { v21(v1); } catch (e) {}
gc();
