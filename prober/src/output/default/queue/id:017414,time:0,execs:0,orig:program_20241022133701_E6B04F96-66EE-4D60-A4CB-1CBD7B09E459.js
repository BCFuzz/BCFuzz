for (let v0 = 0; v0 < 25; v0++) {
    class C2 extends String {
        static {
            function f4() {
                return Date;
            }
            Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f4 });
            for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
            }
            for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
            }
            const v27 = Uint8Array.toString();
            try { v27.parse(Uint8Array); } catch (e) {}
            const o29 = {
            };
            o29.constructor.create(v27);
            for (let v32 = 0; v32 < 50; v32++) {
            }
        }
    }
}
gc();
