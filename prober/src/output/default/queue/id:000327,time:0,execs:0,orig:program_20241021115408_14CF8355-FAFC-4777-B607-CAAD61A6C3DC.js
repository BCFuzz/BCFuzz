function f2(a3, a4, a5, a6) {
    const o11 = {
        valueOf(a8, a9, a10) {
            this[a9] = a5;
            return this;
        },
    };
    return o11;
}
for (let v12 = 0; v12 < 100; v12++) {
    f2(3, 256, 3);
}
gc();
