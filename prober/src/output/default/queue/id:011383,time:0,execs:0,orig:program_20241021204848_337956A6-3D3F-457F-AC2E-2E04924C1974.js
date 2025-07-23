for (let v0 = 0; v0 < 250; v0++) {
    function f1() {
    }
    f1[Symbol.iterator] = f1;
    try { Int16Array.from(f1); } catch (e) {}
}
gc();
