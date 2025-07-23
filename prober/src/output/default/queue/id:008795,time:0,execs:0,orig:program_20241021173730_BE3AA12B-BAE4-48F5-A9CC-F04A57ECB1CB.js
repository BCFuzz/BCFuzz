class C2 extends Uint8Array {
}
const v3 = new C2();
for (let i6 = -3, i7 = 10;
    i6 < i7;
    (() => {
        i7--;
        v3.buffer &= 449;
    })()) {
}
gc();
