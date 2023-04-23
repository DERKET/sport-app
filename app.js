var Workouts = new Array; // ������ �� ���� ������������
var CurrentClientWorkouts = new Array; // ������ � ������������ ����������� ������������
var Clients = new Array; // ������ � ���������
var OurClient; // ���������� �� �������� �������
var Client = /** @class */ (function () {
    function Client(fId, fName, fPassword) {
        this.Name = fName;
        this.Password = fPassword;
        this.id = fId;
    }
    return Client;
}());
function CreateClient() {
    var c1 = new Client(0, "petr", "123");
    var c2 = new Client(1, "ivan", "123");
    var c3 = new Client(2, "boris", "123");
    Clients.push(c1);
    Clients.push(c2);
    Clients.push(c3);
    console.log("user created");
}
var Workout = /** @class */ (function () {
    function Workout(fClientId, fExercise, fHowLong, fKcal) {
        this.Exercise = fExercise;
        this.HowLong = fHowLong;
        this.Kcal = fKcal;
        this.clientId = fClientId;
    }
    return Workout;
}());
function SaveExericeData() {
    var fromExerice = document.getElementById('fExercise').value;
    var fromHowLong = document.getElementById('fHowLong').value;
    var fromKcal = document.getElementById('fKcal').value;
    if (fromExerice == "") {
    }
    else if (fromHowLong == "") {
    }
    else if (fromKcal == "") {
    }
    else {
        var work = new Workout(OurClient.id, fromExerice, fromHowLong, Number(fromKcal));
        Workouts.push(work);
        console.log("done");
        var jsonArray = JSON.stringify(Workouts);
        localStorage.setItem("WorkoutArray", jsonArray);
    }
}
function CheckClient() {
    CreateClient();
    var fromName = document.getElementById('fName').value;
    var fromPassword = document.getElementById('fPassword').value;
    console.log(fromName);
    console.log(fromPassword);
    for (var i = 0; i < Clients.length; i++) {
        if (Clients[i].Name == fromName && Clients[i].Password == fromPassword) {
            console.log("found");
            OurClient = new Client(Clients[i].id, Clients[i].Name, Clients[i].Password);
            var ClientInfo = JSON.stringify(OurClient);
            localStorage.setItem("ClientInformation", ClientInfo);
            break;
        }
        else {
            console.log("Not found");
        }
    }
    RestoreWorkoutData(OurClient.id);
}
function RestoreWorkoutData(fClientId) {
    for (var i = 0; i < Workouts.length; i++) {
        if (Workouts[i].clientId == fClientId) {
            CurrentClientWorkouts.push(Workouts[i]);
        }
    }
    var tempArr = JSON.stringify(CurrentClientWorkouts);
    localStorage.setItem("CurrentClientWorkouts", tempArr);
}
function LoadData() {
    if (localStorage.getItem("WorkoutArray") != null) {
        Workouts = JSON.parse(localStorage.getItem("WorkoutArray"));
    }
    if (localStorage.getItem("ClientInformation") != null) {
        OurClient = JSON.parse(localStorage.getItem("ClientInformation"));
        RestoreWorkoutData(OurClient.id);
    }
}
function ClearClientLoginData() {
    if (localStorage.getItem("ClientInformation") != null) {
        localStorage.removeItem("ClientInformation");
    }
}
LoadData();
