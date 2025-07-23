for (let v0 = 0; v0 < 250; v0++) {
    const v1 = v0++;
    v0--;
    async function f6(a7, a8, a9, a10) {
        await a9;
        return a8;
    }
    f6(f6, v1, v0, v0);
}
gc();
