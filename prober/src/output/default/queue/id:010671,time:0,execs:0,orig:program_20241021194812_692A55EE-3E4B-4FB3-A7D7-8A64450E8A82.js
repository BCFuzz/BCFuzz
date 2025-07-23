function f0() {
    const o9 = {
        valueOf(a2) {
            const v3 = f0();
            const v5 = new Date(a2);
            v5["getUTCSeconds"]();
            try { v3.valueOf(); } catch (e) {}
            return f0;
        },
    };
    return o9;
}
f0 <= f0();
gc();
