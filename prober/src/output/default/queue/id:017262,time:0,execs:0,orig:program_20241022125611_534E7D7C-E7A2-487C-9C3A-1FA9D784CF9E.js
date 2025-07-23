function f0() {
    for (let v1 = 0; v1 < 250; v1++) {
        let v2 = v1 - v1;
        const v4 = ~[v2,v2,v2];
        let v5 = 0;
        for (let i = 0; i < 10; i++) {
            v2 ^= v4;
            const o7 = {
                get e() {
                    return this;
                },
            };
            v5++;
        }
    }
    return f0;
}
class C9 extends f0 {
}
new C9();
gc();
