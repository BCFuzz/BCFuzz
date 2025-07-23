function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0(F0, F0, F0, F0);
function f7() {
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F9(F0, F0, F9);
    Object.defineProperty(v14, "undefined", { value: v6 });
    for (let v15 = 0; v15 < 1000; v15++) {
    }
    "undefined" in v14;
    return v14;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f7);
gc();
