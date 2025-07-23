for (let v0 = 0; v0 < 10; v0++) {
    const v3 = new Int8Array(42, v0, 42);
    for (let i6 = 10, i7 = 10; -13369 < i7; i7--) {
    }
    const o14 = {
    };
    const v16 = new Proxy(v3, o14);
    42 in v16;
    v0++;
    v0--;
}
gc();
