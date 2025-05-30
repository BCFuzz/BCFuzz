import scipy.stats

bcfuzz_1 = [592, 589, 591, 586, 591]
bcfuzz_gen = [585, 590, 587, 588, 590]
bcfuzz_nojit = [178, 178, 177, 177, 176]
bcfuzz_noedge = [593, 592, 591, 585, 591]

bcfuzz_2 = [587, 592, 584, 590, 587]
bcfuzz_mutate = [592, 590, 588, 589, 590]
bcfuzz_schedule = [591, 593, 590, 592, 588]


list_name = ["bcfuzz_1", "bcfuzz_gen", "bcfuzz_nojit", "bcfuzz_noedge", "bcfuzz_2", "bcfuzz_mutate", "bcfuzz_schedule"]
list_list = [bcfuzz_1, bcfuzz_gen, bcfuzz_nojit, bcfuzz_noedge, bcfuzz_2, bcfuzz_mutate, bcfuzz_schedule]


for i in range(len(list_list)):
    current_list = list_list[i]
    current_value = round(sum(current_list)/len(current_list), 1) # average value
    print(list_name[i], ": ", current_value)

print("=============p-value==============")
print("bcfuzz_gen:")
print(scipy.stats.mannwhitneyu(bcfuzz_gen, bcfuzz_1, False,'less'))
print("")

print("bcfuzz_nojit:")
print(scipy.stats.mannwhitneyu(bcfuzz_nojit, bcfuzz_1, False,'less'))
print("")

print("bcfuzz_nojit:")
print(scipy.stats.mannwhitneyu(bcfuzz_1, bcfuzz_noedge, False,'less'))
print("")

print("bcfuzz_mutate:")
print(scipy.stats.mannwhitneyu(bcfuzz_2, bcfuzz_mutate, False,'less'))
print("")

print("bcfuzz_schedule:")
print(scipy.stats.mannwhitneyu(bcfuzz_2, bcfuzz_schedule, False,'less'))
print("")