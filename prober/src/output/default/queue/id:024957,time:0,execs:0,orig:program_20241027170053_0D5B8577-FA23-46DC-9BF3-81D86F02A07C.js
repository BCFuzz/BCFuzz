class C1 {
    static {
        function f3() {
            return 25;
        }
        function f4(a5) {
            return f3;
        }
        Object.defineProperty(this, "roundingIncrement", { get: f3, set: f4 });
        ([0.23056073444301728,0.12597748227728112,1.0259802493629357e+307,2.220446049250313e-16,-7.50930682153747,0.20424786368022974]).toLocaleString(C1, this);
    }
}
gc();
