function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
async function f3(a4, a5, a6) {
    function f7(a8, a9) {
        function f10(a11) {
            const o14 = {
                "maxByteLength": 2312845920,
            };
            new ArrayBuffer(750704325, o14);
            return a11;
        }
        f10(f3);
        f10();
        f10();
        for (let v20 = 0; v20 < 5; v20++) {
            f10(F0);
        }
    }
    a6.then = f7;
    return a6;
}
f3(f3, f3, f3);
gc();
