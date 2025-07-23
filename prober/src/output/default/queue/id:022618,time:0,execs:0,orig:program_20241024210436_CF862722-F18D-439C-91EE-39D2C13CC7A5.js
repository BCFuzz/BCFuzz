function f0() {
    const v3 = new Float32Array(3923);
    for (const v4 in v3) {
    }
    let v5 = -12n;
    const v6 = v5++;
    v6 * v6;
    const v8 = v5--;
    function f9(a10, a11, a12, a13) {
        return v5 === v8;
    }
    return f0;
}
f0();
gc();
