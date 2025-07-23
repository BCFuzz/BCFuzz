function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3) {
    class C4 {
    }
    const v5 = new C4();
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
    }
    for (let v19 = 0; v19 < 5; v19++) {
        const o20 = {
        };
        o20.constructor.keys(v8);
    }
    for (let v23 = 0; v23 < 1000; v23++) {
    }
    return Proxy;
}
F0.valueOf = f2;
F0 *= F0;
gc();
