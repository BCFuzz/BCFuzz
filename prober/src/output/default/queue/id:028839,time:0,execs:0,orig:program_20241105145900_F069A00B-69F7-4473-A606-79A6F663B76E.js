const v1 = createGlobalObject();
const v4 = URIError().__proto__;
v4[1] = v4;
const o5 = {
};
const v7 = new Proxy(v4, o5);
v7.__proto__ = v1;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
const v29 = Array(v4);
const v30 = v29.concat(v29);
const v31 = createGlobalObject();
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    class C38 extends ([a35,a35]).constructor {
    }
    new C38();
    Object.defineProperty(v31.__proto__, 16, { configurable: true, enumerable: true, value: v30 });
}
new F32(v30, URIError);
gc();
