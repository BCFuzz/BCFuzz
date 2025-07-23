function f1() {
    function f3() {
        return f1;
    }
    const v4 = f3.apply(268435456, arguments);
    try { v4(); } catch (e) {}
    return 268435456;
}
f1();
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
