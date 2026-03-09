import sys
try:
    import PyPDF2
    reader = PyPDF2.PdfReader('The_System_As_Suspect.pdf')
    text = ""
    for page in reader.pages[:15]:
        extracted = page.extract_text()
        if extracted:
            text += extracted + "\n"
    print(text[:5000])
except Exception as e:
    print(f"Error: {e}")
