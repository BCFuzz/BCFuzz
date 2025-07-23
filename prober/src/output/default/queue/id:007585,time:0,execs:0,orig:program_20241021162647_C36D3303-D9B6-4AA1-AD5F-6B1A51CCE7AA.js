const o5 = {
    toString(a1, a2) {
        const o3 = {
        };
        const t4 = o3.__proto__;
        t4[2147483648] = o3;
        return o3;
    },
};
o5.toString(o5, o5, o5, o5, o5);
function f7(a8, a9) {
    return o5;
}
Object.defineProperty(o5, "valueOf", { writable: true, configurable: true, value: f7 });
gc();
