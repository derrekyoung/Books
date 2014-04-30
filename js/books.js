//Updated on: 2014-04-29 20:04:30.752320 

var columns = ['Title', 'Author', 'Date'];

var books=[
    {
        "Author": "World War Z_ An Oral History of the Zombie War (20)", 
        "Date": "2013-12-15", 
        "Title": "Brooks, Max"
    }, 
    {
        "Author": "Inferno_ A Novel (Robert Langdon) (9)", 
        "Date": "2013-12-15", 
        "Title": "Brown, Dan"
    }, 
    {
        "Author": "Earth Afire (The First Formic War) (6)", 
        "Date": "2013-12-15", 
        "Title": "Card, Orson Scott"
    }, 
    {
        "Author": "Ender's Game (50)", 
        "Date": "2013-12-15", 
        "Title": "Card, Orson Scott"
    }, 
    {
        "Author": "Pathfinder (66)", 
        "Date": "2013-12-15", 
        "Title": "Card, Orson Scott"
    }, 
    {
        "Author": "Ruins (Pathfinder) (62)", 
        "Date": "2013-12-15", 
        "Title": "Card, Orson Scott"
    }, 
    {
        "Author": "The Gate Thief (Mither Mages) (4)", 
        "Date": "2013-12-15", 
        "Title": "Card, Orson Scott"
    }, 
    {
        "Author": "The Lost Gate (Mither Mages) (61)", 
        "Date": "2013-12-15", 
        "Title": "Card, Orson Scott"
    }, 
    {
        "Author": "Ready Player One (79)", 
        "Date": "2013-12-15", 
        "Title": "Cline, Ernest"
    }, 
    {
        "Author": "Catching Fire (The Second Book of The Hunger Games) (54)", 
        "Date": "2013-12-15", 
        "Title": "Collins, Suzanne"
    }, 
    {
        "Author": "Mockingjay (The Final Book of The Hunger Games) (74)", 
        "Date": "2013-12-15", 
        "Title": "Collins, Suzanne"
    }, 
    {
        "Author": "The Hunger Games (28)", 
        "Date": "2013-12-15", 
        "Title": "Collins, Suzanne"
    }, 
    {
        "Author": "The Lincoln Lawyer_ A Novel (18)", 
        "Date": "2013-12-15", 
        "Title": "Connelly, Michael"
    }, 
    {
        "Author": "Prey (38)", 
        "Date": "2013-12-15", 
        "Title": "Crichton, Michael"
    }, 
    {
        "Author": "The Lost World (16)", 
        "Date": "2013-12-15", 
        "Title": "Crichton, Michael"
    }, 
    {
        "Author": "The Passage_ A Novel (48)", 
        "Date": "2013-12-15", 
        "Title": "Cronin, Justin"
    }, 
    {
        "Author": "The Twelve (Book Two of The Passage Trilogy)_ A Novel (36)", 
        "Date": "2013-12-15", 
        "Title": "Cronin, Justin"
    }, 
    {
        "Author": "The Death Cure (80)", 
        "Date": "2013-12-15", 
        "Title": "Dashner, James"
    }, 
    {
        "Author": "The Maze Runner (Maze Runner Trilogy, Book 1) (30)", 
        "Date": "2013-12-15", 
        "Title": "Dashner, James"
    }, 
    {
        "Author": "The Scorch Trials (46)", 
        "Date": "2013-12-15", 
        "Title": "Dashner, James"
    }, 
    {
        "Author": "The Infection (81)", 
        "Date": "2013-12-15", 
        "Title": "DiLouie, Craig"
    }, 
    {
        "Author": "The Killing Floor (a novel of The Infection) (42)", 
        "Date": "2013-12-15", 
        "Title": "DiLouie, Craig"
    }, 
    {
        "Author": "The 4-Hour Body_ An Uncommon Guide to Rapid Fat-Loss, Incredible Sex, and Becoming Superhuman (43)", 
        "Date": "2013-12-15", 
        "Title": "Ferriss, Timothy"
    }, 
    {
        "Author": "The 4-Hour Chef_ The Simple Path to Cooking Like a Pro, Learning Anything, and Living the Good L (25)", 
        "Date": "2013-12-15", 
        "Title": "Ferriss, Timothy"
    }, 
    {
        "Author": "The 4-Hour Workweek, Expanded and Updated (41)", 
        "Date": "2013-12-15", 
        "Title": "Ferriss, Timothy"
    }, 
    {
        "Author": "A Clash of Kings (86)", 
        "Date": "2013-12-15", 
        "Title": "George R. R. Martin"
    }, 
    {
        "Author": "A Dance with Dragons (87)", 
        "Date": "2013-12-15", 
        "Title": "George R. R. Martin"
    }, 
    {
        "Author": "A Feast for Crows (88)", 
        "Date": "2013-12-15", 
        "Title": "George R. R. Martin"
    }, 
    {
        "Author": "A Game of Thrones (89)", 
        "Date": "2013-12-15", 
        "Title": "George R. R. Martin"
    }, 
    {
        "Author": "A Storm of Swords (90)", 
        "Date": "2013-12-15", 
        "Title": "George R. R. Martin"
    }, 
    {
        "Author": "Neuromancer (Ace Science Fiction) (21)", 
        "Date": "2013-12-15", 
        "Title": "Gibson, William"
    }, 
    {
        "Author": "Abraham Lincoln_ Vampire Hunter (69)", 
        "Date": "2013-12-15", 
        "Title": "Grahame-Smith, Seth"
    }, 
    {
        "Author": "The Racketeer (40)", 
        "Date": "2013-12-15", 
        "Title": "Grisham, John"
    }, 
    {
        "Author": "Water for Elephants_ A Novel (51)", 
        "Date": "2013-12-15", 
        "Title": "Gruen, Sara"
    }, 
    {
        "Author": "Seabiscuit_ An American Legend (Ballantine Reader's Circle) (71)", 
        "Date": "2013-12-15", 
        "Title": "Hillenbrand, Laura"
    }, 
    {
        "Author": "Unbroken_ A World War II Story of Survival, Resilience, and Redemption (70)", 
        "Date": "2013-12-15", 
        "Title": "Hillenbrand, Laura"
    }, 
    {
        "Author": "The Fall_ Book Two of the Strain Trilogy (68)", 
        "Date": "2013-12-15", 
        "Title": "Hogan, Chuck"
    }, 
    {
        "Author": "The Night Eternal (11)", 
        "Date": "2013-12-15", 
        "Title": "Hogan, Chuck"
    }, 
    {
        "Author": "Dust (Silo Saga) (99)", 
        "Date": "2013-12-29", 
        "Title": "Howey, Hugh"
    }, 
    {
        "Author": "Sand Omnibus (111)", 
        "Date": "2014-02-21", 
        "Title": "Howey, Hugh"
    }, 
    {
        "Author": "Shift Omnibus Edition (Shift 1-3) (Silo Saga) (12)", 
        "Date": "2013-12-15", 
        "Title": "Howey, Hugh"
    }, 
    {
        "Author": "Wool Omnibus Edition (Wool 1 - 5) (Silo Saga) (63)", 
        "Date": "2013-12-15", 
        "Title": "Howey, Hugh"
    }, 
    {
        "Author": "Steve Jobs (5)", 
        "Date": "2013-12-15", 
        "Title": "Isaacson, Walter"
    }, 
    {
        "Author": "The Eye of the World_ Book One of 'The Wheel of Time' (116)", 
        "Date": "2014-04-30", 
        "Title": "Jordan, Robert"
    }, 
    {
        "Author": "The Devil in the White City_ A Saga of Magic and Murder at the Fair that Changed America (15)", 
        "Date": "2013-12-15", 
        "Title": "Larson, Erik"
    }, 
    {
        "Author": "The Girl Who Kicked the Hornets' Nest (33)", 
        "Date": "2013-12-15", 
        "Title": "Larsson, Stieg"
    }, 
    {
        "Author": "The Girl Who Played with Fire (Millennium Trilogy, Book 2) (26)", 
        "Date": "2013-12-15", 
        "Title": "Larsson, Stieg"
    }, 
    {
        "Author": "The Girl with the Dragon Tattoo (35)", 
        "Date": "2013-12-15", 
        "Title": "Larsson, Stieg"
    }, 
    {
        "Author": "King of Thorns (The Broken Empire) (104)", 
        "Date": "2013-12-29", 
        "Title": "Lawrence, Mark"
    }, 
    {
        "Author": "Prince of Thorns (The Broken Empire) (60)", 
        "Date": "2013-12-15", 
        "Title": "Lawrence, Mark"
    }, 
    {
        "Author": "The Descent (23)", 
        "Date": "2013-12-15", 
        "Title": "Long, Jeff"
    }, 
    {
        "Author": "The Long Run_ A New York City Firefighter's Triumphant Comeback from Crash Victim to Elite Athle (58)", 
        "Date": "2013-12-15", 
        "Title": "Long, Matt"
    }, 
    {
        "Author": "I Am Number Four (Lorien Legacies) (65)", 
        "Date": "2013-12-15", 
        "Title": "Lore, Pittacus"
    }, 
    {
        "Author": "I Am Number Four_ The Lost Files_ Six's Legacy (Lorien Legacies) (8)", 
        "Date": "2013-12-15", 
        "Title": "Lore, Pittacus"
    }, 
    {
        "Author": "The Fall of Five (Lorien Legacies) (102)", 
        "Date": "2013-12-29", 
        "Title": "Lore, Pittacus"
    }, 
    {
        "Author": "The Power of Six (82)", 
        "Date": "2013-12-15", 
        "Title": "Lore, Pittacus"
    }, 
    {
        "Author": "The Rise of Nine (Lorien Legacies) (31)", 
        "Date": "2013-12-15", 
        "Title": "Lore, Pittacus"
    }, 
    {
        "Author": "Legend (103)", 
        "Date": "2013-12-29", 
        "Title": "Lu, Marie"
    }, 
    {
        "Author": "The Bourne Identity_ The Bourne Saga_ Book One (Bourne 1) (73)", 
        "Date": "2013-12-15", 
        "Title": "Ludlum, Robert"
    }, 
    {
        "Author": "Shadowfever_ A MacKayla Lane Novel (45)", 
        "Date": "2013-12-15", 
        "Title": "Moning, Karen Marie"
    }, 
    {
        "Author": "His Majesty's Dragon (Temeraire) (19)", 
        "Date": "2013-12-15", 
        "Title": "Novik, Naomi"
    }, 
    {
        "Author": "Immune (The Rho Agenda) (44)", 
        "Date": "2013-12-15", 
        "Title": "Phillips, Richard"
    }, 
    {
        "Author": "The Second Ship (The Rho Agenda) (47)", 
        "Date": "2013-12-15", 
        "Title": "Phillips, Richard"
    }, 
    {
        "Author": "Wormhole (The Rho Agenda) (49)", 
        "Date": "2013-12-15", 
        "Title": "Phillips, Richard"
    }, 
    {
        "Author": "AMPED (The WIRED Sequel) (39)", 
        "Date": "2013-12-15", 
        "Title": "Richards, Douglas E"
    }, 
    {
        "Author": "WIRED (34)", 
        "Date": "2013-12-15", 
        "Title": "Richards, Douglas E"
    }, 
    {
        "Author": "Percy Jackson and the Lightning Thief (32)", 
        "Date": "2013-12-15", 
        "Title": "Riordan, Rick"
    }, 
    {
        "Author": "Allegiant (Divergent) (98)", 
        "Date": "2013-12-29", 
        "Title": "Roth, Veronica"
    }, 
    {
        "Author": "Divergent (100)", 
        "Date": "2013-12-29", 
        "Title": "Roth, Veronica"
    }, 
    {
        "Author": "Insurgent (Divergent) (72)", 
        "Date": "2013-12-15", 
        "Title": "Roth, Veronica"
    }, 
    {
        "Author": "Harry Potter and the Chamber of Secrets (Book 2) (92)", 
        "Date": "2013-12-15", 
        "Title": "Rowling, J K"
    }, 
    {
        "Author": "Harry Potter and the Deathly Hallows (Book 7) (97)", 
        "Date": "2013-12-15", 
        "Title": "Rowling, J K"
    }, 
    {
        "Author": "Harry Potter and the Goblet of Fire (Book 4) (94)", 
        "Date": "2013-12-15", 
        "Title": "Rowling, J K"
    }, 
    {
        "Author": "Harry Potter and the Half-Blood Prince (Book 6) (96)", 
        "Date": "2013-12-15", 
        "Title": "Rowling, J K"
    }, 
    {
        "Author": "Harry Potter and the Order of the Phoenix (Book 5) (95)", 
        "Date": "2013-12-15", 
        "Title": "Rowling, J K"
    }, 
    {
        "Author": "Harry Potter and the Prisoner of Azkaban (Book 3) (93)", 
        "Date": "2013-12-15", 
        "Title": "Rowling, J K"
    }, 
    {
        "Author": "Harry Potter and the Sorcerer's Stone (Book 1) (91)", 
        "Date": "2013-12-15", 
        "Title": "Rowling, J K"
    }, 
    {
        "Author": "Elantris (109)", 
        "Date": "2014-01-19", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "Legion (110)", 
        "Date": "2014-01-19", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "Mistborn Trilogy (78)", 
        "Date": "2013-12-15", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "Mitosis_ A Reckoners Story (108)", 
        "Date": "2014-01-19", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "Steelheart (84)", 
        "Date": "2013-12-15", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "The Alloy of Law_ A Mistborn Novel (101)", 
        "Date": "2013-12-29", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "The Emperor's Soul (107)", 
        "Date": "2014-01-19", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "The Way of Kings (Stormlight Archive, The) (112)", 
        "Date": "2014-02-21", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "Warbreaker (Tor Fantasy) (114)", 
        "Date": "2014-03-26", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "Words of Radiance (Stormlight Archive, The) (113)", 
        "Date": "2014-03-05", 
        "Title": "Sanderson, Brandon"
    }, 
    {
        "Author": "Ancestor_ A Novel (57)", 
        "Date": "2013-12-15", 
        "Title": "Sigler, Scott"
    }, 
    {
        "Author": "Contagious (24)", 
        "Date": "2013-12-15", 
        "Title": "Sigler, Scott"
    }, 
    {
        "Author": "Infected_ A Novel (56)", 
        "Date": "2013-12-15", 
        "Title": "Sigler, Scott"
    }, 
    {
        "Author": "The All-Pro (Galactic Football League) (13)", 
        "Date": "2013-12-15", 
        "Title": "Sigler, Scott"
    }, 
    {
        "Author": "The MVP (Galactic Football League) (67)", 
        "Date": "2013-12-15", 
        "Title": "Sigler, Scott"
    }, 
    {
        "Author": "The Rookie (Galactic Football League) (76)", 
        "Date": "2013-12-15", 
        "Title": "Sigler, Scott"
    }, 
    {
        "Author": "The Starter (Galactic Football League) (75)", 
        "Date": "2013-12-15", 
        "Title": "Sigler, Scott"
    }, 
    {
        "Author": "Hyperion (Hyperion Cantos) (77)", 
        "Date": "2013-12-15", 
        "Title": "Simmons, Dan"
    }, 
    {
        "Author": "Human Plus (Book 4) (14)", 
        "Date": "2013-12-15", 
        "Title": "Simpson, David"
    }, 
    {
        "Author": "Post-Human (Book 2) (Trans-Human Prequel) (29)", 
        "Date": "2013-12-15", 
        "Title": "Simpson, David"
    }, 
    {
        "Author": "Sub-Human (Book 1) (Post-Human Prequel) (52)", 
        "Date": "2013-12-15", 
        "Title": "Simpson, David"
    }, 
    {
        "Author": "Trans-Human (Book 3) (Post-Human Sequel) (27)", 
        "Date": "2013-12-15", 
        "Title": "Simpson, David"
    }, 
    {
        "Author": "Cryptonomicon (17)", 
        "Date": "2013-12-15", 
        "Title": "Stephenson, Neal"
    }, 
    {
        "Author": "Heir of Novron (Riyria Revelations) (83)", 
        "Date": "2013-12-15", 
        "Title": "Sullivan, Michael J"
    }, 
    {
        "Author": "Hollow World (115)", 
        "Date": "2014-04-12", 
        "Title": "Sullivan, Michael J"
    }, 
    {
        "Author": "Rise of Empire (Riyria Revelations) (2)", 
        "Date": "2013-12-15", 
        "Title": "Sullivan, Michael J"
    }, 
    {
        "Author": "The Crown Tower (The Riyria Chronicles 1) (105)", 
        "Date": "2014-01-04", 
        "Title": "Sullivan, Michael J"
    }, 
    {
        "Author": "The Rose and the Thorn (The Riyria Chronicles) (106)", 
        "Date": "2014-01-04", 
        "Title": "Sullivan, Michael J"
    }, 
    {
        "Author": "Theft of Swords (Riyria Revelations) (10)", 
        "Date": "2013-12-15", 
        "Title": "Sullivan, Michael J"
    }, 
    {
        "Author": "Night Angel_ The Complete Trilogy (Night Angel Trilogy) (37)", 
        "Date": "2013-12-15", 
        "Title": "Weeks, Brent"
    }, 
    {
        "Author": "Perfect Shadow_ A Night Angel Novella (3)", 
        "Date": "2013-12-15", 
        "Title": "Weeks, Brent"
    }, 
    {
        "Author": "The Black Prism (Lightbringer) (53)", 
        "Date": "2013-12-15", 
        "Title": "Weeks, Brent"
    }, 
    {
        "Author": "The Blinding Knife (Lightbringer) (64)", 
        "Date": "2013-12-15", 
        "Title": "Weeks, Brent"
    }, 
    {
        "Author": "The 5th Wave (55)", 
        "Date": "2013-12-15", 
        "Title": "Yancey, Rick"
    }, 
    {
        "Author": "The Shadow of the Wind (22)", 
        "Date": "2013-12-15", 
        "Title": "Zafon, Carlos Ruiz"
    }
];