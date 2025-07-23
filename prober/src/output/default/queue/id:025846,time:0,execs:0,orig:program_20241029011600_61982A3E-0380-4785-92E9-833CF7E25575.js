function f0(a1) {
    const v4 = Symbol.toPrimitive;
    const v5 = Symbol.for(a1);
    const v6 = new WeakSet();
    const t4 = v6.add(v4).constructor;
    const v9 = new t4();
    v9.add(v5);
    return v5;
}
try { f0(f0); } catch (e) {}
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
