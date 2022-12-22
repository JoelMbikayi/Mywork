const PROMOTION_URL = 'http://localhost:3000/api/v1/promotion';
const COURSE_URL='http://localhost:3000/api/v1/cours';

//Giving a API URL, that function hits a fetch to the URL & return the json response
async function getPromotionData(url) {

    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();

    return data;
}


function showPromotionList(data) {
    const list_to_fill = document.getElementById("promotion_list_group")
    let list_template = '';
    // Loop to access all rows
    for (let record of data.result) {
        list_template += `<option value=${record.idPromotion}>${record.nom} ${record.filiere}</option>`;
    }
    // Setting innerHTML as tab variable
    list_to_fill.innerHTML = list_template;

}

//Get promotion data
getPromotionData(PROMOTION_URL).then(data => {
    showPromotionList(data)
})



//Giving a API URL, that function hits a fetch to the URL & return the json response
async function getCourseData(url) {

    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();

    return data
}


function showCourseList(data) {
    const list_to_fill = document.getElementById("course_list");

    // Loop to access all rows
    document.getElementById('promotion_list').addEventListener('change', (e) => {
        let list_template = '';

        //We empty #attendanceList and #seanceList
        document.getElementById('seanceList').innerHTML = "";
        document.getElementById('attendanceList').innerHTML = "";

        for (let record of data.result) {

            if (record.Promotion_idPromotion == e.target.value) {
                list_template += `
                    <tr class="even pointer cours_item"  data-idcours=${record.idCours}>
                        <td>${record.idCours}</td>
                        <td>${record.nom}</td>
                        <td>${record.ponderation}</td>
                    </tr>
                    `;
            }

        }
        // Fill the list with data
        list_to_fill.innerHTML = list_template;
    })

}

//Get course data
getCourseData(COURSE_URL).then(data => {
    showCourseList(data)
});


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const SEANCE_URL='http://localhost:3000/api/v1/seance';
const PRESENCE_URL = 'http://localhost:3000/api/v1/presence';

//Giving a API URL, that function hits a fetch to the URL & return the json response
async function getSeanceData(url) {

    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();

    return data
}

function showSeanceList(data) {
    const list_to_fill = document.getElementById("seanceList")
    let list_template = '';
    
    if (data.length){
        for (let record of data) {
            let seance_date = new Date(record.date),
                formatted_date = formatDate(seance_date);

            list_template += `<option value=${record.idSeance}>${formatted_date} de ${record.heure_debut} à ${record.heure_fin}</option>`;

        }
    }else{
        list_template = `<option value=${null}>Aucune séance enregistrée</option>`;
    }
    // Setting innerHTML as tab variable
    list_to_fill.innerHTML = list_template;

}

//Get seance data
window.onload = function () {
    let course_list = document.getElementById('course_list');
    course_list.addEventListener('click', (e) => {
            if (e.target && e.target.nodeName == 'TD'){
                let idcours = e.target.parentNode.getAttribute('data-idcours'),
                    url = SEANCE_URL + '/' + idcours;

                getSeanceData(url).then(data => {
                    console.log(data)
                    showSeanceList(data)
                });
                // We fill attendance list after clicking on a course item
                getCourseData(PRESENCE_URL).then(data => {
                    
                    showAttendanceList(document.getElementById('seanceList'), data)
                });
            }
        }
    )
}

function showAttendanceList(e, data){
    let list_to_fill = document.getElementById('attendanceList');
    let list_template = '';
    let i = 0;

    for (let record of data.result) {

        if (record.idSeance == e.value) {

            list_template += `
                <tr>
                    <th scope="row">${++i}</th>
                    <td>${record.nom_complet}</td>
                    <td>${record.matricule}</td>
                    <td>${record.presence}</td>
                </tr> 
            `;
        }

    }
    // Fill the list with data
    list_to_fill.innerHTML = list_template;

}


getCourseData(PRESENCE_URL).then(data => {
    document.getElementById('seanceList').addEventListener('change', (e) => {
        showAttendanceList(e.target, data);
    })
});