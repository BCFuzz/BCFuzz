function f0() {
    let v1 = -4294967295;
    v1--;
    return v1.toString();
}
for (let v4 = 0; v4 < 10; v4++) {
    f0();
}
gc();
