class C0 {
}
const v1 = new C0();
const v4 = new Int8Array(255);
for (const v5 in v4) {
    for (let v6 = 0; v6 < 10; v6++) {
        C0.__proto__ = v1;
    }
    v4 instanceof C0;
}
gc();
