function f0() {
    const v4 = Math.random();
    const v6 = ~-4294967295 && -4294967295;
    const o7 = {
        ..."2147483649",
        [v4]: f0,
    };
    return v6;
}
for (let v8 = 0; v8 < 5; v8++) {
    f0();
    const v12 = new Uint32Array(1000);
    for (const v13 in v12) {
    }
}
gc();
