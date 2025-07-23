function f0(a1, a2, a3) {
    delete arguments[a3];
    function f7(a8, a9, a10) {
        a10.valueOf = eval;
        return a9;
    }
    return f0;
}
f0();
gc();
