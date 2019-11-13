import React from 'react'

const List = () => {
    return (
        <div className='wrapper'>
        <div id="three-column" className="container">
        <div><span className="arrow-down"></span></div>
        <div id="tbox1">
            <div className="title">
                <h2>Maecenas luctus</h2>
            </div>
            <p>Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac suscipit mauris.
                Proin eu wisi suscipit nulla suscipit interdum.</p>
            <a href="#" className="button">Learn More</a>
        </div>
        <div id="tbox2">
            <div className="title">
                <h2>Integer gravida</h2>
            </div>
            <p>Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper suscipit eleifend. Donec mattis
                libero eget urna. Duis velit ac mauris.</p>
            <a href="#" className="button">Learn More</a>
        </div>
        <div id="tbox3">
            <div className="title">
                <h2>Praesent mauris</h2>
            </div>
            <p>Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum.
                Nullam non wisi a sem suscipit eleifend.</p>
            <a href="#" className="button">Learn More</a>
        </div>
    </div>
    <div id="portfolio" className="container">
        <div className="column1">
            <div className="box"> <a href="#"><img src="./src/assets/images/scr01.jpg" alt="" class="image image-full" /></a>
                <h3>Vestibulum venenatis</h3>
                <p>Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
                <a href="#" className="button button-small">Etiam posuere</a>
            </div>
        </div>
        <div className="column2">
            <div className="box"> <a href="#"><img src="./src/assets/images/scr02.jpg" alt="" className="image image-full" /></a>
                <h3>Praesent scelerisque</h3>
                <p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
                <a href="#" className="button button-small">Etiam posuere</a>
            </div>
        </div>
        <div className="column3">
            <div className="box"> <a href="#"><img src="./src/assets/images/scr03.jpg" alt="" className="image image-full" /></a>
                <h3>Donec dictum metus</h3>
                <p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
                <a href="#" className="button button-small">Etiam posuere</a>
            </div>
        </div>
        <div className="column4">
            <div className="box"> <a href="#"><img src="./src/assets/images/scr04.jpg" alt="" className="image image-full" /></a>
                <h3>Mauris vulputate dolor</h3>
                <p>Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
                <a href="#" className="button button-small">Etiam posuere</a>
            </div>
        </div>
    </div>
    </div>
    )
}

export default List;

