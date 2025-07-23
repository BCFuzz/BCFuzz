const v1 = createGlobalObject();
const v3 = v1.AggregateError.prototype;
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        new Uint8Array(v3);
    }
    Reflect.construct(F10, [v3,v3,v3,v3,v3]);
}
new F4(v1, createGlobalObject, F4, F4);
gc();
