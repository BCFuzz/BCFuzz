function f0() {
    const o3 = {
        get h() {
            super[this];
            return f0;
        },
    };
    return o3;
}
const v4 = f0();
v4[Symbol.toPrimitive] = f0;
const v8 = this.constructor;
const v9 = v8.assign(v8);
try { v9.entries(v4); } catch (e) {}
gc();
