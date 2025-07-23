const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        return f8;
    }
    const t5 = f8.bind();
    t5();
    arguments.valueOf = f3;
    return f3;
}
v2.map(f3);
gc();
