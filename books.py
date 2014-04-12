#!/usr/bin/python
import inspect, os, sys, datetime, time, json

#Variables
header_list = ['Title','Author','Date']
book_list = []

def main():
    search_dir = ""
    
    if ( len(sys.argv)==0 ):
        search_dir = raw_input("Books directory: ")
    elif ( len(sys.argv) > 2 ):
        print "Error: Too many arguments ",sys.argv
        help()
    else:
         search_dir = sys.argv[1]
         
    if ( search_dir == "" ):
        print "Empty search directory."
        help()

    walk_directory(search_dir)
    write_file()

# Print out usage
def help():
    print "Arguments:"
    print "   the full parent directory to search for books. If path contains a space, wrape in quotes."
    print "\n"
    print "Usage: python books.py \"/Users/joeuser/Documents/Books Library/\""
    print "\nExiting script.\n"
    sys.exit()

# Traverse the directory
def walk_directory(parent_dir):
    print "Searching for books in ", parent_dir
    
    for dir in os.listdir(parent_dir):
        if dir not in ('.DS_Store', 'metadata.db', 'metadata_db_prefs_backup.json'):
            build_author_title(parent_dir+dir)
    
    #print book_list
    print 'Books found: ', len(book_list)
    return book_list

# Traverse author directory and build title list for .awz3 and .mobi titles
def build_author_title(root):
	for dir in os.listdir(root):
		if dir not in ('.DS_Store', 'metadata.db', 'metadata_db_prefs_backup.json', 'None'):
			full_subdir = root+'/'+dir
			#Set default modified time for the directory
			modified = time.strftime("%Y-%m-%d", time.gmtime(os.path.getmtime(full_subdir)))
			
			book = {}
			book[header_list[0]] = os.path.basename(root)
			book[header_list[1]] = dir
			
			for file in os.listdir(full_subdir):
				if file.endswith('.azw3') or file.endswith('.mobi'):
					# Set modified time for this original book file
					modified = time.strftime("%Y-%m-%d", time.gmtime(os.path.getmtime(full_subdir+'/'+file)))
			
			book[header_list[2]] = modified
			book_list.append(book)

# Return a string with the headers in valid JS.
def build_columns():
    return "var columns = "+str(header_list)+";\n\n"

# Write the file to disk
def write_file():
    target = open('js/books.js','w')
    target.write('//Updated on: %s \n\n' % datetime.datetime.now())
    target.write(build_columns())
    target.write('var books=')
    json.dump(book_list, target, indent=4, sort_keys=True)
    target.write(';')
    print "Wrote books to new JSON file on: %s \n" % datetime.datetime.now()

# Run the program
main()