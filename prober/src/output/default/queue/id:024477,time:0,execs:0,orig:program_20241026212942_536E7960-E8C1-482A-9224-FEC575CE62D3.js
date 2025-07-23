class C1 extends Array {
}
const v2 = new C1();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const o8 = {
        "getOwnPropertyDescriptor": Array,
    };
    const v10 = new Proxy(this, o8);
    try { v10.propertyIsEnumerable(a5); } catch (e) {}
}
new F3(v2);
gc();
