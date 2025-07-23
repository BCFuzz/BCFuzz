const o1 = {
    get h() {
        return this;
    },
};
o1[966] = o1;
const v4 = new Uint16Array();
const o6 = {
};
const v7 = o6.constructor;
try { v7.defineProperties(v4, o1); } catch (e) {}
const v9 = v7(-1000000000000.0);
try { v9.toPrecision(512); } catch (e) {}
gc();
