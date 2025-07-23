const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    function f4(a5, a6) {
        a5.name;
        a5.g = a5;
        return a5;
    }
    const v8 = f4(f4);
    const v10 = new Map();
    v10.set(f4, Map);
    v10.forEach(v8);
}
gc();
