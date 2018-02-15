CREATE TABLE usr (
    id		INTEGER PRIMARY KEY AUTOINCREMENT,
    login	TEXT,
    passwd	TEXT);

CREATE TABLE players (
    plid	INTEGER,
    usr		INTEGER,
    color	TEXT);
    
CREATE TABLE map (
    x		INTEGER,
    y		INTEGER,
    player	INTEGER);
    
INSERT INTO usr(login,passwd) VALUES ('Albert','pass'),('Bernard','pass'),
    ('Charles','pass'),('David','pass'),('Emile','pass'),('Fabian','pass'),
    ('Georges','pass'),('Hector','pass'),('Isidore','pass'),('Jean','pass');

INSERT INTO players (plid,usr,color) VALUES
    (0,null,''),(1,2,'B'),(2,6,'R'),(3,1,'G'),(4,8,'P'),(5,4,'Y'),(6,7,'C'),
    (7,3,'W'),(8,null,'K');

INSERT INTO map(x,y,player) VALUES 
 (0,0,0),(1,0,0),(2,0,0),(3,0,0),(4,0,0),(5,0,0),(6,0,0),(7,0,0),(8,0,0),(9,0,0),
 (0,1,0),(1,1,1),(2,1,0),(3,1,0),(4,1,0),(5,1,0),(6,1,0),(7,1,0),(8,1,3),(9,1,0),
 (0,2,0),(1,2,0),(2,2,0),(3,2,0),(4,2,0),(5,2,0),(6,2,0),(7,2,0),(8,2,0),(9,2,0),
 (0,3,0),(1,3,0),(2,3,0),(3,3,0),(4,3,0),(5,3,5),(6,3,0),(7,3,7),(8,3,0),(9,3,0),
 (0,4,0),(1,4,0),(2,4,6),(3,4,0),(4,4,0),(5,4,0),(6,4,0),(7,4,0),(8,4,0),(9,4,0),
 (0,5,0),(1,5,0),(2,5,0),(3,5,0),(4,5,0),(5,5,0),(6,5,0),(7,5,0),(8,5,0),(9,5,0),
 (0,6,0),(1,6,4),(2,6,0),(3,6,0),(4,6,0),(5,6,0),(6,6,0),(7,6,0),(8,6,2),(9,6,0),
 (0,7,0),(1,7,0),(2,7,0),(3,7,0),(4,7,0),(5,7,8),(6,7,0),(7,7,0),(8,7,0),(9,7,0);
