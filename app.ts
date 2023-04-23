let Workouts: Array<Workout> = new Array<Workout> // Массив со семи тренировками
let CurrentClientWorkouts: Array<Workout> = new Array<Workout> // Массив с тренировками конкретного пользователя
let Clients: Array<Client> = new Array<Client> // Массив с клиентами

let OurClient: Client // Информация об вошедшем клиенте

class Client {
    id: number
    Name: string
    Password: string

    constructor(fId: number,fName: string, fPassword: string) {
        this.Name = fName
        this.Password = fPassword
        this.id = fId
    }
}

function CreateClient() {
    let c1 = new Client(0,"petr", "123")
    let c2 = new Client(1,"ivan", "123")
    let c3 = new Client(2,"boris", "123")

    Clients.push(c1)
    Clients.push(c2)
    Clients.push(c3)
    console.log("user created")
}

class Workout {
    clientId: number;
    Exercise: string
    HowLong: string
    Kcal: number

    constructor(fClientId: number,fExercise: string, fHowLong: string, fKcal: number) {
        this.Exercise = fExercise;
        this.HowLong = fHowLong;
        this.Kcal = fKcal;
        this.clientId = fClientId
    }
}


function SaveExericeData() {
    let fromExerice = (<HTMLSelectElement>document.getElementById('fExercise')).value
    let fromHowLong = (<HTMLSelectElement>document.getElementById('fHowLong')).value
    let fromKcal = (<HTMLSelectElement>document.getElementById('fKcal')).value

    if (fromExerice == "") {

    }
    else if (fromHowLong == "") {

    }
    else if (fromKcal == "") {

    }
    else {
        let work = new Workout(OurClient.id, fromExerice, fromHowLong, Number(fromKcal))
        Workouts.push(work)
        console.log("done")
        let jsonArray = JSON.stringify(Workouts)
        localStorage.setItem("WorkoutArray", jsonArray)
    }
}

function CheckClient() {
    CreateClient();
    let fromName = (<HTMLSelectElement>document.getElementById('fName')).value
    let fromPassword = (<HTMLSelectElement>document.getElementById('fPassword')).value
    console.log(fromName)
    console.log(fromPassword)

    for (var i = 0; i < Clients.length; i++) {

        if (Clients[i].Name == fromName && Clients[i].Password == fromPassword) {
            console.log("found")
            OurClient = new Client(Clients[i].id, Clients[i].Name, Clients[i].Password)
            let ClientInfo = JSON.stringify(OurClient)
            localStorage.setItem("ClientInformation", ClientInfo)
            break;
        }
        else {
            console.log("Not found")
        }
    }
    RestoreWorkoutData(OurClient.id);
}

function RestoreWorkoutData(fClientId: number) {
    for (var i = 0; i < Workouts.length; i++) {
        if (Workouts[i].clientId == fClientId) {
            CurrentClientWorkouts.push(Workouts[i])
        }
    }
    let tempArr = JSON.stringify(CurrentClientWorkouts)
    localStorage.setItem("CurrentClientWorkouts", tempArr);
}

function LoadData() {
    if (localStorage.getItem("WorkoutArray") != null) {
        Workouts = JSON.parse(localStorage.getItem("WorkoutArray"))
    }
    if (localStorage.getItem("ClientInformation") != null) {
        OurClient = JSON.parse(localStorage.getItem("ClientInformation"))
        RestoreWorkoutData(OurClient.id)
    }
}

function ClearClientLoginData() {
    if (localStorage.getItem("ClientInformation") != null) {
        localStorage.removeItem("ClientInformation")
    }

}
LoadData()


