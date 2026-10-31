import os
from PIL import Image

# Wpisz tutaj ścieżkę do swojego folderu ze zdjęciami
folder_path = r"C:\Users\majag\repo\photography-portfolio\zdjecia"

for filename in os.listdir(folder_path):
    if filename.lower().endswith(('.jpg', '.jpeg')):
        jpg_path = os.path.join(folder_path, filename)
        
        # Tworzenie nowej nazwy z rozszerzeniem .webp
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_path = os.path.join(folder_path, webp_filename)
        
        try:
            # Konwersja i zapis do WebP
            with Image.open(jpg_path) as img:
                img.save(webp_path, "WEBP", quality=80)
            
            # USUNIĘCIE ORYGINALNEGO JPG (wykonuje się tylko, jeśli zapis WebP się udał)
            os.remove(jpg_path)
            print(f"Sukces: {filename} -> usunięto oryginał")
            
        except Exception as e:
            print(f"Błąd przy pliku {filename}: {e}")

print("Zakończono konwersję i czyszczenie plików JPG!")
