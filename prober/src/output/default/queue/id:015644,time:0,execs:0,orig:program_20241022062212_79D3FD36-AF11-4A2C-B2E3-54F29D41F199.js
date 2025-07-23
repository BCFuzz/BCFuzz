class C0 {
    toString(a2, a3) {
        const v4 = this.__proto__;
        v4.toString(a3, a3, C0, v4);
        this.a = a3;
        delete this.a;
    }
}
const v7 = new C0();
v7.toLocaleString(v7, v7, v7, v7, C0);
const v9 = new C0();
v9.toString();
gc();
