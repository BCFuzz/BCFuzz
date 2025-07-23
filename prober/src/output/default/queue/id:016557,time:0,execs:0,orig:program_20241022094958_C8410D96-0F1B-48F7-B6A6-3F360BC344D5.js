new Float32Array(Float32Array, Float32Array, Float32Array);
const v4 = new Uint32Array(1000);
for (const v5 in v4) {
    function f6(a7, a8, a9, a10) {
        const o15 = {
            set b(a13) {
                for (let v14 = 0; v14 < 5; v14++) {
                }
            },
        };
        o15.b = o15;
        return arguments;
    }
    f6();
}
gc();
