const v0 = [38083,4294967297,55343,-65536,10,0,14184];
function f2() {
    const v5 = new WeakMap();
    v5["get"](WeakMap);
    delete v0.length;
    function f9() {
        return f2;
    }
    const v10 = f9.apply(BigInt64Array, arguments);
    try { v10(f2, v0); } catch (e) {}
    return v0;
}
f2();
gc();
