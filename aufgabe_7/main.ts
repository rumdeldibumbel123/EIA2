/*
Aufgabe 7: Skipiste mit Interfaces
Name: Daniel Sand
Matrikel: 256649
Datum: 30.11.2017

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace StudiVZ {
    interface StudentData {
        // Datenstruktur
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Was willst du tun, Alter? Zum Datensatz anlegen knall N. Zum Homie abchecken A. Bock auf nix? Knall X");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Gib mir dein Essensgeld oder deine Daten (jeweils mit Komma getrennt)! von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 -> w oder 1 -> m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Martikelnummer her, sonst..."));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArray: string[] = _input.split(",");   // "Split" teilt den String und verteilt 5
        let studentData: StudentData = {
            matrikelnummer: parseInt(dataArray[0]),          //parseInt wandelt einen String in eine Number um
            name: dataArray[1],                    //nimmt mit [1] das zweite Element aus dem Array
            vorname: dataArray[2],
            alter: parseInt(dataArray[3]),
            geschlecht: parseInt(dataArray[4]) == 0,
            kommentar: dataArray[5]
        };

        students.push(studentData);

        let geschlecht: string;
        if (parseInt(dataArray[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "männlich";
        }

        return "Hier hast dein Zeug. Und jetzt verschwinde!\n" + "\nMatrikelnummer: " + studentData.matrikelnummer + "\nName: " + studentData.vorname + studentData.name + "\nAlter: " + studentData.alter + "\nGeschlecht: " + + studentData.geschlecht + "\nKommentar: " + studentData.kommentar;
    }

    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                let geschlecht: string = students[i].geschlecht ? "weiblich" : "männlich";
                return "Da hast du: " + students[i].matrikelnummer + "\n\nName: " + students[i].vorname + students[i].name + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }

            else {
                return "Die Nummer gibts doch garnicht. Willst du mich verarschen?";
            }
        }
    }
}