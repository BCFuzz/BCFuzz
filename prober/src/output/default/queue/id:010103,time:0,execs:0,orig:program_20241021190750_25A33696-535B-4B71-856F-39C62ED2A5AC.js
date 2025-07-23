for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        function f2(a3, a4) {
            a3.bind(a4, a3);
            return f2;
        }
        new Promise(f2);
        return f1;
    }
    class C8 extends f1 {
    }
    new C8();
}
gc();
