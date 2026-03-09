import sys
try:
    import PyPDF2
    reader = PyPDF2.PdfReader('The_System_As_Suspect.pdf')
    # Extract Chapter 1 detail (Page 10-20)
    text = ""
    for i in range(10, 20):
        extracted = reader.pages[i].extract_text()
        if extracted:
            text += extracted + "\n"
    print("--- CHAPTER 1 START ---")
    print(text)
    print("--- CHAPTER 1 END ---")
    
    # Extract Chapter 2 detail snippet (Page 33-40)
    text = ""
    for i in range(33, 40):
        extracted = reader.pages[i].extract_text()
        if extracted:
            text += extracted + "\n"
    print("--- CHAPTER 2 START ---")
    print(text)
    print("--- CHAPTER 2 END ---")
except Exception as e:
    print(f"Error: {e}")
