const v2 = new Int32Array(0);
const v5 = new BigUint64Array(127);
v5[22];
new Uint8Array(257);
let v12 = 1914128256;
v12++;
class C14 {
    static {
        v5["at"](127);
    }
    o(a19, a20) {
        const o21 = {
            "b": v5,
            ...v2,
        };
        let v23;
        try { v23 = new Proxy(C14, o21); } catch (e) {}
        const v24 = new Proxy(this, o21);
        v23 << v24;
    }
}
const v26 = new C14();
v26.o(C14, v26);
gc();
