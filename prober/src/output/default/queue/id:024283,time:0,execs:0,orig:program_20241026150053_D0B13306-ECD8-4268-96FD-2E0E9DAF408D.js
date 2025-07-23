const v2 = URIError(URIError).__proto__;
class C3 {
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v2 instanceof C3;
}
const v10 = new F4(F4, URIError, F4);
const v11 = new F4(C3, URIError, URIError);
const t9 = v11.constructor;
new t9(v10, v2, F4);
gc();
