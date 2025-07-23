class C0 {
}
const v1 = new C0();
const v4 = new Int8Array();
const o5 = {
};
const v7 = new Proxy(v4, o5);
for (let i = 0; i < 5; i++) {
    for (let v8 = 0; v8 < 50; v8++) {
    }
    v1.b = o5;
    42 in v7;
}
gc();
