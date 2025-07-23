const v0 = [21318,3,128,-9223372036854775808];
const v1 = [7,54235,5,-65535,9682,-497048613,2072802657,-2147483647];
const v2 = [1073741824,1673162269,65537,-9223372036854775807,269524779,2147483649,-249640129,28715];
v0[-49640] **= -1024;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a7.e = -49640;
    const o9 = {
        "maxByteLength": a8,
    };
    o9.toJSON = o9;
    function f11() {
        return v1;
    }
    const v13 = Date();
    const o14 = {
        [Math]: v13,
        "h": o9,
    };
    o14.toJSON = f11;
    JSON.stringify(o14);
}
new F5(v0);
new F5(v1, v0);
new F5(v2, v1);
gc();
