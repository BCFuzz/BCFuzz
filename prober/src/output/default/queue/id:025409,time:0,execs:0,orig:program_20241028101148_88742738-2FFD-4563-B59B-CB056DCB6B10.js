function f0(a1, a2, a3) {
    let v4;
    try { v4 = a1(); } catch (e) {}
    for (let v5 = 0; v5 < 5; v5++) {
        function f7() {
            function f10(a11, a12, a13, a14) {
                const o15 = {
                    "e": a14,
                    __proto__: a13,
                };
                o15.e = o15;
                return o15;
            }
            f10(2, "o", f10(f10, f0, 2, "o"));
            return transferArrayBuffer;
        }
        transferArrayBuffer.toString = f7;
        for (let i = 0; i < 5; i++) {
            const o22 = {
                toString(a19, a20) {
                    a19.toString(transferArrayBuffer);
                    return v4;
                },
            };
            o22.toString(o22);
        }
    }
    return a1;
}
f0(f0);
gc();
