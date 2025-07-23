const v0 = [21318,3,128,-9223372036854775808];
const v1 = [7,54235,5,-65535,9682,-497048613,2072802657,-2147483647];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
    };
    o6.toJSON = o6;
    function f7() {
        return v0;
    }
    const v9 = Date();
    const o10 = {
        [a5]: v9,
        "h": o6,
    };
    o10.toJSON = f7;
    JSON.stringify(o10);
}
new F2(v1, v0);
gc();
