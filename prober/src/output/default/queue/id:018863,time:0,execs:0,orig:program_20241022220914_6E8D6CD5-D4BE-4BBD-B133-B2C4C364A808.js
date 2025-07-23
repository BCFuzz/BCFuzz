function f0(a1, a2, a3) {
    const v6 = createGlobalObject().Float16Array;
    function f7() {
        return createGlobalObject;
    }
    const v8 = new v6();
    Object.defineProperty(v8, 6, { enumerable: true, set: f7 });
    return v6;
}
try { f0(); } catch (e) {}
gc();
