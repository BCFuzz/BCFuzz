for (let v1 = 0; v1 < 25; v1++) {
    async function f2(a3, a4, a5, a6) {
        return v1;
    }
    const v7 = f2();
    v7.catch(f2).finally(1024);
    function f10() {
    }
    function f11(a12) {
        return 1024;
    }
    Object.defineProperty(v7, "constructor", { get: f10, set: f11 });
    const v13 = v7.catch(f10);
    v13.constructor = v13;
    v13.finally().finally(f10);
}
gc();
