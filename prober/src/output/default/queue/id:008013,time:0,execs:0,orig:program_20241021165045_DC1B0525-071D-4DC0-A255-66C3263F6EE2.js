function f0(a1, a2, a3) {
    const v4 = `
        function f5() {
            return a2;
        }
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = this.constructor;
            try { new v9(a8, a3); } catch (e) {}
            this.constructor = f5;
        }
        class C11 extends F6 {
        }
        new C11();
    `;
    eval(v4);
    return a1;
}
f0();
gc();
