function f0() {
    return f0;
}
class C1 extends f0 {
}
for (const v2 in C1) {
    C1[v2];
}
for (let v4 = 0; v4 < 1225; v4++) {
}
gc();
