for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 5; v10++) {
    class C11 {
    }
    const v12 = new C11();
    for (let v13 = 0; v13 < 250; v13++) {
        function f14(a15, a16, a17, a18) {
            return arguments;
        }
        f14(v12, v13, v12, v12);
        v12["bigint" + v13] = v13;
    }
}
gc();
