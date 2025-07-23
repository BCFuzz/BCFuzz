for (const v1 of "getOwnPropertyDescriptors") {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = new F2();
    const v5 = v1.__proto__;
    function F6(a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F6();
    const v10 = new F2();
    function F11(a13, a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        const v17 = v9.toString();
        v5.__proto__ = this;
        a14.h ^= v17;
    }
    const v18 = new F11(v10, v10);
    new F11(v4, v18);
}
gc();
