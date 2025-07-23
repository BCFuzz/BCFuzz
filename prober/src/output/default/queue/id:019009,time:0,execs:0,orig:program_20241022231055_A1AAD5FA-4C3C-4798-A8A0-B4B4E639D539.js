function f0() {
    const o2 = {
        "a": "string",
    };
    return o2;
}
class C3 extends f0 {
}
const v4 = new C3();
const v5 = v4.a;
const v6 = v5.toLocaleLowerCase(v5);
const v8 = new Uint8Array(Uint8Array);
v8.setFromBase64(v6);
gc();
