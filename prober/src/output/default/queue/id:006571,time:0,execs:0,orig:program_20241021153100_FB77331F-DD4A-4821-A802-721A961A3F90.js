class C0 {
    constructor(a2, a3) {
        const v4 = [-9223372036854775807,157334277,-9223372036854775808,-7,-1448514614,-1271810447,-1814298250,-47284];
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            a7.preventExtensions(v4);
        }
        Reflect.construct(F5, [Reflect]);
    }
}
const v13 = new C0();
new C0(v13, v13);
gc();
