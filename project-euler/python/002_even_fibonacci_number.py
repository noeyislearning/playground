def sum_even_fibonacci(limit):
    a, b, sum = 1, 1, 0

    while a <= limit:
        if a % 2 == 0:
            sum += a
        a, b = b, a + b
    return sum

print(sum_even_fibonacci(4000000)) 