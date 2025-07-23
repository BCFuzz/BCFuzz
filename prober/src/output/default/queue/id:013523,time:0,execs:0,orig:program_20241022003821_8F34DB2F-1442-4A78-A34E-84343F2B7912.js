const o4 = {
    5: -2,
    get f() {
        Reflect.construct(-2, Reflect, this);
        return -2;
    },
};
function f5(a6) {
    const o9 = {
        o(a8) {
            return a6;
        },
    };
    return o9;
}
const v11 = f5(f5(-2));
const v13 = v11.o(f5, v11, v11, -2).constructor;
try { v13.values(o4); } catch (e) {}
gc();
