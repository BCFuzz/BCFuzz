const v2 = new Float64Array(2595);
for (const v3 of v2) {
    const o12 = {
        toString(a5, a6) {
            const t4 = this.__proto__.toLocaleString().constructor;
            const v10 = new t4(v3);
            return v10.toLowerCase(v3, this, v3, this, v10);
        },
    };
    o12.toString(o12, o12, o12);
}
gc();
