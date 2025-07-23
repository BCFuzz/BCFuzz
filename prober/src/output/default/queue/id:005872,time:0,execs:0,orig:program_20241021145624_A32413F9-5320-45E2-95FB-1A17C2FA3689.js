function f0() {
    return f0;
}
f0();
for (let v2 = 0; v2 < 250; v2++) {
    function f4() {
        return 3826;
    }
    const v6 = new Int16Array(3826, 3826, v2);
    const o7 = {
        "set": f4,
    };
    const v9 = new Proxy(v6, o7);
    v9.c = v9;
    v9[10] = 3826;
}
gc();
