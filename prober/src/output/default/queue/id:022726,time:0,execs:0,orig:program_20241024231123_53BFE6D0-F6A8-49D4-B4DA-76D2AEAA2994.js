function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 50; i++) {
        class C4 {
        }
        const o6 = {
            "getOwnPropertyDescriptor": Date,
        };
        const v8 = new Proxy(C4, o6);
        try { v8.bind(this, v8, o6, o6); } catch (e) {}
        for (let v10 = 0; v10 < 5; v10++) {
        }
    }
}
new F0();
gc();
