const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
function f2() {
    const v5 = new Uint8ClampedArray(2502);
    for (const v6 in v5) {
        v5[268435441] = v6[-1];
    }
}
v1.toString = f2;
v1[1] = v1;
gc();
