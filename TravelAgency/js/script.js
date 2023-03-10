let adress = [
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.369861668396!2d115.26972611538838!3d-8.463366787909063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22350ba271d9b%3A0x1f3f85d6e9a08491!2sKuwarasan%20A%20Pramana%20Experience!5e0!3m2!1sru!2sua!4v1678442565785!5m2!1sru!2sua',

    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38640.911938485864!2d115.25159458162389!3d-8.499478949237185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23daef297b357%3A0x44f6f5dbcf51c7a5!2sQueen%20At%20Gunung%20Sari!5e0!3m2!1sru!2sua!4v1678444763885!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',

    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1256114369867!2d115.25228971538854!3d-8.487165788220853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d335e2cdb41%3A0x19a98f189b019894!2sUlun%20Ubud%20Resort!5e0!3m2!1sru!2sua!4v1678444965789!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',

    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.75742952414515!2d115.25807172427551!3d-8.524614554860822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f743ef819c9%3A0xf680b33b3e5b7762!2sAlam%20Jiwa!5e0!3m2!1sru!2sua!4v1678449957428!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
]

let buttons = document.querySelectorAll('button');
let iframe = document.querySelector('iframe');
let popup = document.querySelector('.popup');

// вішаємо на кнопки обробник подій та при кліку відображаємо попап з мапою
for(let x = 0; x < buttons.length; x++){
    buttons[x].addEventListener('click', function(e){
        let index = this.dataset.index;
        if(e){
            document.body.style.overflow = 'hidden';

        }
        switch(index){
            case '1':
                iframe.src = adress[0];
                popup.style.display = 'flex';
                break;
            case '2':
                iframe.src = adress[1];
                popup.style.display = 'flex';
                break;
            case '3':
                iframe.src = adress[2];
                popup.style.display = 'flex';
                break;
            case '4':
                iframe.src = adress[3];
                popup.style.display = 'flex';
                break;
        }

        // при кліку поза мапою ховаємо попап
        popup.addEventListener('click', function(){
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';

        })

    })
}


// по кліку по бургер меню відображаємо список навігації

let burgerBtn = document.querySelector('.burger');
let navList = document.querySelector('.burger_menu');
let close = document.querySelector('.close_burger');

burgerBtn.addEventListener('click', function(){
    navList.style.right = '0';
    close.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// закриваємо бургер меню при кліку на хрестик

close.addEventListener('click', function(){
    navList.style.right = '-100%';
    close.style.display = 'none';
    document.body.style.overflow = 'auto';
})
