function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o5 = {
        "b": false,
        "d": false,
    };
    o5.h = o5;
    function f6() {
        return false;
    }
    const v8 = Date(a4);
    const o9 = {
        [a4]: v8,
        "h": o5,
    };
    o9.toJSON = f6;
    JSON.stringify(o9);
}
new F1();
gc();
