for (let v0 = 0; v0 < 5; v0++) {
    function f1() {
        return v0;
    }
    function f2() {
        return f1;
    }
    function f3(a4) {
        return a4;
    }
    Object.defineProperty(f1, "d", { configurable: true, enumerable: true, get: f2, set: f3 });
    class C5 extends f1 {
    }
    for (const v6 in C5) {
        const v7 = C5[v6];
        v7[2147483649] = v7;
    }
}
gc();
