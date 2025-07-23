class C0 {
    static {
        function f3(a4, a5, a6) {
            function F7() {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f9(a10) {
                const o11 = {
                    "MAX_SAFE_INTEGER": F7,
                };
                return C0;
            }
            function F12(a14) {
                if (!new.target) { throw 'must be called with new'; }
                const v15 = this.constructor;
                try { v15(this); } catch (e) {}
            }
            new F12();
            arguments[Symbol.iterator] = BigUint64Array;
            return F7;
        }
        f3();
    }
}
gc();
