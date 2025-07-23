for (let v0 = 0; v0 < 50; v0++) {
    const v2 = new Int16Array(v0);
    const v5 = !(delete v2[edenGC]);
    for (let v6 = 0; v6 < 5; v6++) {
        ("p" + v6).link(v5);
    }
}
const v13 = 129 <= Int32Array ? 129 : Int32Array;
class C14 {
    get c() {
        class C16 {
            static b;
        }
        delete C16.b;
    }
}
const v18 = new C14();
const v20 = new v13(586);
for (const v21 of v20) {
    v18.c;
}
gc();
