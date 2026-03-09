import sys
try:
    import PyPDF2
    reader = PyPDF2.PdfReader('The_System_As_Suspect.pdf')
    text = ""
    for page in reader.pages[:50]:
        extracted = page.extract_text()
        if extracted:
            text += extracted + "\n"
    print(text)
except Exception as e:
    print(f"Error: {e}")
