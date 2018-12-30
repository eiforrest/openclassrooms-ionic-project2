import { Item } from '../models/Item';

export class ItemsService {
    bookList: Item[] = [
        {
            name: 'The catcher in the rye',
            isLent: true
        },
        {
            name: 'Les miserables',
            isLent: true
        },
        {
            name: 'Tortilla flat',
            isLent: false
        }
    ];

    cdList: Item[] = [
        {
            name: 'Rolling stones',
            isLent: true
        },
        {
            name: 'The Beatles',
            isLent: true
        },
        {
            name: 'Queen',
            isLent: false
        }
    ];

    onToggleItem(item: Item) {
        item.isLent = !item.isLent;
      }
}