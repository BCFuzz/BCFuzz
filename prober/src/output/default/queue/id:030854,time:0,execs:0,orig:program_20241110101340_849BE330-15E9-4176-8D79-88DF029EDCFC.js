const v2 = URIError();
const v3 = v2.__proto__;
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new BigInt64Array(v2);
    v10.constructor = v3;
    v10.subarray();
}
new F4();
gc();
