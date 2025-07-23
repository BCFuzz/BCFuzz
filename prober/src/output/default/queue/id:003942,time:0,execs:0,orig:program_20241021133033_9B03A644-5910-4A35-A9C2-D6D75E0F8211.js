function f0() {
    function f1(a2, a3) {
        return a2;
    }
    new Promise(f1);
    return f1;
}
f0();
f0();
class C8 extends f0 {
}
new C8();
new C8();
gc();
