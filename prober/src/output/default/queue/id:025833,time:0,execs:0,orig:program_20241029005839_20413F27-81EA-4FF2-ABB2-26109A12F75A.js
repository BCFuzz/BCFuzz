function f2(a3, a4) {
    const v5 = a4 + a4;
    v5[43] = v5;
    return a4;
}
f2(Uint32Array, Uint32Array);
f2(462505212n, 462505212n);
for (let v8 = 0; v8 < 10; v8++) {
    f2();
}
gc();
