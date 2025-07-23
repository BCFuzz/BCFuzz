function f0(a1) {
    return a1;
}
class C2 extends f0 {
    #b;
}
for (let v3 = 0; v3 < 5; v3++) {
    const v4 = new C2();
    const t8 = v4.constructor;
    new t8();
    const v7 = v4.constructor;
    try { new v7(C2); } catch (e) {}
}
gc();
