const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    arguments[Symbol.toStringTag] = a5;
    function F11(a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F11();
    const o17 = {
    };
    for (let v18 = 0; v18 < 5; v18++) {
        eval(a6);
    }
    return a5;
}
v2.map(f3);
gc();
