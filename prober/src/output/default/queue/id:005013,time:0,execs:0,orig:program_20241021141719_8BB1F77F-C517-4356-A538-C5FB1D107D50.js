function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return a3;
    }
    const v8 = f7.apply(Float64Array, a3, F1);
    const v9 = new Float64Array();
    v9.slice(v8);
    for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
    }
}
new F1();
gc();
