for (let v0 = 0; v0 < 5; v0++) {
    const v1 = /i(?<a>.)\k<a>[\c~]?/mygi;
    function f2() {
        return v0;
    }
    function f3(a4) {
        return v0;
    }
    Object.defineProperty(v1, "multiline", { enumerable: true, get: f2, set: f3 });
    v1.test(v1);
}
gc();
