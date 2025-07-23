for (let v0 = 0; v0 < 25; v0++) {
    async function f1(a2, a3, a4, a5) {
        return a4;
    }
    const v6 = f1();
    v6.catch(f1);
    function f8() {
    }
    function f9(a10) {
        return a10;
    }
    Object.defineProperty(v6, "constructor", { get: f8, set: f9 });
    const v11 = v6.catch();
    v11.constructor = v11;
    v11.finally().finally(f8);
}
gc();
