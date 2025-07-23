const v0 = [536870889,65536,2,-4029,-637629602];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
        "maxByteLength": a5,
    };
    o6.toJSON = o6;
    function f7() {
        return null;
    }
    const v9 = Date();
    const o10 = {
        [this]: v9,
        "h": o6,
    };
    o10.toJSON = f7;
    JSON.stringify(o10);
}
const v13 = new F2(null, v0);
const t19 = v13.constructor;
new t19(v0, null);
gc();
