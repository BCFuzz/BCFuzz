const v1 = Array(Array);
const v2 = v1.concat(v1, Array, v1);
const v4 = createGlobalObject();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    class C11 extends ([v1,v1,v1]).constructor {
    }
    new C11();
    Object.defineProperty(v4.__proto__, 16, { configurable: true, enumerable: true, value: v2 });
}
new F5(Array, createGlobalObject);
gc();
