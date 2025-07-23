for (let v0 = 0; v0 < 250; v0++) {
    function f2() {
        return arguments;
    }
    let v4;
    try { v4 = f2.apply(v0, Symbol); } catch (e) {}
    eval(v4.callee());
}
gc();
