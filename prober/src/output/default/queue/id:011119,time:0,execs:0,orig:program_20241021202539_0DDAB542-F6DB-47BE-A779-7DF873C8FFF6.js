class C0 {
    constructor(a2) {
        function f3() {
            class C4 {
            }
            const v5 = new C4();
            function f6(a7, a8) {
                return arguments;
            }
            const t9 = f6(f6, f3);
            return delete t9[v5];
        }
        a2.toString = f3;
        a2.toString(a2, f3);
    }
}
new C0(C0);
gc();
