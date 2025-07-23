for (let v0 = 0; v0 < 25; v0++) {
    async function f1(a2, a3, a4, a5) {
        return a3;
    }
    const v6 = f1();
    function f7() {
    }
    function f8(a9) {
        return f8;
    }
    Object.defineProperty(v6, "constructor", { get: f7, set: f8 });
    const v10 = v6.catch();
    v10.constructor = f1;
    v10.finally();
}
gc();
