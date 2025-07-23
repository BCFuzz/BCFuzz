const o10 = {
    toString(a2) {
        const v5 = new Float32Array();
        const o6 = {
        };
        o6.setPrototypeOf = 128;
        const v8 = new Proxy(v5, o6);
        v8.__proto__ = [v5,v5,v5];
        return Float32Array;
    },
};
const v11 = [o10];
const v12 = (9.321677252646485e+307).constructor;
try { v12(v11); } catch (e) {}
gc();
