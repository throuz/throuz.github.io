
//以下為fetch
fetch('https://ajax-lesson.digipack-develop.com/news')
    .then(function (response) {
        var res = response.json()
        return res;
    })
    .then(function (myJson) {
        $.each(myJson, (index, object) => {
            let old_content = $('#cards').html()
            $('#cards').html(`
                <div class="card">
                    <a href="${object.href}" target="_blank">
                        <div class="img_box">
                            <img src="${object.image_url}" alt="">
                        </div>
                        <div class="news">
                            <h3>${object.title}</h3>
                            <span>發布日期:${object.date}</span>
                            <div class="content">${object.content}</div>
                        </div>
                    </a>
                </div>
                ${old_content}
                `)
        })
    });

//點擊新增留言按鈕，執行以下動作
$('#send').click(() => {
    let title = $('#title').val()
    let content = $('#content').val()
    let hyperlink = $('#hyperlink').val()
    let picturelink = $('#picturelink').val()

    let current_date = new Date()

    let date = current_date.getFullYear() + '/' + (current_date.getMonth() + 1) + '/' + current_date.getDate()

    send_data = {
        'title': title,
        'content': content,
        'href': hyperlink,
        'image_url': picturelink,
        'date': date
    }

    //以下為ajax
    $.ajax({
        url: 'https://ajax-lesson.digipack-develop.com/news',
        method: 'POST',
        data: send_data,
        success: (res) => {
            console.log(res);
        },
        error: (error_data) => {
            console.log(error_data);
        }
    })

    $('input, textarea').val('')

    // Fake update
    let old_content = $('#cards').html()
    $('#cards').html(`
        <div class="card">
            <a href="${send_data.href}" target="_blank">
                <div class="img_box">
                    <img src="${send_data.image_url}" alt="">
                </div>
                <div class="news">
                    <h3>${send_data.title}</h3>
                    <span>發布日期:${send_data.date}</span>
                    <div class="content">${send_data.content}</div>
                </div>
            </a>
        </div>
        ${old_content}
        `)

    //以下為fetch
    // fetch('http://ajax_lesson.digipack-develop.com/news')
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(myJson) {
    //     $.each(myJson, (index, object) => {
    //         let old_content = $('#cards').html()
    //         $('#cards').html(`
    //         <div class="card">
    //             <a href="${object.href}" target="_blank">
    //                 <div class="img_box">
    //                     <img src="${object.image_url}" alt="">
    //                 </div>
    //                 <div class="news">
    //                     <h3>${object.title}</h3>
    //                     <span>發布日期:${object.date}</span>
    //                     <div class="content">${object.content}</div>
    //                 </div>
    //             </a>
    //         </div>
    //         ${old_content}
    //         `)
    //     })
    // });
})