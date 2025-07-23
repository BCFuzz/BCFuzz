function f0(a1, a2, a3, a4) {
    return Object.getOwnPropertyNames("f");
}
for (let v8 = 0; v8 < 10; v8++) {
    f0(f0, v8, v8, f0);
}
gc();
