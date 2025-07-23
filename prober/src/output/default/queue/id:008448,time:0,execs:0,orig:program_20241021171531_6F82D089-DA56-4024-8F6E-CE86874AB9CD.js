for (let v0 = 0; v0 < 5; v0++) {
    const v1 = /a\nW/vgi;
    function f2() {
        return v1;
    }
    const v3 = f2();
    v3.lastIndex = v3;
    function f4(a5) {
        return a5;
    }
    Object.defineProperty(v1, "constructor", { get: f2, set: f4 });
    v1.toString().link().split(v1);
}
gc();
