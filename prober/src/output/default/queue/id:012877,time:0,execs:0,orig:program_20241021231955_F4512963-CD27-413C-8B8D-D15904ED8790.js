for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    return arguments;
}
for (let v12 = 0; v12 < 100; v12++) {
    class C13 extends f10 {
    }
    new C13();
}
gc();
