"""
 * Mutations
"""

def mutate_string(string, position, character):
    sl = list(string)
    sl[position] = character
    ms = "".join(sl)
    return ms

if __name__ == '__main__':
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)