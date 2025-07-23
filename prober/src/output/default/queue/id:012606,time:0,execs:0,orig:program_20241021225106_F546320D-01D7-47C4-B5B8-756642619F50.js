function f0(a1, a2, a3) {
    for (let v6 = 0; v6 < 10; v6++) {
        v6 in arguments;
    }
    function f8(a9, a10, a11) {
        a11.g = eval;
        return f0;
    }
    return f0;
}
f0(f0, f0, f0);
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
