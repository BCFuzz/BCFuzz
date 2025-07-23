class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            const v6 = "p" + v4;
            try { v6.padStart(); } catch (e) {}
        }
    }
}
class C8 extends C0 {
}
new C8();
new C8();
const v13 = new Uint16Array(3578);
for (const v14 of v13) {
}
gc();
