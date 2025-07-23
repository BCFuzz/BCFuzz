function f1() {
    return -9223372036854775807;
}
const v4 = new Uint8Array(64);
v4.sort(f1);
for (let i8 = 0, i9 = 10; i8 !== i9; i9--) {
}
gc();
