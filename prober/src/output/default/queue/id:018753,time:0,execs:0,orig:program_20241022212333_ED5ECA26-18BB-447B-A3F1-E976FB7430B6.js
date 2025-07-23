class C2 extends Float32Array {
    #d = -3n;
}
const v5 = new Int16Array(255);
for (const v6 of v5) {
    class C7 extends C2 {
    }
    new C7();
}
gc();
