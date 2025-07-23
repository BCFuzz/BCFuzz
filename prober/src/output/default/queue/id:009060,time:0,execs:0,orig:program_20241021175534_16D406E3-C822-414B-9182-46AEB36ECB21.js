function f1() {
    return f1;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
for (let v4 = 0; v4 < 100; v4++) {
    function f5() {
        return f5;
    }
    class C6 extends f5 {
    }
    new C6();
    /(ab|cde)\1/mis.test();
}
gc();
