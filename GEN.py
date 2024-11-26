import random
import string

# Параметры генерации файлов
num_files = 100  # количество файлов
max_length = 8  # максимальная длина названия файла
file_extension = ".py"  # расширение файла

# Список символов, используемых для генерации названий файлов
chars = string.ascii_letters + string.digits

# Цикл генерации файлов
for i in range(num_files):
    # Генерация случайного названия файла
    filename = "".join(random.choice(chars) for _ in range(max_length))
    filename += file_extension

    # Создание файла
    with open("plugins/"+filename, "w", encoding="utf-8") as f:
        # Добавление какого-либо содержимого в файл (необязательно)
        f.write("#Содержимое файла")

    print(f"Файл {filename} создан")

print("Генерация файлов завершена")