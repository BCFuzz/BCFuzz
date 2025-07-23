for (let v0 = 0; v0 < 5; v0++) {
    function f1() {
        this instanceof f1;
    }
    class C4 extends f1 {
    }
    new C4();
    new f1();
}
gc();
