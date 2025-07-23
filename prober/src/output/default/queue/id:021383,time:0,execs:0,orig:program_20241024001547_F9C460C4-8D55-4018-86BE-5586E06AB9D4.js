const v2 = new Uint8ClampedArray(4096);
function f3() {
    const o5 = {
        "a": "string",
    };
    return o5;
}
class C6 extends f3 {
}
const v7 = new C6();
const v8 = v7.a;
const v9 = v8.toLocaleLowerCase(v8, Uint8ClampedArray);
const v11 = new Uint8Array(v2);
v11.setFromBase64(v9);
gc();
