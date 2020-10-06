export class Filter {
    name: FilterType;
    icon: string;
}

export type FilterType = 
    'Title' | 
    'Description' | 
    'Price (min - max)' | 
    'Price (max - min)' | 
    'Email';