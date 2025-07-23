const v1 = 7 === 7;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const o7 = {
        "b": v1,
        "d": false,
    };
    o7.h = o7;
    function f8() {
        return v1;
    }
    const v10 = Date(a6);
    const o11 = {
        [a6]: v10,
        "h": o7,
    };
    o11.toJSON = f8;
    JSON.stringify(o11);
}
new F3();
gc();
