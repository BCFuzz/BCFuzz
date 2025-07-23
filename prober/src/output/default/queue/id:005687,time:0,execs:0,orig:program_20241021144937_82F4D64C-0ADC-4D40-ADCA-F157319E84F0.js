for (let v0 = 0; v0 < 10; v0++) {
    async function* f1(a2, a3) {
        return f1;
    }
    const v4 = f1();
    v4.next(v4);
}
gc();
