class C0 {
}
const v1 = new C0();
async function f2(a3, a4, a5) {
    const o6 = {
    };
    const v8 = new Proxy(v1, o6);
    await v8;
    function f10() {
        return Date;
    }
    Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f10 });
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
    for (let v23 = 0; v23 < 5; v23++) {
        for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
        }
        const v34 = Uint8Array.toString(a3, v8, v23, v23);
        const o35 = {
        };
        o35.constructor.create(v34);
    }
    for (let v38 = 0; v38 < 250; v38++) {
    }
    return v8;
}
f2();
gc();
