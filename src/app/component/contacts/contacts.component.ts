import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {TranslationService} from '../../translation.service';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedFilter = 'ALL';

  departments = [
    'ALL',
    'MANAGEMENT',
    'HULL',
    'SYSTEMS',
    'ELECTRICAL',
    'DEVICES',
    'OUTFITTING',
    'DESIGN',
    'IT',
    'FINANCE',
    // 'STABILITY',
  ];
  employees = [];

  constructor(public t: TranslationService, public device: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.fillEmployees();
    this.t.event.subscribe(event => {
      if (event === 'langChanged'){
        this.fillEmployees();
      }
    });
  }
  fillEmployees(): void{
    let counter = -1;
    if (this.t.lang === 'RU'){
        this.employees[++counter] = new Employee('Алфред', 'Тулиниус', 'alfred.jpg', 'atul@nautic-rus.ru', 'Генеральный Директор', 'MANAGEMENT');
        this.employees[++counter] = new Employee('Артём', 'Стропилов', 'stropilov.jpg', 'stropilov@nautic-rus.ru', 'Директор по проектам', 'MANAGEMENT');
        this.employees[++counter] = new Employee('Евгений', 'Воронин', 'voronin.jpg', 'voronin@nautic-rus.ru', 'Технический Директор', 'MANAGEMENT');
        this.employees[++counter] = new Employee('Алексей', 'Тоболев', 'tobolev.jpg', 'tobolev@nautic-rus.ru', 'Финансовый Директор', 'MANAGEMENT,FINANCE');
        this.employees[++counter] = new Employee('Александр', 'Львов', 'lvov.jpg', 'lvov@nautic-rus.ru', 'Руководитель Проекта', 'MANAGEMENT');
        this.employees[++counter] = new Employee('Никита', 'Новиков', 'nnovikov.jpg', 'n.novikov@nautic-rus.ru', 'Директор по качеству', 'MANAGEMENT');

        this.employees[++counter] = new Employee('Ольга', 'Шалыгина', 'shalygina.jpg', 'shalygina@nautic-rus.ru', 'Преподаватель английского', 'ENGLISH');

        this.employees[++counter] = new Employee('Анастасия', 'Коробова', '3.jpg', 'kopeiykina@nautic-rus.ru', 'Главный бухгалтер', 'FINANCE');

        this.employees[++counter] = new Employee('Алина', 'Дмитриева', 'dmitrieva.jpg', 'dmitrieva@nautic-rus.ru', 'Отдел дизайна', 'DESIGN', true);
        this.employees[++counter] = new Employee('Александр', 'Александров', 'aleksandrov.jpg', 'aleksandrov@nautic-rus.ru', 'Отдел дизайна', 'DESIGN');

        this.employees[++counter] = new Employee('Никита', 'Набоков', 'nabokov.jpg', 'nabokov@nautic-rus.ru', 'Отдел устройств', 'DEVICES', true);
        this.employees[++counter] = new Employee('Денис', 'Литвинов', 'litvinov.jpg', 'litvinov@nautic-rus.ru', 'Отдел устройств', 'DEVICES');

        this.employees[++counter] = new Employee('Ростислав', 'Мельников', 'melnikov.jpg', 'melnikov@nautic-rus.ru', 'Отдел достройки', 'OUTFITTING', true);
        this.employees[++counter] = new Employee('Сергей', 'Кораблев', 'korablev.jpg', 'korablev@nautic-rus.ru', 'Отдел достройки', 'OUTFITTING');
        this.employees[++counter] = new Employee('Елена', 'Яковлева', 'yakovleva.jpg', 'yakovleva@nautic-rus.ru', 'Отдел достройки', 'OUTFITTING');
        this.employees[++counter] = new Employee('Георгий', 'Белорусский', '1.jpg', 'belorusskiy@nautic-rus.ru', 'Отдел достройки', 'OUTFITTING');
        this.employees[++counter] = new Employee('Ксения', 'Ершова', 'ershova.png', 'ershova@nautic-rus.ru', 'Отдел достройки', 'OUTFITTING');

        this.employees[++counter] = new Employee('Дмитрий', 'Колесник', 'kolesnik.jpg', 'kolesnik@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL', true);
        this.employees[++counter] = new Employee('Григорий', 'Сидоров', 'sidorov.jpg', 'sidorov@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');
        this.employees[++counter] = new Employee('Дмитрий', 'Поярков', 'poiarkov.jpg', 'poiarkov@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');
        this.employees[++counter] = new Employee('Андрей', 'Лебедев', 'alebedev.jpg', 'lebedev@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');
        this.employees[++counter] = new Employee('Валентина', 'Ерисковская', 'eriskovskaia.jpg', 'eriskovskaia@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');
        this.employees[++counter] = new Employee('Сергей', 'Силиверстов', 'siliverstov.jpg', 'siliverstov@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');
        this.employees[++counter] = new Employee('Владислав', 'Солуянов', 'soluyanov.jpg', 'soluyanov@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');
        this.employees[++counter] = new Employee('Михаил', 'Ивашов', 'ivashov.jpg', 'ivashov@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');
        this.employees[++counter] = new Employee('Николай', 'Подлесных', 'podlesnih.jpg', 'podlesnyh@nautic-rus.ru', 'Электротехнический отдел', 'ELECTRICAL');


        this.employees[++counter] = new Employee('Николай', 'Клестов', 'klestov.jpg', 'klestov@nautic-rus.ru', 'Корпусный отдел', 'HULL', true);
        this.employees[++counter] = new Employee('Евгений', 'Новиков', 'enovikov.jpg', 'novikov@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Павел', 'Спиридович', 'spiridovich.jpg', 'spiridovich@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Павел', 'Жуков', 'zhukov.jpg', 'jukov@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Артём', 'Мамышев', 'mamyshev.jpg', 'mamyshev@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Михаил', 'Загуменнов', 'zagumennov.jpg', 'zagumenov@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Михаил', 'Лебедев', 'mlebedev.jpg', 'lebedev@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Роман', 'Дегоев', 'degoev.jpg', 'degoev@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Игорь', 'Николаев', 'nikolaev.jpg', 'nikolaev@nautic-rus.ru', 'Корпусный отдел', 'HULL');
        this.employees[++counter] = new Employee('Евгений', 'Кривоногов', 'krivonogov.jpg', 'krivonogov@nautic-rus.ru', 'Корпусный отдел', 'HULL');

        this.employees[++counter] = new Employee('Богдан', 'Исаев', 'isaev3.jpg', 'isaev@nautic-rus.ru', 'IT-отдел', 'IT');
        this.employees[++counter] = new Employee('Юлия', 'Исаева', 'isaeva1.png', 'stropilova@nautic-rus.ru', 'IT-отдел', 'IT');

        this.employees[++counter] = new Employee('Евгений', 'Голенищев', 'golenichev.jpg', 'golenishchev@nautic-rus.ru', 'Системный отдел', 'SYSTEMS', true);
        this.employees[++counter] = new Employee('Иван', 'Миклухин', 'mikluhin.jpg', 'miklukhin@nautic-rus.ru', 'Системный отдел', 'SYSTEMS');
        this.employees[++counter] = new Employee('Максим', 'Зотиков', 'zotikov.jpg', 'zotikov@nautic-rus.ru', 'Системный отдел', 'SYSTEMS');
        this.employees[++counter] = new Employee('Дмитрий', 'Козинец', '4.jpg', 'kozinec@nautic-rus.ru', 'Системный отдел', 'SYSTEMS');
        this.employees[++counter] = new Employee('Дмитрий', 'Ситников', 'sitnikov.jpg', 'sitnikov@nautic-rus.ru', 'Системный отдел', 'SYSTEMS');


    }
    else {
      this.employees[++counter] = new Employee('Alfreð', 'Tulinius', 'alfred.jpg', 'atul@nautic-rus.ru', 'General Director', 'MANAGEMENT');
      this.employees[++counter] = new Employee('Artem', 'Stropilov', 'stropilov.jpg', 'stropilov@nautic-rus.ru', 'Project Director', 'MANAGEMENT');
      this.employees[++counter] = new Employee('Evgenii', 'Voronin', 'voronin.jpg', 'voronin@nautic-rus.ru', 'Technical Director', 'MANAGEMENT');
      this.employees[++counter] = new Employee('Aleksei', 'Tobolev', 'tobolev.jpg', 'tobolev@nautic-rus.ru', 'Financial Director', 'MANAGEMENT,FINANCE');
      this.employees[++counter] = new Employee('Aleksandr', 'Lvov', 'lvov.jpg', 'lvov@nautic-rus.ru', 'Project Manager', 'MANAGEMENT');
      this.employees[++counter] = new Employee('Nikita', 'Novikov', 'nnovikov.jpg', 'n.novikov@nautic-rus.ru', 'Chief Quality Officer', 'MANAGEMENT');

      this.employees[++counter] = new Employee('Olga', 'Shalygina', 'shalygina.jpg', 'shalygina@nautic-rus.ru', 'English Teacher', 'ENGLISH');

      this.employees[++counter] = new Employee('Anastasiia', 'Korobova', '3.jpg', 'kopeiykina@nautic-rus.ru', 'Chief accountant', 'FINANCE');

      this.employees[++counter] = new Employee('Alina', 'Dmitrieva', 'dmitrieva.jpg', 'dmitrieva@nautic-rus.ru', 'Design department', 'DESIGN', true);
      this.employees[++counter] = new Employee('Aleksandr', 'Aleksandrov', 'aleksandrov.jpg', 'aleksandrov@nautic-rus.ru', 'Design department', 'DESIGN');

      this.employees[++counter] = new Employee('Nikita', 'Nabokov', 'nabokov.jpg', 'nabokov@nautic-rus.ru', 'Devices department', 'DEVICES', true);
      this.employees[++counter] = new Employee('Denis', 'Litvinov', 'litvinov.jpg', 'litvinov@nautic-rus.ru', 'Devices department', 'DEVICES');

      this.employees[++counter] = new Employee('Rostislav', 'Melnikov', 'melnikov.jpg', 'melnikov@nautic-rus.ru', 'Outfitting department', 'OUTFITTING', true);
      this.employees[++counter] = new Employee('Sergei', 'Korablev', 'korablev.jpg', 'korablev@nautic-rus.ru', 'Outfitting department', 'OUTFITTING');
      this.employees[++counter] = new Employee('Elena', 'Yakovleva', 'yakovleva.jpg', 'yakovleva@nautic-rus.ru', 'Outfitting department', 'OUTFITTING');
      this.employees[++counter] = new Employee('Georgiy', 'Belorusskiy', '1.jpg', 'belorusskiy@nautic-rus.ru', 'Outfitting department', 'OUTFITTING');
      this.employees[++counter] = new Employee('Ksenia', 'Ershova', 'ershova.png', 'ershova@nautic-rus.ru', 'Outfitting department', 'OUTFITTING');


      this.employees[++counter] = new Employee('Dmitrii', 'Kolesnik', 'kolesnik.jpg', 'kolesnik@nautic-rus.ru', 'Electrical department', 'ELECTRICAL', true);
      this.employees[++counter] = new Employee('Grigory', 'Sidorov', 'sidorov.jpg', 'sidorov@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');
      this.employees[++counter] = new Employee('Dmitrii', 'Poiarkov', 'poiarkov.jpg', 'poiarkov@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');
      this.employees[++counter] = new Employee('Andrei', 'Lebedev', 'alebedev.jpg', 'lebedev@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');
      this.employees[++counter] = new Employee('Valentina', 'Eriskovskaya', 'eriskovskaia.jpg', 'eriskovskaia@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');
      this.employees[++counter] = new Employee('Sergei', 'Siliverstov', 'siliverstov.jpg', 'siliverstov@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');
      this.employees[++counter] = new Employee('Vladislav', 'Soluyanov', 'soluyanov.jpg', 'soluyanov@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');
      this.employees[++counter] = new Employee('Mihail', 'Ivashov', 'ivashov.jpg', 'ivashov@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');
      this.employees[++counter] = new Employee('Nikolai', 'Podlesnyh', 'podlesnih.jpg', 'podlesnyh@nautic-rus.ru', 'Electrical department', 'ELECTRICAL');

      this.employees[++counter] = new Employee('Nikolai', 'Klestov', 'klestov.jpg', 'klestov@nautic-rus.ru', 'Hull department', 'HULL', true);
      this.employees[++counter] = new Employee('Evgenii', 'Novikov', 'enovikov.jpg', 'novikov@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Pavel', 'Spiridovich', 'spiridovich.jpg', 'spiridovich@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Pavel', 'Zhukov', 'zhukov.jpg', 'jukov@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Artem', 'Mamyshev', 'mamyshev.jpg', 'mamyshev@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Mihail', 'Zagumennov', 'zagumennov.jpg', 'zagumenov@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Mihail', 'Lebedev', 'mlebedev.jpg', 'lebedev@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Roman', 'Degoev', 'degoev.jpg', 'degoev@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Igor', 'Nikolaev', 'nikolaev.jpg', 'nikolaev@nautic-rus.ru', 'Hull department', 'HULL');
      this.employees[++counter] = new Employee('Evgenii', 'Krivonogov', 'krivonogov.jpg', 'krivonogov@nautic-rus.ru', 'Hull department', 'HULL');

      this.employees[++counter] = new Employee('Bogdan', 'Isaev', 'isaev3.jpg', 'isaev@nautic-rus.ru', 'IT department', 'IT');
      this.employees[++counter] = new Employee('Iuliia', 'Isaeva', 'isaeva1.png', 'stropilova@nautic-rus.ru', 'IT department', 'IT');

      this.employees[++counter] = new Employee('Evgenii', 'Golenishchev', 'golenichev.jpg', 'golenishchev@nautic-rus.ru', 'Systems department', 'SYSTEMS', true);
      this.employees[++counter] = new Employee('Ivan', 'Mikluhin', 'mikluhin.jpg', 'miklukhin@nautic-rus.ru', 'Systems department', 'SYSTEMS');
      this.employees[++counter] = new Employee('Maksim', 'Zotikov', 'zotikov.jpg', 'zotikov@nautic-rus.ru', 'Systems department', 'SYSTEMS');
      this.employees[++counter] = new Employee('Dmitrii', 'Kozinec', '4.jpg', 'kozinec@nautic-rus.ru', 'Systems department', 'SYSTEMS');
      this.employees[++counter] = new Employee('Dmitrii', 'Sitnikov', 'sitnikov.jpg', 'sitnikov@nautic-rus.ru', 'Systems department', 'SYSTEMS');



    }
  }

  getPeople(): Employee[] {
    return this.employees.filter(x => x.group.split(',').includes(this.selectedFilter) && !x.header || this.selectedFilter === 'ALL');
  }
  getHeader(): Employee[] {
    return this.employees.filter(x => x.group === this.selectedFilter && x.header);
  }
  selectFilter(dep: string): void {
    this.selectedFilter = dep;
  }
}
