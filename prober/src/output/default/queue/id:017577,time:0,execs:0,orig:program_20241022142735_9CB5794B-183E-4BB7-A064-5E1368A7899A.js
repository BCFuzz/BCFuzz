async function f0(a1, a2, a3) {
    function f4(a5, a6) {
        function f7(a8) {
            const o11 = {
                "maxByteLength": 2312845920,
            };
            new ArrayBuffer(750704325, o11);
            return a2;
        }
        f7(a1);
        f7();
        for (let v16 = 0; v16 < 5; v16++) {
            f7(v16);
        }
        return a6;
    }
    a3.then = f4;
    return a3;
}
f0(f0, f0, f0);
gc();
