/*
Aufgabe 7: Skipiste mit Interfaces
Name: Daniel Sand
Matrikel: 256649
Datum: 30.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Was willst du tun, Alter? Zum Datensatz anlegen knall N. Zum Homie abchecken A. Bock auf nix? Knall X");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Gib mir dein Essensgeld oder deine Daten (jeweils mit Komma getrennt)! von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 -> w oder 1 -> m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Martikelnummer her, sonst..."));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var dataArray = _input.split(","); // "Split" teilt den String und verteilt 5
        var studentData = {
            matrikelnummer: parseInt(dataArray[0]),
            name: dataArray[1],
            vorname: dataArray[2],
            alter: parseInt(dataArray[3]),
            geschlecht: parseInt(dataArray[4]) == 0,
            kommentar: dataArray[5]
        };
        students.push(studentData);
        var geschlecht;
        if (parseInt(dataArray[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "m�nnlich";
        }
        return "Hier hast dein Zeug. Und jetzt verschwinde!\n" + "\nMatrikelnummer: " + studentData.matrikelnummer + "\nName: " + studentData.vorname + studentData.name + "\nAlter: " + studentData.alter + "\nGeschlecht: " + +studentData.geschlecht + "\nKommentar: " + studentData.kommentar;
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                var geschlecht = students[i].geschlecht ? "weiblich" : "m�nnlich";
                return "Da hast du: " + students[i].matrikelnummer + "\n\nName: " + students[i].vorname + students[i].name + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else {
                return "Die Nummer gibts doch garnicht. Willst du mich verarschen?";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
