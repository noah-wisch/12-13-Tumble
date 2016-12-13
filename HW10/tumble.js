function init() {
    let button = document.querySelector('#get');
    let name = 'Beautiful Lady '

    button.addEventListener('click', function() {

        let parent = document.createElement('li');

        let img = document.createElement('img');
        parent.appendChild(img);
        img.src = "https://randomuser.me/api/portraits/women/85.jpg";

        let div = document.createElement('div')
        parent.appendChild(div);

        let header = document.createElement('h2');
        header.textContent = name;
        div.appendChild(header);

        let like = document.createElement('button');
        like.textContent = 'Like';
        like.classList.add('like');
        div.appendChild(like);

        let nope = document.createElement('button');
        nope.textContent = 'Nope';
        nope.classList.add('nope');
        div.appendChild(nope);

        like.addEventListener('click', function() {
            parent.classList.add('fade');
            console.log('Likes ' + name)
        });

        nope.addEventListener('click', function() {
            parent.classList.add('fade');
            console.log(name + 'has been noped. She is sad now.')

        });

        // let grandParent = document.querySelector('ul');
        // grandParent.appendChild(parent);

        console.log('clicked');
    });
}

window.addEventListener('load', init);
