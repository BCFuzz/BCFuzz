const v2 = new BigInt64Array(1000);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6--;
    const o8 = {
        "maxByteLength": a6,
    };
    o8.h = o8;
    function f9() {
        return F3;
    }
    const v11 = Date();
    const o12 = {
        [v2]: v11,
        "h": o8,
    };
    o12.toJSON = f9;
    JSON.stringify(o12);
}
new F3();
gc();
