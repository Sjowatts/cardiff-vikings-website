{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import pandas as pd\
\
# Replace 'Cardiff Vikings Schedule.xlsx' with the path to your Excel file\
file_path = 'Cardiff Vikings Schedule.xlsx'\
\
# Replace 'Sheet1' with the name of the sheet you want to read\
sheet_name = \'91Games\'92\
\
# Read the Excel file into a DataFrame\
df = pd.read_excel(file_path, sheet_name=sheet_name)\
\
# Now you can work with the DataFrame 'df', which contains the data from the Excel sheet\
# For example, you can print the first few rows of the DataFrame\
print(df.head())\
}