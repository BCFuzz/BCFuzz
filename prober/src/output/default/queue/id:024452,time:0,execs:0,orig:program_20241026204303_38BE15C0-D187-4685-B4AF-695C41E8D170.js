function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        const v11 = new Int32Array(209);
        const v12 = [this,this,this,this,this];
        function f13() {
            const o14 = {
            };
            const v15 = o14.constructor;
            v15.freeze(o14);
            return v15.assign(o14, a7);
        }
        const v19 = [f13];
        Reflect.apply(v12.toSorted, v11, v19);
    }
    new F5(F5);
}
new F0();
gc();
