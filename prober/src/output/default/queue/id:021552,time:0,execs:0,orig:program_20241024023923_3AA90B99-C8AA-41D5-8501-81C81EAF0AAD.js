function f0() {
}
const v1 = /oa{z}/dgis;
const o2 = {
};
o2.preventExtensions = f0;
const v4 = new Proxy(v1, o2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(v9); } catch (e) {}
    Reflect.preventExtensions(v4);
}
new F5();
gc();
