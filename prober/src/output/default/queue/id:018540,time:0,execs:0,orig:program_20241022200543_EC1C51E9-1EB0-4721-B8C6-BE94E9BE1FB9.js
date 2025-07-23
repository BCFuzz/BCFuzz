const v0 = /oa{z}/dgis;
const o1 = {
};
const v3 = new Proxy(v0, o1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    Reflect.preventExtensions(v3);
}
new F4(v3, o1);
gc();
