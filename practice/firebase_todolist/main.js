
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyART1v3wDFXbS4uJFQnKMtPat_D8KiGl9w",
    authDomain: "todolist-test-3acd2.firebaseapp.com",
    databaseURL: "https://todolist-test-3acd2.firebaseio.com",
    projectId: "todolist-test-3acd2",
    storageBucket: "todolist-test-3acd2.appspot.com",
    messagingSenderId: "671710777382",
    appId: "1:671710777382:web:326576d9674136c30cd6e7",
    measurementId: "G-3XL6X52J4G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// database
var db = firebase.database();

// Add
let db_push = () => {
    let push_value = document.querySelector("#push_input")
    if (push_value.value != '') {
        db.ref("/todolist").push(push_value.value)
        push_value.value = ''
    } else {
        alert('ADD Input can not be empty!')
    }
}
let add_button = document.querySelector('#add_button')
add_button.addEventListener('click', db_push)

// Data listed
db.ref("/todolist").on('value', function (snapshot) {
    let data = snapshot.val();
    let task = Object.values(data)
    const reversed_task = task.reverse();

    // HTML Update
    document.querySelector('#contents').innerHTML = ''
    reversed_task.forEach((element) => {
        document.querySelector('#contents').innerHTML += `
                    <div class="task">
                        <h1>${element}</h1>
                        <button class="del_button">DELETE</button>
                        <input class="update_input" type="text" placeholder="Input update data">
                        <button class="update_button">UPDATE</button>
                    </div>
                `
    });

    // Delete
    let delete_button = document.querySelectorAll('.del_button')
    for (let index = 0; index < delete_button.length; index++) {
        delete_button[index].addEventListener('click', () => {
            let task_key = Object.keys(data)
            const reversed_task_key = task_key.reverse();
            db.ref("/todolist").child(reversed_task_key[index]).remove()
        })
    }

    // Update
    let update_button = document.querySelectorAll('.update_button')
    let update_input = document.querySelectorAll('.update_input')
    for (let index = 0; index < delete_button.length; index++) {
        update_button[index].addEventListener('click', () => {
            let task_key = Object.keys(data)
            const reversed_task_key = task_key.reverse();
            let key = reversed_task_key[index].toString()
            let value = update_input[index].value

            let obj = {};
            obj[key] = value;

            if (value != '') {
                db.ref("/todolist").update(obj)
            } else {
                alert('UPDATE Input can not be empty!')
            }
        })
    }

    // Complete
    let complete = document.querySelectorAll('.task h1')
    for (let index = 0; index < complete.length; index++) {
        complete[index].addEventListener('click', () => {
            complete[index].classList.toggle("click_h1");
        })
    }
});