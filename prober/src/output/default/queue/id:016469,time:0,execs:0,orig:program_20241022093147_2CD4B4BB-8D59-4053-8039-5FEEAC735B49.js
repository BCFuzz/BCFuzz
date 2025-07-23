for (let v0 = 0; v0 < 100; v0++) {
    const t1 = Promise.withResolvers();
    t1.length = 2147483648;
}
gc();
