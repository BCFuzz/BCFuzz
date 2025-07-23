function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Float64Array(1024);
    for (const v5 in v4) {
        v4.buffer.transfer();
    }
}
new F0();
gc();
