for (const v2 of "getOwnPropertyDescriptors") {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v5 = new F3();
    const v6 = (4n).__proto__;
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F7(F7);
    const v11 = new F3();
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        const v18 = v10.toString(a15);
        v6.__proto__ = this;
        a15.h ^= v18;
    }
    const v19 = new F12(v6, v11);
    new F12(v5, v19);
}
gc();
