function f2(a3, a4) {
    a4 * a4;
    a4 >> a4;
    return a4;
}
f2(8n, 65535n);
for (let v8 = 0; v8 < 100; v8++) {
    f2();
}
gc();
