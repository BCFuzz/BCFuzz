class C0 {
    static {
        for (let v2 = 0; v2 < 5; v2++) {
            const t3 = this.__proto__;
            t3[0] = v2;
            super[v2 - v2];
        }
    }
}
gc();
