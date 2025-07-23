const v1 = new BigInt64Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5--;
    const o7 = {
        "maxByteLength": a5,
    };
    o7.h = o7;
    function f8() {
        return BigInt64Array;
    }
    const v10 = Date(a4);
    const o11 = {
        [v1]: v10,
        "h": o7,
    };
    o11.toJSON = f8;
    JSON.stringify(o11);
}
new F2(BigInt64Array, BigInt64Array);
gc();
