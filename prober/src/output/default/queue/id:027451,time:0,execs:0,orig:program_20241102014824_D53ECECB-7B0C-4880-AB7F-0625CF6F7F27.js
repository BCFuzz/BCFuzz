for (const v1 of "getOwnPropertyDescriptors") {
    for (let i4 = 10, i5 = 10; -13369 < i5; i5--) {
    }
    function F12() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F12();
    const v15 = v1.__proto__;
    function F16(a18) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v19 = new F16(v1);
    const v20 = new F12();
    function F21(a23, a24, a25, a26) {
        if (!new.target) { throw 'must be called with new'; }
        const v27 = v19.toString(a25, this, "getOwnPropertyDescriptors", F21, "getOwnPropertyDescriptors");
        v15.__proto__ = this;
        a24.h ^= v27;
    }
    const v28 = new F21(v20, v20);
    new F21(v14, v28);
}
gc();
