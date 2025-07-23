class C0 {
    static #o(a2) {
        function f4() {
            arguments.e = arguments;
            function f6() {
                return this;
            }
            f6.apply(BigInt64Array, arguments);
            return this;
        }
        f4();
    }
    constructor(a10) {
        a10.#o();
    }
}
new C0(C0);
gc();
