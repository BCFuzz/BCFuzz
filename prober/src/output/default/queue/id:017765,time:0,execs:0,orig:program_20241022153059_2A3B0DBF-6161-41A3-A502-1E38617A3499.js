function f0(a1, a2, a3) {
    try { a1(a3, f0, a2, a1, f0); } catch (e) {}
    function f5() {
        return f5;
    }
    f5.toString = f5;
    for (let v6 = 0; v6 < 5; v6++) {
        for (let i = 0; i < 5; i++) {
            const o13 = {
                toString(a9, a10) {
                    a9.toString(f5);
                    return a9.toString(transferArrayBuffer);
                },
            };
            o13.toString(o13);
        }
    }
    return a3;
}
f0(f0);
gc();
