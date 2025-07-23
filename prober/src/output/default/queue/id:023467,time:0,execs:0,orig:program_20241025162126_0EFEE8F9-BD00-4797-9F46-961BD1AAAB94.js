for (let i2 = 5, i3 = 10; i2 < i3;) {
    i3--;
    class C10 {
    }
    for (let v11 = 0; v11 < 10; v11++) {
        const v12 = new C10();
        const v13 = v12.__proto__;
        for (let v14 = 0; v14 < 25; v14++) {
            v13["p" + v14] = v14;
        }
    }
}
gc();
