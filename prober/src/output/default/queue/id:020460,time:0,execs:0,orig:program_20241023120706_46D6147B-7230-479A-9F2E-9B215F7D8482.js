function f0() {
    let v1 = -4294967295;
    const v2 = v1--;
    const v4 = (v2 - v2).toString();
    v4.length = v4;
    return f0;
}
for (let v5 = 0; v5 < 10; v5++) {
    f0();
}
gc();
