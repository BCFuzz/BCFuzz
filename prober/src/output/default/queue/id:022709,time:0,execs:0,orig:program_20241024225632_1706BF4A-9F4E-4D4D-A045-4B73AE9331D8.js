const v1 = (1).constructor;
const v2 = /oa{z}/dgis;
const o3 = {
};
o3.preventExtensions = v1;
const v5 = new Proxy(v2, o3);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    Reflect.preventExtensions(v5);
}
new F6();
gc();
