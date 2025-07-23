for (let v0 = 0; v0 < 25; v0++) {
    const o12 = {
        n(a2, a3) {
            class C4 {
            }
            const v5 = new C4();
            const v6 = new C4();
            function f7(a8) {
                return v6;
            }
            Object.defineProperty(v6, "toString", { value: f7 });
            this.constructor.assign(v5, v6);
            return v5;
        },
    };
    o12.n(o12, o12, o12, v0, v0);
}
gc();
