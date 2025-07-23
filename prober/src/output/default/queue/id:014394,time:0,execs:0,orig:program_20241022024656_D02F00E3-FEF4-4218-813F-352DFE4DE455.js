class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const o5 = {
    };
    return o5;
}
const o6 = {
    "getOwnPropertyDescriptor": f2,
};
const v8 = new Proxy(v1, o6);
try { v8.propertyIsEnumerable(); } catch (e) {}
gc();
