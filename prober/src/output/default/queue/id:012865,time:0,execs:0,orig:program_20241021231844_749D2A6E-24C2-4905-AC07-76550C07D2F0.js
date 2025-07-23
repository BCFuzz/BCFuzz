function f0(a1, a2, a3, a4) {
    Object.getOwnPropertyNames("f");
    return a3;
}
for (let v8 = 0; v8 < 10; v8++) {
    f0(v8, f0, f0, f0);
}
gc();
