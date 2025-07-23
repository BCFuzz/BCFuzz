const v0 = /oa{z}/dgis;
const o1 = {
};
const v3 = new Proxy(v0, o1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(); } catch (e) {}
    Reflect.preventExtensions(v3);
}
new F4(v0, v3);
gc();
