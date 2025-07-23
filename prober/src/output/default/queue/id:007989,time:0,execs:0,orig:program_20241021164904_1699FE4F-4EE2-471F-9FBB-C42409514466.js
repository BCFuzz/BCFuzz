const v2 = new Float64Array(257);
for (const v3 of v2) {
    const v5 = [Int16Array];
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    const v9 = new Int16Array(v8);
    const t7 = v9.constructor;
    new t7(v8);
}
gc();
