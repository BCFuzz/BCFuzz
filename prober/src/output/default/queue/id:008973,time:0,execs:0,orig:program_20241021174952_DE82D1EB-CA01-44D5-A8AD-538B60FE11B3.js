function f0() {
    return f0;
}
class C1 extends f0 {
}
C1.d = C1;
for (const v2 in C1) {
    const v3 = C1[v2];
    try { v3.join(); } catch (e) {}
}
for (let v5 = 0; v5 < 1225; v5++) {
}
gc();
