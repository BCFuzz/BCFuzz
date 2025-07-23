const o6 = {
    valueOf(a1, a2) {
        try { this.__defineGetter__(this, a2); } catch (e) {}
        a1 % a1;
        try { a2.valueOf(this, a1); } catch (e) {}
        return a2;
    },
};
o6.valueOf(65536n, o6);
gc();
