function f0() {
    let v1 = 127n;
    v1 **= v1;
    return v1;
}
for (let v2 = 0; v2 < 10; v2++) {
    f0();
}
gc();
