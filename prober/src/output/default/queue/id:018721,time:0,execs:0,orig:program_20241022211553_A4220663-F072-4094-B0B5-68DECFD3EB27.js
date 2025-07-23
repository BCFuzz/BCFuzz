for (let v0 = 0; v0 < 96; v0++) {
    class C1 {
        static {
            new this(this, v0, this);
        }
        constructor(a5, a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a10;
                for (let i = 0; i < 5; i++) {
                    delete this.h;
                }
            }
            new F7(a5, a6);
            for (let i15 = 10, i16 = 10; -13369 !== i16; i16--) {
            }
            for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
            }
        }
    }
}
gc();
