class C1 {
    constructor(a3) {
        const v5 = `
            function f6() {
                switch (5.809588271911315e+307) {
                }
                /\u{12345}/myvis;
                return f6;
            }
        `;
        const v8 = v5.split(a3);
        try { v8.flatMap(eval); } catch (e) {}
    }
}
new C1(5.809588271911315e+307);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
