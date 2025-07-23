function f0() {
    const v1 = [1370473953,268435441];
    const v2 = [v1];
    function f3() {
        function F4(a6) {
            if (!new.target) { throw 'must be called with new'; }
            typeof v1 === a6;
            const v9 = this.constructor;
            try { new v9(); } catch (e) {}
        }
        new F4();
        return f3;
    }
    v2.valueOf = f3;
    934305.379841754 ^ v2;
}
f0();
f0();
gc();
