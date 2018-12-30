import { Component } from '@angular/core';
import { BookListPage } from '../books/bookList';
import { CdListPage } from '../CDs/cdList';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  bookListPage:any = BookListPage;
  cdListPage:any = CdListPage;
}