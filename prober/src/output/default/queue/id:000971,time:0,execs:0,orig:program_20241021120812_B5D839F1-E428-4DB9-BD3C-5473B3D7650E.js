function f1() {
    return 3.0;
}
const v2 = [65535];
for (let i = 0; i < 10; i++) {
    v2.some(f1);
}
gc();
