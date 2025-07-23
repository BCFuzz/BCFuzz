for (let v0 = 0; v0 < 100; v0++) {
    let v1;
    try { v1 = v0(v0, v0, v0, v0); } catch (e) {}
    function f2(a3, a4, a5) {
        const o11 = {
            ...v1,
            valueOf(a7, a8, a9) {
                f2(a4);
                return f2;
            },
        };
    }
    f2();
}
gc();
