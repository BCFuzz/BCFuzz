function f1() {
    const o3 = {
        "a": true,
        m() {
            return true;
        },
    };
    for (let i = 0; i < 5; i++) {
        const v6 = new Uint32Array(1000);
        for (const v7 in v6) {
        }
        o3.a = o3;
    }
    return f1;
}
f1();
f1();
gc();
