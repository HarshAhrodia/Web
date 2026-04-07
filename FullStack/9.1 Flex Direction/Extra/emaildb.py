import sqlite3

# Connect to (or create) the database file
conn = sqlite3.connect('emaildb.sqlite')
cur = conn.cursor()

# Create a fresh table
cur.execute('DROP TABLE IF EXISTS Counts')
cur.execute('CREATE TABLE Counts (org TEXT, count INTEGER)')

# Prompt for file name
fname = input('Enter file name: ')
if len(fname) < 1:
    fname = 'mbox.txt'

fh = open(fname)
for line in fh:
    if not line.startswith('From: '):
        continue
    pieces = line.split()
    email = pieces[1]
    # Extract the organization (domain part after @)
    org = email.split('@')[1]

    cur.execute('SELECT count FROM Counts WHERE org = ? ', (org,))
    row = cur.fetchone()
    if row is None:
        cur.execute('INSERT INTO Counts (org, count) VALUES (?, 1)', (org,))
    else:
        cur.execute('UPDATE Counts SET count = count + 1 WHERE org = ?', (org,))

# Commit once after processing all lines (faster)
conn.commit()

# Check the top 10 organizations (optional)
sqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC LIMIT 10'

print("\nTop 10 organizations:\n")
for row in cur.execute(sqlstr):
    print(str(row[0]), row[1])

cur.close()
