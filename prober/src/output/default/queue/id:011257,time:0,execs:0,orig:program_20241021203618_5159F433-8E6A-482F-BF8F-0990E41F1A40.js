function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const o5 = {
            __proto__: f4,
            ...f4,
        };
        return f4;
    }
    f4();
    for (let v7 = 0; v7 < 100; v7++) {
        function f8(a9, a10) {
            const o11 = {
                __proto__: a9,
            };
            Float32Array.from(o11);
            return f8;
        }
        f8(f8());
    }
}
new F0();
new F0(F0, F0);
for (let i20 = 0, i21 = 10; i20 !== i21; i21--) {
}
gc();
