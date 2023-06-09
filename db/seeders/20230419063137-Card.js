'use strict';

const cards = [
  { en: 'Apple', ru: 'Яблоко', deckId: 1 },
  { en: 'Banana', ru: 'Банан', deckId: 1 },
  { en: 'Orange', ru: 'Апельсин', deckId: 1 },
  { en: 'Pineapple', ru: 'Ананас', deckId: 1 },
  { en: 'Strawberry', ru: 'Клубника', deckId: 1 },
  { en: 'Grapes', ru: 'Виноград', deckId: 1 },
  { en: 'Watermelon', ru: 'Арбуз', deckId: 1 },
  { en: 'Peach', ru: 'Персик', deckId: 1 },
  { en: 'Cherry', ru: 'Вишня', deckId: 1 },
  { en: 'Pear', ru: 'Груша', deckId: 1 },
  { en: 'Cucumber', ru: 'Огурец', deckId: 1 },
  { en: 'Tomato', ru: 'Помидор', deckId: 1 },
  { en: 'Potato', ru: 'Картофель', deckId: 1 },
  { en: 'Carrot', ru: 'Морковь', deckId: 1 },
  { en: 'Cabbage', ru: 'Капуста', deckId: 1 },
  { en: 'Broccoli', ru: 'Брокколи', deckId: 1 },
  { en: 'Zucchini', ru: 'Цуккини', deckId: 1 },
  { en: 'Eggplant', ru: 'Баклажан', deckId: 1 },
  { en: 'Pepper', ru: 'Перец', deckId: 1 },
  { en: 'Onion', ru: 'Лук', deckId: 1 },
  { en: 'Fashion', ru: 'Мода', deckId: 2 },
  { en: 'Style', ru: 'Стиль', deckId: 2 },
  { en: 'Trend', ru: 'Тренд', deckId: 2 },
  { en: 'Designer', ru: 'Дизайнер', deckId: 2 },
  { en: 'Model', ru: 'Модель', deckId: 2 },
  { en: 'Haute couture', ru: 'Высшая мода', deckId: 2 },
  { en: 'Accessories', ru: 'Аксессуары', deckId: 2 },
  { en: 'Footwear', ru: 'Обувь', deckId: 2 },
  { en: 'Jewelry', ru: 'Ювелирные изделия', deckId: 2 },
  { en: 'Makeup', ru: 'Макияж', deckId: 2 },
  { en: 'Runway', ru: 'Подиум', deckId: 2 },
  { en: 'Catwalk', ru: 'Коттедж', deckId: 2 },
  { en: 'Fashionista', ru: 'Модница', deckId: 2 },
  { en: 'Glamorous', ru: 'Гламурный', deckId: 2 },
  { en: 'Chic', ru: 'Шик', deckId: 2 },
  { en: 'Trendy', ru: 'Модный', deckId: 2 },
  { en: 'Vintage', ru: 'Винтаж', deckId: 2 },
  { en: 'Streetwear', ru: 'Уличная мода', deckId: 2 },
  { en: 'Denim', ru: 'Джинсы', deckId: 2 },
  { en: 'Leather', ru: 'Кожа', deckId: 2 },
  { en: 'head', ru: 'голова', deckId: 3 },
  { en: 'face', ru: 'лицо', deckId: 3 },
  { en: 'eye', ru: 'глаз', deckId: 3 },
  { en: 'ear', ru: 'ухо', deckId: 3 },
  { en: 'nose', ru: 'нос', deckId: 3 },
  { en: 'mouth', ru: 'рот', deckId: 3 },
  { en: 'tooth', ru: 'зуб', deckId: 3 },
  { en: 'tongue', ru: 'язык', deckId: 3 },
  { en: 'neck', ru: 'шея', deckId: 3 },
  { en: 'shoulder', ru: 'плечо', deckId: 3 },
  { en: 'arm', ru: 'рука', deckId: 3 },
  { en: 'elbow', ru: 'локоть', deckId: 3 },
  { en: 'wrist', ru: 'запястье', deckId: 3 },
  { en: 'hand', ru: 'ладонь', deckId: 3 },
  { en: 'finger', ru: 'палец', deckId: 3 },
  { en: 'chest', ru: 'грудь', deckId: 3 },
  { en: 'stomach', ru: 'живот', deckId: 3 },
  { en: 'back', ru: 'спина', deckId: 3 },
  { en: 'leg', ru: 'нога', deckId: 3 },
  { en: 'foot', ru: 'ступня', deckId: 3 },
  { en: 'Football', ru: 'Футбол', deckId: 4 },
  { en: 'Basketball', ru: 'Баскетбол', deckId: 4 },
  { en: 'Tennis', ru: 'Теннис', deckId: 4 },
  { en: 'Volleyball', ru: 'Волейбол', deckId: 4 },
  { en: 'Swimming', ru: 'Плавание', deckId: 4 },
  { en: 'Skiing', ru: 'Лыжный спорт', deckId: 4 },
  { en: 'Snowboarding', ru: 'Сноубординг', deckId: 4 },
  { en: 'Cycling', ru: 'Велоспорт', deckId: 4 },
  { en: 'Hiking', ru: 'Пеший туризм', deckId: 4 },
  { en: 'Running', ru: 'Бег', deckId: 4 },
  { en: 'Boxing', ru: 'Бокс', deckId: 4 },
  { en: 'Wrestling', ru: 'Борьба', deckId: 4 },
  { en: 'Gymnastics', ru: 'Гимнастика', deckId: 4 },
  { en: 'Baseball', ru: 'Бейсбол', deckId: 4 },
  { en: 'Hockey', ru: 'Хоккей', deckId: 4 },
  { en: 'Rugby', ru: 'Регби', deckId: 4 },
  { en: 'Golf', ru: 'Гольф', deckId: 4 },
  { en: 'Table tennis', ru: 'Настольный теннис', deckId: 4 },
  { en: 'Athletics', ru: 'Легкая атлетика', deckId: 4 },
  { en: 'Martial arts', ru: 'Боевые искусства', deckId: 4 },
  { en: 'shirt', ru: 'рубашка', deckId: 5 },
  { en: 'pants', ru: 'брюки', deckId: 5 },
  { en: 'dress', ru: 'платье', deckId: 5 },
  { en: 'skirt', ru: 'юбка', deckId: 5 },
  { en: 'jacket', ru: 'куртка', deckId: 5 },
  { en: 'sweater', ru: 'свитер', deckId: 5 },
  { en: 'coat', ru: 'пальто', deckId: 5 },
  { en: 'jeans', ru: 'джинсы', deckId: 5 },
  { en: 'shorts', ru: 'шорты', deckId: 5 },
  { en: 'blouse', ru: 'блузка', deckId: 5 },
  { en: 'tie', ru: 'галстук', deckId: 5 },
  { en: 'scarf', ru: 'шарф', deckId: 5 },
  { en: 'gloves', ru: 'перчатки', deckId: 5 },
  { en: 'hat', ru: 'шляпа', deckId: 5 },
  { en: 'socks', ru: 'носки', deckId: 5 },
  { en: 'shoes', ru: 'обувь', deckId: 5 },
  { en: 'boots', ru: 'ботинки', deckId: 5 },
  { en: 'sandals', ru: 'сандалии', deckId: 5 },
  { en: 'sneakers', ru: 'кроссовки', deckId: 5 },
  { en: 'hoodie', ru: 'худи', deckId: 5 },
  { en: 'Apple', ru: 'Яблоко', deckId: 6 },
  { en: 'Bread', ru: 'Хлеб', deckId: 6 },
  { en: 'Cheese', ru: 'Сыр', deckId: 6 },
  { en: 'Coffee', ru: 'Кофе', deckId: 6 },
  { en: 'Eggs', ru: 'Яйца', deckId: 6 },
  { en: 'Fish', ru: 'Рыба', deckId: 6 },
  { en: 'Grapes', ru: 'Виноград', deckId: 6 },
  { en: 'Hamburger', ru: 'Гамбургер', deckId: 6 },
  { en: 'Ice cream', ru: 'Мороженое', deckId: 6 },
  { en: 'Juice', ru: 'Сок', deckId: 6 },
  { en: 'Ketchup', ru: 'Кетчуп', deckId: 6 },
  { en: 'Lemonade', ru: 'Лимонад', deckId: 6 },
  { en: 'Milk', ru: 'Молоко', deckId: 6 },
  { en: 'Nuts', ru: 'Орехи', deckId: 6 },
  { en: 'Pizza', ru: 'Пицца', deckId: 6 },
  { en: 'Salad', ru: 'Салат', deckId: 6 },
  { en: 'Tea', ru: 'Чай', deckId: 6 },
  { en: 'Water', ru: 'Вода', deckId: 6 },
  { en: 'Yogurt', ru: 'Йогурт', deckId: 6 },
  { en: 'Zucchini', ru: 'Цукини', deckId: 6 },
  { en: 'teacher', ru: 'учитель', deckId: 7 },
  { en: 'doctor', ru: 'врач', deckId: 7 },
  { en: 'engineer', ru: 'инженер', deckId: 7 },
  { en: 'lawyer', ru: 'адвокат', deckId: 7 },
  { en: 'nurse', ru: 'медсестра', deckId: 7 },
  { en: 'scientist', ru: 'ученый', deckId: 7 },
  { en: 'writer', ru: 'писатель', deckId: 7 },
  { en: 'journalist', ru: 'журналист', deckId: 7 },
  { en: 'programmer', ru: 'программист', deckId: 7 },
  { en: 'accountant', ru: 'бухгалтер', deckId: 7 },
  { en: 'dentist', ru: 'стоматолог', deckId: 7 },
  { en: 'architect', ru: 'архитектор', deckId: 7 },
  { en: 'pilot', ru: 'пилот', deckId: 7 },
  { en: 'chef', ru: 'повар', deckId: 7 },
  { en: 'musician', ru: 'музыкант', deckId: 7 },
  { en: 'actor', ru: 'актер', deckId: 7 },
  { en: 'salesperson', ru: 'продавец', deckId: 7 },
  { en: 'mechanic', ru: 'механик', deckId: 7 },
  { en: 'electrician', ru: 'электрик', deckId: 7 },
  { en: 'plumber', ru: 'сантехник', deckId: 7 },
  { en: 'guitar', ru: 'гитара', deckId: 8 },
  { en: 'piano', ru: 'пианино', deckId: 8 },
  { en: 'violin', ru: 'скрипка', deckId: 8 },
  { en: 'drums', ru: 'барабаны', deckId: 8 },
  { en: 'trumpet', ru: 'труба', deckId: 8 },
  { en: 'flute', ru: 'флейта', deckId: 8 },
  { en: 'clarinet', ru: 'кларнет', deckId: 8 },
  { en: 'saxophone', ru: 'саксофон', deckId: 8 },
  { en: 'bass guitar', ru: 'бас-гитара', deckId: 8 },
  { en: 'cello', ru: 'виолончель', deckId: 8 },
  { en: 'accordion', ru: 'аккордеон', deckId: 8 },
  { en: 'harmonica', ru: 'губная гармошка', deckId: 8 },
  { en: 'trombone', ru: 'тромбон', deckId: 8 },
  { en: 'harp', ru: 'арфа', deckId: 8 },
  { en: 'ukulele', ru: 'укеле́ле', deckId: 8 },
  { en: 'banjo', ru: 'банджо', deckId: 8 },
  { en: 'mandolin', ru: 'мандолина', deckId: 8 },
  { en: 'xylophone', ru: 'ксилофон', deckId: 8 },
  { en: 'bagpipes', ru: 'волынка', deckId: 8 },
  { en: 'dulcimer', ru: 'цимбал', deckId: 8 },
  { en: 'mathematics', ru: 'математика', deckId: 9 },
  { en: 'history', ru: 'история', deckId: 9 },
  { en: 'biology', ru: 'биология', deckId: 9 },
  { en: 'chemistry', ru: 'химия', deckId: 9 },
  { en: 'physics', ru: 'физика', deckId: 9 },
  { en: 'geography', ru: 'география', deckId: 9 },
  { en: 'literature', ru: 'литература', deckId: 9 },
  { en: 'foreign language', ru: 'иностранный язык', deckId: 9 },
  { en: 'physical education', ru: 'физическая культура', deckId: 9 },
  { en: 'art', ru: 'изобразительное искусство', deckId: 9 },
  { en: 'music', ru: 'музыка', deckId: 9 },
  { en: 'social studies', ru: 'обществознание', deckId: 9 },
  { en: 'computer science', ru: 'информатика', deckId: 9 },
  { en: 'health education', ru: 'здоровье', deckId: 9 },
  { en: 'ethics', ru: 'этика', deckId: 9 },
  { en: 'psychology', ru: 'психология', deckId: 9 },
  { en: 'religious studies', ru: 'религиоведение', deckId: 9 },
  { en: 'economics', ru: 'экономика', deckId: 9 },
  { en: 'philosophy', ru: 'философия', deckId: 9 },
  { en: 'sociology', ru: 'социология', deckId: 9 },
  { en: 'Mother', ru: 'Мать', deckId: 10 },
  { en: 'Father', ru: 'Отец', deckId: 10 },
  { en: 'Sister', ru: 'Сестра', deckId: 10 },
  { en: 'Brother', ru: 'Брат', deckId: 10 },
  { en: 'Grandmother', ru: 'Бабушка', deckId: 10 },
  { en: 'Grandfather', ru: 'Дедушка', deckId: 10 },
  { en: 'Aunt', ru: 'Тетя', deckId: 10 },
  { en: 'Uncle', ru: 'Дядя', deckId: 10 },
  { en: 'Cousin', ru: 'Кузен', deckId: 10 },
  { en: 'Niece', ru: 'Племянница', deckId: 10 },
  { en: 'Nephew', ru: 'Племянник', deckId: 10 },
  { en: 'Daughter', ru: 'Дочь', deckId: 10 },
  { en: 'Son', ru: 'Сын', deckId: 10 },
  { en: 'Wife', ru: 'Жена', deckId: 10 },
  { en: 'Husband', ru: 'Муж', deckId: 10 },
  { en: 'Stepmother', ru: 'Мачеха', deckId: 10 },
  { en: 'Stepfather', ru: 'Отчим', deckId: 10 },
  { en: 'Stepsister', ru: 'Сводная сестра', deckId: 10 },
  { en: 'Stepbrother', ru: 'Сводный брат', deckId: 10 },
  { en: 'Half-sister', ru: 'Сестра по отцу/матери', deckId: 10 },
  { en: 'Half-brother', ru: 'Брат по отцу/матери', deckId: 10 },
  { en: 'Happiness', ru: 'Счастье', deckId: 11 },
  { en: 'Sadness', ru: 'Грусть', deckId: 11 },
  { en: 'Anger', ru: 'Гнев', deckId: 11 },
  { en: 'Joy', ru: 'Радость', deckId: 11 },
  { en: 'Love', ru: 'Любовь', deckId: 11 },
  { en: 'Fear', ru: 'Страх', deckId: 11 },
  { en: 'Anxiety', ru: 'Тревога', deckId: 11 },
  { en: 'Excitement', ru: 'Волнение', deckId: 11 },
  { en: 'Enthusiasm', ru: 'Энтузиазм', deckId: 11 },
  { en: 'Boredom', ru: 'Скука', deckId: 11 },
  { en: 'Frustration', ru: 'Разочарование', deckId: 11 },
  { en: 'Surprise', ru: 'Удивление', deckId: 11 },
  { en: 'Disgust', ru: 'Отвращение', deckId: 11 },
  { en: 'Embarrassment', ru: 'Смущение', deckId: 11 },
  { en: 'Guilt', ru: 'Вина', deckId: 11 },
  { en: 'Pride', ru: 'Гордость', deckId: 11 },
  { en: 'Shame', ru: 'Стыд', deckId: 11 },
  { en: 'Confusion', ru: 'Смятение', deckId: 11 },
  { en: 'Curiosity', ru: 'Любопытство', deckId: 11 },
  { en: 'Hope', ru: 'Надежда', deckId: 11 },
  { en: 'Car', ru: 'Машина', deckId: 12 },
  { en: 'Bus', ru: 'Автобус', deckId: 12 },
  { en: 'Train', ru: 'Поезд', deckId: 12 },
  { en: 'Bicycle', ru: 'Велосипед', deckId: 12 },
  { en: 'Motorcycle', ru: 'Мотоцикл', deckId: 12 },
  { en: 'Boat', ru: 'Лодка', deckId: 12 },
  { en: 'Airplane', ru: 'Самолет', deckId: 12 },
  { en: 'Helicopter', ru: 'Вертолет', deckId: 12 },
  { en: 'Subway', ru: 'Метро', deckId: 12 },
  { en: 'Taxi', ru: 'Такси', deckId: 12 },
  { en: 'Truck', ru: 'Грузовик', deckId: 12 },
  { en: 'Scooter', ru: 'Скутер', deckId: 12 },
  { en: 'Ferry', ru: 'Паром', deckId: 12 },
  { en: 'Van', ru: 'Фургон', deckId: 12 },
  { en: 'Tram', ru: 'Трамвай', deckId: 12 },
  { en: 'Moped', ru: 'Мопед', deckId: 12 },
  { en: 'Segway', ru: 'Сегвей', deckId: 12 },
  { en: 'Roller skates', ru: 'Роликовые коньки', deckId: 12 },
  { en: 'Sled', ru: 'Сани', deckId: 12 },
  { en: 'Cable car', ru: 'Канатная дорога', deckId: 12 },
  { en: 'One', ru: 'Один', deckId: 13 },
  { en: 'Two', ru: 'Два', deckId: 13 },
  { en: 'Three', ru: 'Три', deckId: 13 },
  { en: 'Four', ru: 'Четыре', deckId: 13 },
  { en: 'Five', ru: 'Пять', deckId: 13 },
  { en: 'Six', ru: 'Шесть', deckId: 13 },
  { en: 'Seven', ru: 'Семь', deckId: 13 },
  { en: 'Eight', ru: 'Восемь', deckId: 13 },
  { en: 'Nine', ru: 'Девять', deckId: 13 },
  { en: 'Ten', ru: 'Десять', deckId: 13 },
  { en: 'Eleven', ru: 'Одиннадцать', deckId: 13 },
  { en: 'Twelve', ru: 'Двенадцать', deckId: 13 },
  { en: 'Thirteen', ru: 'Тринадцать', deckId: 13 },
  { en: 'Fourteen', ru: 'Четырнадцать', deckId: 13 },
  { en: 'Fifteen', ru: 'Пятнадцать', deckId: 13 },
  { en: 'Sixteen', ru: 'Шестнадцать', deckId: 13 },
  { en: 'Seventeen', ru: 'Семнадцать', deckId: 13 },
  { en: 'Eighteen', ru: 'Восемнадцать', deckId: 13 },
  { en: 'Nineteen', ru: 'Девятнадцать', deckId: 13 },
  { en: 'Twenty', ru: 'Двадцать', deckId: 13 },
  { en: 'Table', ru: 'Стол', deckId: 14 },
  { en: 'Chair', ru: 'Стул', deckId: 14 },
  { en: 'Sofa', ru: 'Диван', deckId: 14 },
  { en: 'Bed', ru: 'Кровать', deckId: 14 },
  { en: 'Mattress', ru: 'Матрас', deckId: 14 },
  { en: 'Pillow', ru: 'Подушка', deckId: 14 },
  { en: 'Blanket', ru: 'Одеяло', deckId: 14 },
  { en: 'Curtains', ru: 'Шторы', deckId: 14 },
  { en: 'Tablecloth', ru: 'Скатерть', deckId: 14 },
  { en: 'Candlestick', ru: 'Подсвечник', deckId: 14 },
  { en: 'Teapot', ru: 'Чайник', deckId: 14 },
  { en: 'Coffee maker', ru: 'Кофеварка', deckId: 14 },
  { en: 'Toaster', ru: 'Тостер', deckId: 14 },
  { en: 'Microwave', ru: 'Микроволновка', deckId: 14 },
  { en: 'Refrigerator', ru: 'Холодильник', deckId: 14 },
  { en: 'Washing machine', ru: 'Стиральная машина', deckId: 14 },
  { en: 'Vacuum cleaner', ru: 'Пылесос', deckId: 14 },
  { en: 'Iron', ru: 'Утюг', deckId: 14 },
  { en: 'Ironing board', ru: 'Гладильная доска', deckId: 14 },
  { en: 'Trash can', ru: 'Мусорное ведро', deckId: 14 },
  { en: 'sun', ru: 'солнце', deckId: 15 },
  { en: 'rain', ru: 'дождь', deckId: 15 },
  { en: 'cloud', ru: 'облако', deckId: 15 },
  { en: 'wind', ru: 'ветер', deckId: 15 },
  { en: 'snow', ru: 'снег', deckId: 15 },
  { en: 'fog', ru: 'туман', deckId: 15 },
  { en: 'thunderstorm', ru: 'гроза', deckId: 15 },
  { en: 'hail', ru: 'град', deckId: 15 },
  { en: 'lightning', ru: 'молния', deckId: 15 },
  { en: 'humidity', ru: 'влажность', deckId: 15 },
  { en: 'temperature', ru: 'температура', deckId: 15 },
  { en: 'pressure', ru: 'давление', deckId: 15 },
  { en: 'tornado', ru: 'торнадо', deckId: 15 },
  { en: 'hurricane', ru: 'ураган', deckId: 15 },
  { en: 'drought', ru: 'засуха', deckId: 15 },
  { en: 'flood', ru: 'наводнение', deckId: 15 },
  { en: 'meteorologist', ru: 'метеоролог', deckId: 15 },
  { en: 'forecast', ru: 'прогноз', deckId: 15 },
  { en: 'climate', ru: 'климат', deckId: 15 },
  { en: 'weatherman', ru: 'прогнозист', deckId: 15 },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Cards', cards, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
