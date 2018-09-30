ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.187807, 44.965109],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.187807, 44.965109]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: '',
                hintContent: 'Мы здесь'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)
        ;
}
