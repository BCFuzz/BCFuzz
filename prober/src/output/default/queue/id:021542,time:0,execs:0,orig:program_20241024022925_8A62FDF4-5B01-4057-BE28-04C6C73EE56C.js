function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
v2[Symbol.toPrimitive] = f0;
const v5 = f0();
v5.length = v2;
const v7 = ([9223372036854775807,4294967295,6,512,536870888,-1073741824]).sort;
try { v7.call(v5); } catch (e) {}
gc();
