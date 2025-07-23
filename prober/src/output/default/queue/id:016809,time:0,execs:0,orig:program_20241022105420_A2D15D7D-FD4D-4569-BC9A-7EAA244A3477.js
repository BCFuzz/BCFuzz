for (let v0 = 0; v0 < 25; v0++) {
    async function f1(a2, a3, a4, a5) {
        return a4;
    }
    const v6 = f1();
    function f7() {
        return f7;
    }
    const v8 = v6.catch(f1);
    v8.finally();
    v8.finally().finally(f7);
}
gc();
