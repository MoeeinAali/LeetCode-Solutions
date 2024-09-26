def check_positive_number(number):
    if number < 0:
        raise ValueError("Number must be positive!")
    else:
        return number


try:
    num = int(input("Enter a positive number: "))
    result = check_positive_number(num)
    print(f"The number you entered is: {result}")
except ValueError as e:
    print(e)
