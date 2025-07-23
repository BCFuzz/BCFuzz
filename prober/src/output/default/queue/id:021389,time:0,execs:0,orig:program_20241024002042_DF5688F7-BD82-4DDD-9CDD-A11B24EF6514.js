class C0 {
    static set b(a2) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v4 = new C0();
const o5 = {
    __proto__: C0,
};
C0.b = v4;
const v7 = new Int8Array(v4, o5, v4);
for (let i10 = 0, i11 = 10;
    i10 < i11;
    (() => {
        const v15 = i11--;
        function F16(a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            const o21 = {
                [v7]: v15,
            };
            Reflect.ownKeys(o21);
        }
        new F16(v15, i10, F16);
    })()) {
}
gc();
