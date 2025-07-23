const v1 = new Float64Array(Float64Array, Float64Array);
for (let i = 0; i < 5; i++) {
    const o5 = {
        __proto__: v1,
        set b(a3) {
            a3[3];
        },
    };
    o5.b = o5;
}
gc();
