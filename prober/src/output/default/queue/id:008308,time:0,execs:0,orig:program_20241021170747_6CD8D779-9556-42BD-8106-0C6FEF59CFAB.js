function f0() {
    class C1 {
        static {
            this.bind();
            super[C1];
        }
        8;
    }
    const v6 = ("-789426228").constructor;
    function f7() {
        return v6;
    }
}
const v10 = new Uint16Array(1000);
v10["some"](f0);
gc();
