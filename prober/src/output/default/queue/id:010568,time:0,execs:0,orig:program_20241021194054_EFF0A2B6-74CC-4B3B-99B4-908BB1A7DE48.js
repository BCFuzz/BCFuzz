for (let v0 = 0; v0 < 25; v0++) {
    async function f1(a2, a3, a4, a5) {
        return v0;
    }
    const v6 = f1(v0, f1, v0, f1);
    v6.catch();
    function f8() {
    }
    function f9(a10) {
        return v6;
    }
    Object.defineProperty(v6, "constructor", { get: f8, set: f9 });
    const v11 = v6.catch(f1);
    v11.constructor = v11;
    v11.finally().finally(f8);
}
gc();
