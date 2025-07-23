for (let i = 0; i < 10; i++) {
    function f0() {
        function f1() {
            return f0;
        }
        class C2 extends f1 {
        }
        function f3() {
            return f0;
        }
        function f4(a5) {
            return a5;
        }
        const v7 = Symbol.iterator;
        Object.defineProperty(C2, v7, { enumerable: true, get: f3, set: f4 });
        C2[Symbol.iterator] = f0;
        return v7;
    }
    f0();
}
gc();
