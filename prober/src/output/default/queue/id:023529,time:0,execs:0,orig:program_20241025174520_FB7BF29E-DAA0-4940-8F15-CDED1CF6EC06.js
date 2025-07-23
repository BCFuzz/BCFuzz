const v0 = [21318,3,128,-9223372036854775808];
const v1 = [7,54235,5,-65535,9682,-497048613,2072802657,-2147483647];
v0[9007199254740990] **= -1024;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6.e = 9007199254740990;
    const o8 = {
        "maxByteLength": a7,
    };
    o8.toJSON = o8;
    function f9() {
        return v1;
    }
    const o10 = {
        "h": o8,
    };
    o10.toJSON = f9;
    JSON.stringify(o10);
}
new F4(v0);
new F4(v1, v0);
gc();
