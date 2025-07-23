const v2 = URIError().__proto__;
v2.message = v2;
const v4 = new Proxy(v2, v2);
const v5 = v4.message;
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = new a9(a12);
    v13.constructor = a12;
    v13.slice(URIError, a10, Float32Array);
}
new F7(Float32Array, v5, F7, v5);
for (let i18 = -3, i19 = 10; i18 < i19; i19--) {
}
gc();
