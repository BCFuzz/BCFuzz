function f1() {
    return -9223372036854775808;
}
for (let v2 = 0; v2 < 10; v2++) {
    const v4 = new Uint16Array(v2);
    v4.sort(f1);
}
gc();
