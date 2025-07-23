const v1 = Array();
const v2 = v1.concat();
const v4 = createGlobalObject();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Reflect.construct(Array, [Array,Array], URIError);
    Object.defineProperty(v4.__proto__, 16, { configurable: true, enumerable: true, value: v2 });
}
new F5(v1, createGlobalObject);
gc();
