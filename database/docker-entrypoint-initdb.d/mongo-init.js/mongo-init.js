connection = new Mongo();
db = connection.getDB('booking');
db.users.insert({
    email: 'admin@mail.ru',
    passwordHash: '$2y$10$EYMcoK9XFEqwm5g9vXW4o.bLob5jJQMW1zrn8ypT5Dyx837ryo0Ha',
    name: 'Admin',
    contactPhone: '+33335436775',
    role: 'admin',
});

db.users.insert({
email: 'manager@mail.ru',
passwordHash: '$2y$10$H5WlzMrN6V1/hEdCytV0heC958ULLi2uoqQacdzKtErrK2Q/UJeni',
name: 'Manager',
contactPhone: '+11144567876',
role: 'manager',
});

db.users.insert({
    email: 'client@mail.ru',
    passwordHash: '$2y$10$N/maH9HvPml7J9PQqDg15eErqG2a7bNpHj//xUAHjwbdhRTa/MIdy',
    name: 'Client',
    contactPhone: '+94564054659',
    role: 'client',
});

db.hotels.insert({
  _id: ObjectId('66a03c03efad029c0db37f83'),
  title: 'The Aliance Hotel',
  description: '​New-York, Центр Манхэттена, 12,5 км до центра',
  createdAt: ISODate('2026-02-22T09:23:02.557+00:00'),
  updatedAt: ISODate('2026-02-22T09:23:02.557+00:00'),
  files: ''
});

db.hotels.insert({
  _id: ObjectId('66a03c28efad029c0db37f85'),
  title: 'The Carsol Hotel',
  description: 'Italy-Milan, Yekaterininskaya 590, 44 км до центра',
  createdAt: ISODate('2026-02-22T09:23:02.557+00:00'),
  updatedAt: ISODate('2026-02-22T09:23:02.557+00:00'),
  files: ''
});

db.rooms.insert({
  hotel: ObjectId('66a03c03efad029c0db37f83'),
    title: 'Классический номер c двуспальной кроватью',
    description: 'В номере комфортный вид с панорамными окнами, кондиционерами, холодильниками, кабельным ТВ, москитными сетками и бесплатным Wi-Fi. В номере предусмотрены халаты, собственная кухня с посудой, чайником и микроволновой печью.',
    images: '',
    createdAt: ISODate('2026-02-22T09:23:02.557+00:00'),
    updatedAt: ISODate('2026-02-22T09:23:02.557+00:00'),
    isEnable: true
});

db.rooms.insert({
  hotel: ObjectId('66a03c28efad029c0db37f85'),
    title: 'Классический номер c двумя односпальными кроватями',
    description: 'Апартаменты с премиальной отделкой и полной меблировкой в новом апарт-отеле бизнес-класса Carsol-Hotel.',
    images: '',
    createdAt: ISODate('2026-02-22T09:23:02.557+00:00'),
    updatedAt: ISODate('2026-02-22T09:23:02.557+00:00'),
    isEnable: true
});