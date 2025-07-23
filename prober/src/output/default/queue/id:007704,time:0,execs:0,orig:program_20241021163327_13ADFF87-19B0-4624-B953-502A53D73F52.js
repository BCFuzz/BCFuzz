for (let v0 = 0; v0 < 10; v0++) {
    async function* f1(a2, a3) {
        return f1;
    }
    f1.then = f1;
    f1().next();
}
gc();
