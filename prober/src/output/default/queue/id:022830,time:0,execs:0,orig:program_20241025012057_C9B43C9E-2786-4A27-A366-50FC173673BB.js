const v1 = new Int8Array(Int8Array);
function f2() {
    const v4 = v1[1757];
    function f5() {
        return f2;
    }
    const v6 = f5.apply(v4, arguments);
    try { v6(v6); } catch (e) {}
    return arguments;
}
f2();
gc();
