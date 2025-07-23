function f0() {
    function f1() {
        return f1;
    }
    class C2 extends f1 {
        constructor(a4, a5) {
            super();
            Reflect.construct(Date, ["symbol"]);
        }
    }
    new C2(f0, f0);
    return f0;
}
f0();
f0();
gc();
