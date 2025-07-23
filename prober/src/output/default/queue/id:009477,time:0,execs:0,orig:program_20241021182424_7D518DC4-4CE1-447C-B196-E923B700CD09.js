function f0(a1, a2) {
    const v3 = [536870912,-1779454136,-4294967297,268435456,-4294967295,-9007199254740990];
    const v4 = [730227070,620353721,-29970,-1646943713,9315,55787];
    const o8 = {
        valueOf(a6) {
            const v7 = v4 & this;
            super[v7] = v3;
            v3[v4] &&= v7;
            return f0;
        },
    };
    try { o8.valueOf(o8, v3); } catch (e) {}
    return o8;
}
f0(f0, f0);
f0();
gc();
