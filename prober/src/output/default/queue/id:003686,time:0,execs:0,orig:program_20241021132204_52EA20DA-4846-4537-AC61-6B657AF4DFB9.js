const v1 = [5];
([v1,[v1,v1,v1,v1]]).copyWithin(5, 5, 5).flat(5);
gc();
