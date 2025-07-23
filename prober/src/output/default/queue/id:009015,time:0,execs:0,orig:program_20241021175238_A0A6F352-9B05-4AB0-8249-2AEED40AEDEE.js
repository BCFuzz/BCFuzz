function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v10 = 0; v10 < 10; v10++) {
        [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
        for (let v12 = 0; v12 < 250; v12++) {
        }
        function F13() {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = this.__defineSetter__;
            try { v15(F13); } catch (e) {}
        }
        const v17 = new F13();
        v17.e = v17;
        const v18 = v17.constructor;
        v18.length = v18;
        v18.toString(v10, v18, v10, F6);
        const v21 = new Int16Array(1);
        const v22 = new Int16Array(this, a8, 3911);
        try { v22.includes(this); } catch (e) {}
        Reflect.apply(v22.copyWithin, v21, v18);
    }
}
const v27 = new F6(F6, 3911);
const t23 = v27.constructor;
new t23();
gc();
