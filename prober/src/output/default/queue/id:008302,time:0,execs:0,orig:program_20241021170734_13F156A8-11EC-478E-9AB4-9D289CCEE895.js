function f0() {
    class C1 {
        static {
            super[C1];
        }
    }
}
const v6 = new Uint16Array(1000);
v6["some"](f0, "some");
gc();
