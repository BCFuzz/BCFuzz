for (let v0 = 0; v0 < 10; v0++) {
    class C2 extends String {
        static {
            this.raw(this);
        }
    }
}
gc();
