const v1 = [21318,3,128,-9223372036854775808];
v1.e = v1;
const v2 = [7,54235,5,-65535,9682,-497048613,2072802657,-2147483647];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const o7 = {
        "maxByteLength": a6,
    };
    o7.toJSON = o7;
    function f9() {
        return Math;
    }
    function f10(a11, a12) {
        delete v1.e;
        return this;
    }
    new Promise(f10);
    const v16 = Date();
    const o17 = {
        [Math]: v16,
        "h": o7,
    };
    o17.toJSON = f9;
    JSON.stringify(o17);
}
new F3(v2, v1);
gc();
