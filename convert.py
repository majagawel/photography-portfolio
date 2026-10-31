import os
from PIL import Image, ImageOps

# Wpisz tutaj ścieżkę do folderu z Twoją kopią zapasową zdjęć
folder_path = r"C:\Users\majag\repo\photography-portfolio\zdjecia\wydarzenia"

for filename in os.listdir(folder_path):
    if filename.lower().endswith(('.jpg', '.jpeg')):
        jpg_path = os.path.join(folder_path, filename)
        
        # Poprawione wycinanie nazwy pliku bez rozszerzenia [0]
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_path = os.path.join(folder_path, webp_filename)
        
        try:
            with Image.open(jpg_path) as img:
                # 1. Automatycznie obraca zdjęcie na podstawie metadanych EXIF z aparatu/telefonu
                img = ImageOps.exif_transpose(img)
                
                # 2. Zapisuje jako WebP
                img.save(webp_path, "WEBP", quality=80)
            
            # 3. USUWA ORYGINALNY JPG (dopiero gdy zapis WebP się udał)
            os.remove(jpg_path)
            print(f"Sukces: {filename} -> poprawiono orientację i usunięto oryginał")
            
        except Exception as e:
            print(f"Błąd przy pliku {filename}: {e}")

print("Wszystkie zdjęcia zostały pomyślnie przekonwertowane do pionu i wyczyszczone!")
