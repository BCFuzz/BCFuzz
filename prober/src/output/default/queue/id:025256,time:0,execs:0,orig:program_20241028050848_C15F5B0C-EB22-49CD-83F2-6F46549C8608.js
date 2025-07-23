function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v13 = new Int8Array(255);
for (const v14 in v13) {
    class C15 {
        constructor(a17) {
            const v19 = `
                Object.defineProperty(this, "e", { configurable: true, set: f0 });
                C15 = this;
            `;
            const v20 = v19.split(a17);
            try { v20.flatMap(eval); } catch (e) {}
        }
    }
    new C15(v14);
}
gc();
