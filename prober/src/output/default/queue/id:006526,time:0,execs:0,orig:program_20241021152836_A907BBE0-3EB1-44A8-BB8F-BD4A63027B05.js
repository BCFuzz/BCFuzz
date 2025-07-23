function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = F2.prototype;
const v5 = new F2();
for (let v6 = 0; v6 < 5; v6++) {
    class C8 {
        #d = 10n;
    }
    const v9 = new C8();
    function f10() {
        Object.defineProperty(v4, "b", { enumerable: true, get: Array });
        const v11 = [-65536,741214997];
        [127,-15,-2145698403,14,1];
        return v11;
    }
    v9.constructor = f10;
    const v13 = v9.constructor;
    new v13(v5, f10, v4, v13);
    v9.hasOwnProperty();
}
gc();
