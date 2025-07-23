function f0() {
    for (let v1 = 0; v1 < 100; v1++) {
    }
    const v3 = new BigInt64Array(f0);
    for (let v4 = 0; v4 < 5; v4++) {
        try { new Float64Array(v3); } catch (e) {}
    }
    return f0;
}
f0();
f0();
gc();
