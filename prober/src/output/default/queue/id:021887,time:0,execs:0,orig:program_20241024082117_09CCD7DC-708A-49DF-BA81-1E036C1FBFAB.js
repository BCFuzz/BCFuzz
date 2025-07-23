function f0(a1, a2) {
    const v5 = new WeakSet();
    function f6() {
        v5.__proto__;
        this.b = this;
        delete this.b;
        return this;
    }
    const v11 = new Float64Array(2422);
    return v11.map(f6, a1);
}
f0(f0);
gc();
