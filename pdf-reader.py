from flask import Flask, flash, request, redirect, url_for, session

from PyPDF2 import PdfFileReader, PdfFileWriter
import re

reader = PdfFileReader("syllabus_22fall.pdf")

s = reader.pages[15].extract_text().split('\n')[10]
print(s)
date = re.search(r"[\d]{2}/[\d]{2}/[\d]{2}",s).group()
print(date)
ps = re.search(r"[A-Z]{2}[0-9]{1}[A-Z]{1}[:][\s](?:OUT|DUE)",s)
if ps:
    ps = ps.group()
    print(ps)
else:
    print('no')

days = ['Tue','Thu','Mon','Wed','Fri']
dict = {}
schedule = [reader.pages[15].extract_text().split('\n'), reader.pages[16].extract_text().split('\n'), reader.pages[17].extract_text().split('\n')]
for i in schedule:
    for assignment in i:
        for day in days:
            if day in assignment:
                date = re.search(r"[\d]{2}/[\d]{2}/[\d]{2}",assignment).group()
                ps = re.search(r"[A-Z]{2}[0-9]{1}[:][\s](?:OUT|DUE)",assignment)
                if not ps:
                    ps = re.search(r"[A-Z]{2}[0-9]{1}[A-Z]{1}[:][\s](?:OUT|DUE)",assignment)
                    if not ps:
                        continue
                ps = ps.group()
                dict[date] = ps
            else:
                continue
    print(dict)

first = reader.pages[0].extract_text().split('\n')

'''for day in days:
    match = re.search(r"",first)
print(re.search(r"",first))'''

office_hours = {}
for i in first:
    if 'Office Hours' in i:
        new = i.split(',')
        for j in new:
            for day in days:
                if day in j:
                    times = re.search(r'[day][\s][0-9]{1}',j)
                    if times:
                        print(times.group())
    



    


'''for page_num in range(reader.numPages):
    page = reader.pages[page_num]
    website_list = re.findall(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', page.extract_text())
    if website_list:
        print(website_list)
    class_name = re.search(r'\b[A-Z]{3}[ ]{1}[A-Z]{2}[0-9]{3}\b',page.extract_text())
    if class_name:
        class_name = class_name.group()
        print(class_name)
    match = re.findall(r"[\d]{2}/[\d]{2}/[\d]{2}",page.extract_text())
    if match:
        print(match)'''





