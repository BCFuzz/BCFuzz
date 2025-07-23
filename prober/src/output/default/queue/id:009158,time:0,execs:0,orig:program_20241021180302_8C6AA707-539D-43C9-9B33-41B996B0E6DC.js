const v2 = new Float64Array(257);
for (const v3 of v2) {
    const v4 = [v3];
    const v5 = [v3,v3,v3];
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = v5;
    }
    const v12 = new F6(v4, F6, v4, v2);
    const v13 = new F6(v5, v12, v2, v12);
    v4.fill(v13, -26413, v12.h);
}
gc();
