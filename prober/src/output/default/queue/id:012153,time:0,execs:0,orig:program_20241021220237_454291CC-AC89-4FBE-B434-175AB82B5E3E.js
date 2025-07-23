function f0(a1, a2, a3) {
    const t1 = ("-789426228").constructor;
    const v6 = new t1();
    v6[Symbol.toPrimitive] = f0;
    return v6;
}
const v9 = f0();
try { v9.normalize(); } catch (e) {}
gc();
