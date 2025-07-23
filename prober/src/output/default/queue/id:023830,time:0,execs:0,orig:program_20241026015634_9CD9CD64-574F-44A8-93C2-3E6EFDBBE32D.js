const v1 = 4294967296n * 4294967296n;
const v2 = v1 % 4294967296n;
const v4 = (1).constructor;
const v5 = /oa{z}/dgis;
const o6 = {
};
o6.preventExtensions = v4;
const v8 = new Proxy(v5, o6);
function f9(a10) {
    function F11(a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C14 extends F11 {
    }
    const v15 = new C14();
    function f16() {
        return v2;
    }
    Object.defineProperty(v15, "constructor", { writable: true, configurable: true, enumerable: true, value: f16 });
    return v15.constructor();
}
v8.valueOf = f9;
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    Reflect.preventExtensions(v8);
}
new F18(v2, v1);
gc();
