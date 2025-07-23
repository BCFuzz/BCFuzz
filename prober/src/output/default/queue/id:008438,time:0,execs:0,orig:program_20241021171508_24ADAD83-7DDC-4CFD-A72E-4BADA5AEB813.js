function f2(a3, a4) {
    try { a3.padEnd(); } catch (e) {}
    function f6(a7, a8) {
        return a4;
    }
    a3[Symbol.toPrimitive] = f6;
    return a4;
}
const t8 = f2("m", f2);
t8("4");
f2(this);
gc();
